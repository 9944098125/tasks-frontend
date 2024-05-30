import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const CreateForm = ({ formik, task }: any) => {
	const changeStatus = (event: any) => {
		formik.setFieldValue("status", event.target.value);
	};
	return (
		<React.Fragment>
			<form onSubmit={formik.handleSubmit}>
				<div className="w-full p-2">
					<div className="flex flex-col w-full mb-4">
						<label htmlFor="title" className="text-sm text-cyan-700 font-bold">
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
						<label htmlFor="title" className="text-sm text-cyan-700 font-bold">
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
						<label htmlFor="title" className="text-sm text-cyan-700 font-bold">
							Date
						</label>
						<DatePicker
							className="w-full bg-gray-200"
							value={formik.values.dueDate}
							onChange={(date: any) => formik.setFieldValue("dueDate", date)}
						/>
					</div>
					{task && (
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
					)}
					<button
						type="submit"
						className="bg-cyan-700 text-white border-none h-[45px] hover:bg-cyan-800 outline-none w-full font-bold">
						Submit
					</button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default CreateForm;
