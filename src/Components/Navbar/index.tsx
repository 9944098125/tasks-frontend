import React from "react";
import logo from "../../Assets/logo.png";
import CreateButton from "../../Utils/CreateButton";

type NavbarProps = {
	filterTodo: any;
	searchTerm: string;
	setSearchTerm: (event: any) => void;
	setStatusFilter: (value: string) => void;
};
const Navbar = (props: NavbarProps) => {
	const { filterTodo, searchTerm, setSearchTerm, setStatusFilter } = props;
	const handleStatusChange = (event: any) => {
		setStatusFilter(event.target.value);
	};
	return (
		<React.Fragment>
			<nav className="bg-white fixed-top h-[70px] flex items-center justify-between px-10 py-2 shadow-lg">
				<div className="flex items-center space-x-3 px-5">
					<img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
					<h6 className="text-2xl text-cyan-600 font-bold">Todo</h6>
				</div>
				<div className="hidden lg:flex items-center space-x-4 py-2">
					<input
						type="text"
						placeholder="search by title"
						name="searchTerm"
						value={searchTerm}
						onChange={(event: any) => setSearchTerm(event?.target.value)}
						onInput={filterTodo}
						className="h-[45px] w-[300px] border-none outline-none bg-gray-300 rounded px-2 py-1"
					/>
				</div>
				<div className="hidden lg:flex items-center space-x-3">
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
				<div className="icon-container">
					<CreateButton />
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
