import React from "react";

type DeadlineProps = {
	task: {
		_id: string;
		title: string;
		description: string;
		dueDate: string;
		status: string;
	};
};
const Deadline = (props: DeadlineProps) => {
	const { task } = props;
	const addOneDay = (date: any) => {
		const dueDate = new Date(date);
		return `${dueDate.getDate()}-${
			dueDate.getMonth() + 1
		}-${dueDate.getFullYear()}`;
	};
	return (
		<React.Fragment>
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
						{addOneDay(task.dueDate)}
					</span>
				</p>
			</div>
		</React.Fragment>
	);
};

export default Deadline;
