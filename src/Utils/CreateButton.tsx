import React from "react";
import TasksModal from "../Components/Modals/TasksModal";

const CreateButton = () => {
	const [showCreateModal, setShowCreateModal] = React.useState(false);

	return (
		<React.Fragment>
			<button
				onClick={() => setShowCreateModal(true)}
				className="bg-cyan-600 text-white px-3 py-2 h-[45px] rounded-lg border-none outline-none hover:bg-cyan-800">
				Create
			</button>
			<TasksModal
				modalTitle="Create a Task"
				showModal={showCreateModal}
				setShowModal={setShowCreateModal}
			/>
		</React.Fragment>
	);
};

export default CreateButton;
