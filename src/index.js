import React from "react";
import ReactDOM from 'react-dom';
import "./Style.css";
import randomColor from "randomcolor";

// let color = randomColor();

class App extends React.Component{
    
    state ={
        number: 0,
        bgcolor: "blue"
    }


    onButtonSubmit = (event) =>{
        event.preventDefault();
        this.setState({
            number:this.state.number + 1,
            bgcolor: randomColor()
        })

    }

    onButtonClick = (event) =>{
        event.preventDefault();
        this.setState({number: 0})
    }


    render(){
        return(
            <div>
                <span>{this.state.number}</span>
                <button onClick={this.onButtonSubmit}>Click Here!</button>
                <button onClick={this.onButtonClick}>Restart</button>
                <div className="testBox" style={{ backgroundColor: this.state.bgcolor }} onClick={this.onButtonSubmit}></div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)