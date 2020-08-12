import React, { useState } from 'react';
import TodoList from './components/todos';
import AddNewTodos from './components/addNewTodos';
import { Todo } from './model/todo';

function App(): React.ReactElement {
	let [list, setList] = useState<Todo[]>([]);

	const addTodoHandler = (value: string) => {
		setList(prevList => [
			...prevList,
			{ id: list.length.toString(), text: value },
		]);
	};

	const deleteTodoHandler = (id: string) => {
		setList(prevList => prevList.filter(todo => todo.id !== id));
	};

	return (
		<div className='App'>
			<AddNewTodos addTodo={addTodoHandler} />
			<TodoList items={list} deleteTodo={deleteTodoHandler} />
		</div>
	);
}

export default App;
