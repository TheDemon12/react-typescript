import * as React from 'react';
import './NewTodo.css';

export interface AddNewTodosProps {
	addTodo: (value: string) => void;
}

const AddNewTodos: React.FC<AddNewTodosProps> = props => {
	const [value, setValue] = React.useState('');

	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		props.addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<div className='form-control'>
				<label htmlFor='todo-text'>Description</label>
				<input
					id='todo-text'
					type='text'
					value={value}
					onChange={e => setValue(e.currentTarget.value)}
				/>
			</div>

			<button type='submit'>Add Todo</button>
		</form>
	);
};

export default AddNewTodos;
