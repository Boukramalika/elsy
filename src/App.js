import React from "react";
import './styles/global.css';
import './App.css';
import Box from './components/Box.jsx';


const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water:1.5, 
      heart: 120, 
      temperature: -10, 
      steps:3000
    };
  }
  onStepsChange = (e) => {
    this.setState({ steps: e.target.value });
  };
  onHeartChange = (e) => {
    this.setState({ heart: e.target.value });
  };
    onTempChange = (e) => {
    this.setState({ temp: e.target.value });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onChange={this.onStepsChange}
          />
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" min ={heartMin}  max={ heartMax }  onChange={this.onHeartChange}
          />
          <Box icon="wb_sunny" color="yellow" value={this.state.temp} unit="°C" min={tempMin } max={tempMax }  onChange={this.onTempChange}/>

        </div>
      </div>
    );
  }
}
export default App;

