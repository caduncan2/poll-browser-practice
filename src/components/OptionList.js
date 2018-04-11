import React, { Component } from 'react';
import AddOption from './AddOption.js';
import UserOption from './Option.js';

const optionList = (props) => {
	const userOptions = props.userOptions;
	return (
		<div>
			<h1>User Options</h1>
			<AddOption addNewOption={props.addNewOption} />
			<ul>
				{userOptions.map((option) => {
					return <UserOption name={option} />
				})}
			</ul>
		</div>
	)
}

export default optionList;