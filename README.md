# Todo App

This project is a simple Todo application built using React, Redux Toolkit, and RTK Query. It allows users to create, read, update, and delete tasks. The app has a responsive design and uses React-Bootstrap for modals.

## Features

- **Navbar**: Contains a logo on the left and a "Create" button on the right.
- **Create Todo**: Opens a modal to create a new task with title, description, due date, and status fields.
- **Dashboard**: Displays the list of created todos.
- **View Todo Details**: Clicking on a todo opens a modal showing more details.
- **Edit Todo**: An edit button in the details modal allows editing the todo.
- **Delete Todo**: A delete button in the details modal allows deleting the todo.

## Installation

1. **Clone the backend and frontend**:
   ```bash
   git clone https://github.com/yourusername/tasks-backend.git
   git clone https://github.com/yourusername/tasks-frontend.git
   cd backend folder and cd frontend folder
   ```

Install dependencies:

bash
Copy code
npm install in backend and frontend folders
Start the development server:

bash
Copy code
npm start for both backend and frontend
Usage
Navbar
Logo: Located on the left side.
Create Button: Located on the right side. Clicking this button opens a modal to create a new task.
Creating a Todo
Click on the Create button in the navbar.
A modal will open with fields for:
Title: Enter the task title.
Description: Enter the task description.
Due Date: Pick a due date for the task.
Status: Select the task status (Pending or Completed).
Click Submit to create the task.
The new task will appear in the dashboard.
Viewing Todo Details
Click on a task in the dashboard.
A modal will open displaying the task details including title, description, due date, and status.
Editing a Todo
In the task details modal, click the Edit button.
The modal for editing the task will open.
Modify the fields as necessary and click Submit.
The updated task will appear in the dashboard.
Deleting a Todo
In the task details modal, click the Delete button.
The task will be deleted from the dashboard.
Components
Navbar Component
Location: src/components/Navbar.tsx
Description: Contains the logo and the "Create" button.
Task Modal Component
Location: src/components/TaskModal.tsx
Description: Displays detailed information about a task and provides buttons to edit or delete the task.
Tasks Modal Component
Location: src/components/TasksModal.tsx
Description: Provides a form to create or edit a task.
Dashboard Component
Location: src/components/Dashboard.tsx
Description: Displays a list of all created tasks.
Redux
Actions and Reducers: Located in src/redux/actions/todo.ts.
Store: Configured in src/redux/store.ts.
API
The app uses RTK Query for making API calls. The following endpoints are used:

Get Todos: Fetches the list of todos.
Create Todo: Adds a new todo.
Update Todo: Edits an existing todo.
Delete Todo: Removes a todo.
Dependencies
React
Redux Toolkit
RTK Query
React-Bootstrap
Formik
Yup
React-Date-Picker
React-Hot-Toast
