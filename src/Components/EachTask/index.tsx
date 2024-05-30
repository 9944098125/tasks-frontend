import React from "react";
import TaskModal from "../Modals/TaskModal";

type TaskProps = {
	task: {
		_id: string;
		title: string;
		description: string;
		dueDate: string;
		status: string;
	};
};
const Task = (props: TaskProps) => {
	const { task } = props;
	const [showTaskModal, setShowTaskModal] = React.useState(false);

	return (
		<React.Fragment>
			<div
				onClick={() => setShowTaskModal(true)}
				className="relative cursor-pointer w-[300px] h-[150px] rounded-lg shadow-lg p-3 bg-white me-3 mb-4">
				<h4 className="text-gray-600 font-bold text-2xl">{task.title}</h4>
				<span className="absolute bottom-[10px] right-[10px]">
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
				</span>
			</div>
			{showTaskModal && (
				<TaskModal
					task={task}
					showModal={showTaskModal}
					setShowModal={setShowTaskModal}
				/>
			)}
		</React.Fragment>
	);
};

export default Task;
