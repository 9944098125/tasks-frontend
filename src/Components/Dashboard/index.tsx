import React from "react";
import Navbar from "../Navbar";
import Task from "../EachTask";
import { useGetTodoQuery } from "../../Redux/Actions/todo";

const Dashboard = () => {
	const { data, refetch } = useGetTodoQuery();
	console.log(data);

	React.useEffect(() => {
		refetch();
	}, [refetch]);

	return (
		<React.Fragment>
			<Navbar />
			<div className="bg-white my-10">
				<div className="w-full flex items-center flex-wrap px-5 py-5">
					{data?.tasks.map((task: any) => {
						return <Task task={task} key={task._id} />;
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
