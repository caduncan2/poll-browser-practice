import React from 'react';

const addOption = (props) => {
	return (
		<form onSubmit={props.addNewOption()}>
			<input type="text" />
			<button type="submit">Add</button>
		</form>
	)
}

export default addOption;