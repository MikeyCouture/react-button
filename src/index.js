import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component{

    state ={
        number: 0
    }

    onButtonSubmit = (event) =>{
        event.preventDefault();

        this.setState({number:this.state.number + 1})

    }


    render(){
        return(
            <div>
                <span>{this.state.number}</span>
                <button onClick={this.onButtonSubmit}>Click Here!</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)