import React from 'react';

const userOption = (props) => {
	console.log(props);
	return (
		<li>{props.name}</li>		
	)
}

export default userOption;