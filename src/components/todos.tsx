import * as React from 'react';
import { Todo } from '../model/todo';
import './TodoList.css';

export interface TodoListProps {
	items: Todo[];
	deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
	return (
		<ul>
			{props.items.map(todo => (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
