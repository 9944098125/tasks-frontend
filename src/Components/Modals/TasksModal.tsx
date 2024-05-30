import React from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
	useCreateTodoMutation,
	useGetTodoQuery,
	useUpdateTodoMutation,
} from "../../Redux/Actions/todo";
import toast from "react-hot-toast";
import CreateForm from "../../Utils/CreateForm";
import { Values } from "../../Utils/interfaces";

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

	const submitCreateModal = async (values: Values) => {
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

	const submitUpdateModal = async (id: string, values: Values) => {
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
			dueDate: task
				? new Date(task.dueDate).toDateString()
				: new Date().toDateString(),
			status: task ? task.status : "",
		},
		validationSchema: validationSchema,
		onSubmit: (values: Values, { resetForm }) => {
			if (task) {
				submitUpdateModal(task._id, values);
			} else {
				submitCreateModal(values);
			}
			resetForm();
		},
	});

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
					<CreateForm formik={formik} task={task} />
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default TasksModal;
