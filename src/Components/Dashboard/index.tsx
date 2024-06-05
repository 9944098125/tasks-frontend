import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../Navbar";
import Task from "../EachTask";
import { useGetTodoQuery } from "../../Redux/Actions/todo";

const Dashboard = () => {
	const { data, refetch } = useGetTodoQuery();
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredTasks, setFilteredTasks] = useState<any[]>([]);
	const [statusFilter, setStatusFilter] = useState("ALL");

	const filterTasks = useCallback(() => {
		if (data) {
			let filtered = data.tasks;

			if (statusFilter !== "ALL") {
				filtered = filtered.filter((task: any) => task.status === statusFilter);
			}

			if (searchTerm !== "") {
				filtered = filtered.filter((task: any) =>
					task.title.toLowerCase().includes(searchTerm.toLowerCase())
				);
			}

			setFilteredTasks(filtered);
		}
	}, [data, searchTerm, statusFilter]);

	useEffect(() => {
		refetch();
	}, [refetch]);

	useEffect(() => {
		if (data) {
			setFilteredTasks(data.tasks);
		}
	}, [data]);

	useEffect(() => {
		filterTasks();
	}, [searchTerm, statusFilter, filterTasks]);

	const handleSearchInput = useCallback((event: any) => {
		setSearchTerm(event.target.value);
	}, []);

	const handleStatusChange = (event: any) => {
		setStatusFilter(event.target.value);
	};

	return (
		<React.Fragment>
			<Navbar
				filterTodo={handleSearchInput}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				setStatusFilter={setStatusFilter}
			/>
			<div className="bg-white my-10 pt-10">
				<div className="flex justify-center items-center space-x-4 py-2 lg:hidden">
					<input
						type="text"
						placeholder="search by title"
						name="searchTerm"
						value={searchTerm}
						onChange={(event: any) => setSearchTerm(event?.target.value)}
						onInput={handleSearchInput}
						className="h-[45px] w-[300px] border-none outline-none bg-gray-300 rounded px-2 py-1"
					/>
				</div>
				<div className="flex justify-center items-center space-x-3 lg:hidden">
					<label
						htmlFor="all"
						className="text-sm text-cyan-700 cursor-pointer border-2 border-cyan-500 rounded-lg px-3 py-1 flex items-center space-x-2">
						<span className="radio-label">ALL</span>
						<span className="radio-replacement"></span>
						<input
							id="all"
							type="radio"
							name="status"
							value="ALL"
							onChange={handleStatusChange}
							className="h-[25px] w-[25px]"
							defaultChecked
						/>
					</label>
					<label
						htmlFor="completed"
						className="text-sm text-cyan-700 cursor-pointer border-2 border-cyan-500 rounded-lg px-3 py-1 flex items-center space-x-2">
						<span className="radio-label">COMPLETED</span>
						<span className="radio-replacement"></span>
						<input
							id="completed"
							type="radio"
							name="status"
							value="COMPLETED"
							onChange={handleStatusChange}
							className="h-[25px] w-[25px]"
						/>
					</label>
					<label
						htmlFor="pending"
						className="text-sm text-cyan-700 cursor-pointer border-2 border-cyan-500 rounded-lg px-3 py-1 flex items-center space-x-2">
						<span className="radio-label">PENDING</span>
						<span className="radio-replacement"></span>
						<input
							id="pending"
							type="radio"
							name="status"
							value="PENDING"
							onChange={handleStatusChange}
							className="h-[25px] w-[25px]"
						/>
					</label>
				</div>
				<div className="w-full flex items-center flex-wrap px-5 py-5">
					{filteredTasks?.map((task: any) => {
						return <Task task={task} key={task._id} />;
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
