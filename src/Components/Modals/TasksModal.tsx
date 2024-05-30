import React from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import {
	useCreateTodoMutation,
	useGetTodoQuery,
	useUpdateTodoMutation,
} from "../../Redux/Actions/todo";
import toast from "react-hot-toast";

type CreateModalProps = {
	showModal: any;
	setShowModal: any;
	modalTitle: string;
	task?: {
		_id: string;
		title: string;
		description: string;
		dueDate: string;
		status: string;
	};
};

const validationSchema = Yup.object({
	title: Yup.string().required("Title is required !"),
	description: Yup.string().required("Description is required !"),
});

const TasksModal = (props: CreateModalProps) => {
	const { showModal, setShowModal, modalTitle, task } = props;
	const [createTodo] = useCreateTodoMutation();
	const [updateTodo] = useUpdateTodoMutation();
	const { refetch } = useGetTodoQuery();

	const submitCreateModal = async (values: any) => {
		try {
			const res = await createTodo({
				title: values.title,
				description: values.description,
				dueDate: values.dueDate.toString(),
				status: values.status,
			}).unwrap();
			refetch();
			if (res) {
				// console.log("res", res);
				toast.success("Todo created successfully");
				setShowModal(false);
			}
		} catch (err: any) {
			console.log(err);
		}
	};

	const submitUpdateModal = async (id: string, values: any) => {
		try {
			const res = await updateTodo({
				taskId: id,
				body: values,
			});
			refetch();
			if (res?.data) {
				toast.success("Todo updated successfully");
				setShowModal(false);
			}
		} catch (err: any) {
			console.log(err);
		}
	};

	const formik = useFormik({
		initialValues: {
			title: task ? task.title : "",
			description: task ? task.description : "",
			dueDate: task ? new Date(task.dueDate) : new Date(),
			status: task ? task.status : "",
		},
		validationSchema: validationSchema,
		onSubmit: (values: any, { resetForm }) => {
			if (task) {
				submitUpdateModal(task._id, values);
			} else {
				submitCreateModal(values);
			}
			resetForm();
		},
	});

	const changeStatus = (event: any) => {
		formik.setFieldValue("status", event.target.value);
	};

	return (
		<React.Fragment>
			<Modal
				show={showModal}
				onHide={() => setShowModal(false)}
				centered
				animation
				backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>
						<p className="text-xl text-cyan-700 font-bold">{modalTitle}</p>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={formik.handleSubmit}>
						<div className="w-full p-2">
							<div className="flex flex-col w-full mb-4">
								<label
									htmlFor="title"
									className="text-sm text-cyan-700 font-bold">
									Title
								</label>
								<input
									type="text"
									name="title"
									id="title"
									className={`h-[45px] w-full px-2 bg-gray-200 rounded-md outline-none ${
										formik.errors.title && formik.touched.title
											? "border border-red-500"
											: "border-none"
									}`}
									value={formik.values.title}
									onChange={formik.handleChange}
								/>
							</div>
							<div className="flex flex-col w-full mb-4">
								<label
									htmlFor="title"
									className="text-sm text-cyan-700 font-bold">
									Description
								</label>
								<textarea
									name="description"
									id="description"
									className={`w-full px-2 bg-gray-200 rounded-md outline-none ${
										formik.errors.description && formik.touched.description
											? "border border-red-500"
											: "border-none"
									}`}
									value={formik.values.description}
									onChange={formik.handleChange}
									rows={5}
								/>
							</div>
							<div className="flex flex-col w-full mb-4">
								<label
									htmlFor="title"
									className="text-sm text-cyan-700 font-bold">
									Date
								</label>
								<DatePicker
									className="w-full bg-gray-200"
									value={formik.values.dueDate}
									onChange={(date) => formik.setFieldValue("dueDate", date)}
								/>
							</div>
							<div className="flex flex-col w-full mb-4">
								<label
									htmlFor="title"
									className="text-sm text-cyan-700 font-bold">
									Status
								</label>
								<select
									name="status"
									value={formik.values.status}
									onChange={changeStatus}
									className="w-full px-2 bg-gray-200 rounded-md outline-none border-none h-[45px]">
									<option value="PENDING" defaultValue={"Pending"}>
										Pending
									</option>
									<option value="COMPLETED">Completed</option>
								</select>
							</div>
							<button
								type="submit"
								className="bg-cyan-700 text-white border-none h-[45px] hover:bg-cyan-800 outline-none w-full font-bold">
								Submit
							</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default TasksModal;
