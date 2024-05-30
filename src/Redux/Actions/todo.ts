import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
	_id: string;
	title: string;
	description: string;
	dueDate: string;
	status: string;
}

export const todoApi = createApi({
	reducerPath: "todoApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
	endpoints: (builder) => ({
		getTodo: builder.query<any, void>({
			query: () => "tasks",
		}),
		createTodo: builder.mutation<Todo, Partial<Todo>>({
			query: (body) => ({
				url: "tasks",
				method: "POST",
				body,
			}),
		}),
		updateTodo: builder.mutation<Todo, { taskId: string; body: Partial<Todo> }>(
			{
				query: ({ taskId, body }) => ({
					url: `tasks/${taskId}`,
					method: "PATCH",
					body,
				}),
			}
		),
		deleteTodo: builder.mutation<{ success: boolean; taskId: string }, string>({
			query: (taskId) => ({
				url: `tasks/${taskId}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetTodoQuery,
	useCreateTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} = todoApi;
