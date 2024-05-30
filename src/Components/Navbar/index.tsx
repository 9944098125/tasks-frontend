import React from "react";
import logo from "../../Assets/logo.png";
import CreateButton from "../../Utils/CreateButton";

const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="bg-white fixed-top h-[70px] flex items-center justify-between px-10 py-2 shadow-lg">
				<div className="flex items-center space-x-3 px-5">
					<img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
					<h6 className="text-2xl text-cyan-600 font-bold">Todo</h6>
				</div>
				<div className="icon-container">
					<CreateButton />
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
