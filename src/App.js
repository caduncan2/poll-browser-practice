import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OptionList from './components/OptionList.js';
import ProgressBar from './components/ProgressBar.js';
import SelectionList from './components/SelectionList.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    categoryOptions: ["Movies", "Fashion", "Toys"],
    radiusOptions: ["Local (1-5 miles)", "City (5-25 miles", "National (25+ miles"],
    userQuestion: '',
    userOptions: ['Avengers', 'Batman', 'Superman']
  }
  addNewOption = (e, optionName) => {
    e.preventDefault();
    console.log(e.target.value);
  }


  addUserOption = (e) => {
    console.log(e.target.value);
  }

  saveQuestion = (e) => {
    const userQuestion = e.target.value;
    const currentState = {...this.state};
    currentState.userQuestion = userQuestion;
    this.setState(currentState);
  }

  render() {
    const style = {
      display: "block",
      fontSize: "2em",
      textAlign: "center",
      margin: 20,
      width: 100
    }
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="The-Box">
          <ProgressBar mode="indeterminate" />
          <SelectionList 
            selectionTitle = "Pick a Category" 
            selectionOptions = {this.state.categoryOptions}/>
          <SelectionList 
            selectionTitle = "Select a Radius" 
            selectionOptions = {this.state.radiusOptions}/>
          <SelectionList 
            selectionTitle = "What's Your Question"
            selectionOptions = {[]} />
          <input type="text" onChange={this.saveQuestion} placeholder="Ask your question here"/>    
          <p>{this.state.userQuestion}</p>
          <OptionList userOptions={this.state.userOptions} addNewOption={this.addNewOption}  />
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
