import React from "react";
import { Modal } from "react-bootstrap";
import TasksModal from "./TasksModal";
import {
	useDeleteTodoMutation,
	useGetTodoQuery,
} from "../../Redux/Actions/todo";
import toast from "react-hot-toast";

type TaskModalProps = {
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	task: {
		_id: string;
		title: string;
		description: string;
		dueDate: string;
		status: string;
	};
};

const TaskModal = (props: TaskModalProps) => {
	const { showModal, setShowModal, task } = props;
	const [showEditModal, setShowEditModal] = React.useState(false);
	const [deleteTodo] = useDeleteTodoMutation();
	const { refetch } = useGetTodoQuery();

	const deleteTask = (id: string) => {
		deleteTodo(id);
		toast.success("Todo deleted successfully");
		setShowModal(false);
		refetch();
	};

	return (
		<React.Fragment>
			<Modal
				show={showModal}
				onHide={() => setShowModal(false)}
				centered
				backdrop="static"
				animation
				size="lg">
				<Modal.Header closeButton>
					<Modal.Title>
						<h4 className="text-cyan-700 font-bold text-2xl">Task</h4>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="relative flex flex-col">
						<div className="mb-3 shadow-lg rounded-lg p-2">
							<h3 className="text-3xl font-bold text-cyan-700 mb-2">
								{task.title}
							</h3>
							<p className="text-xl font-light text-gray-600">
								{task.description}
							</p>
						</div>
						<div className="px-2 pb-5 flex items-center space-x-5">
							<button
								onClick={() => setShowEditModal(true)}
								className="bg-cyan-600 hover:bg-cyan-800 py-1 px-4 text-white rounded-lg border-none outline-none shadow-lg">
								Edit
							</button>
							{showEditModal && (
								<TasksModal
									modalTitle="Edit the Task"
									showModal={showEditModal}
									setShowModal={setShowEditModal}
									task={task}
								/>
							)}
							<button
								onClick={() => deleteTask(task._id)}
								className="bg-red-500 hover:bg-red-800 py-1 px-3 text-white rounded-lg border-none outline-none shadow-lg">
								Delete
							</button>
						</div>
						<div className="absolute bottom-0 left-0 flex items-center space-x-4">
							{task.status === "COMPLETED" ? (
								<div className="flex items-center space-x-4">
									<div
										className="bg-green-500 h-[15px] w-[15px]"
										style={{ borderRadius: "50%" }}></div>
									<p className="text-sm m-0 ms-2 text-gray-600 font-bold">
										{task.status}
									</p>
								</div>
							) : (
								<div className="flex items-center space-x-4">
									<div
										className="bg-red-500 h-[15px] w-[15px]"
										style={{ borderRadius: "50%" }}></div>
									<p className="text-sm m-0 ms-2 text-gray-600 font-bold">
										{task.status}
									</p>
								</div>
							)}
							<p className="font-light m-0 ms-5 text-md">
								Deadline is -{" "}
								<span className="text-cyan-700 font-bold text-sm underline">
									{task.dueDate.split("GMT")[0]}
								</span>
							</p>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default TaskModal;
