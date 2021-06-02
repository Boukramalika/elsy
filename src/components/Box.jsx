import React from "react";
import '../App.css';
class Box extends React.Component {
    render() {
        let slider
        if (this.props.icon !== "local_drink") {
          slider = <input type="range" min={this.props.min}  max={this.props.max} onChange={this.props.onChange}   value={this.props.value}></input>
        } else { slider = null }
 
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons"
                    style={{ fontSize: 100, color: this.props.color }}>
                    {this.props.icon}</span>
                <p>{this.props.value} {this.props.unit}</p>
                <div>
                    {slider}
                </div>
            </div>
        )
    }
}
export default Box;