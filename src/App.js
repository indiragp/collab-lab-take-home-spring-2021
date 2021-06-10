import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState('Here is some example text.');
  const [textOutput, setTextOutput] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState('lowercase');

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(selectedOption == 'lowercase') {
      setTextOutput(textInput.toLowerCase());
    } else {
      setTextOutput(textInput.toUpperCase());
    }
  };

  const handleChangeRadio = event => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea onChange={handleChange} value={textInput}/>
        </label>
        <div className="radio" >
          <label>
            <input type="radio" value="lowercase" checked={selectedOption == "lowercase"} onChange={handleChangeRadio}/>
            Lowercase
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="uppercase" checked={selectedOption == "uppercase"} onChange={handleChangeRadio}/>
            Uppercase
          </label>
        </div>
        <input type="submit" value="Submit"/>
      </form>
      <div id="result">
        {textOutput}
      </div>
    </div>
  );
}

export default App;
