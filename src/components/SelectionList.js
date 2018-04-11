import React, { Component } from 'react';

const selectionList = (props) => {
	const renderedList = () => {
		let listDiv = undefined;
		if (props.selectionOptions.length > 0) {
			listDiv = (
				<select>
				{props.selectionOptions.map((selectionOption) => {
					return <option value ={selectionOption}>
							{selectionOption}
						   </option>
				})}
			</select>
			)
		}
		return listDiv;
	}
	
	return (
		<div>
			<h1>{props.selectionTitle}</h1>
			{renderedList()}
		</div>
	)
}

export default selectionList;
