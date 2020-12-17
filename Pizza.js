import React, { Component } from 'react'
import pizza from './pizza.png';


const Counter = {
    fontSize: "82px",
    backgroundColor: "black",
    borderRadius: "20px"
}

const button = {
    fontSize: "28px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "10px"
}


class Pizza extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    takeOrder() {
        this.setState({
            count: this.state.count + 1
        })
    }

    cancelOrder() {
        this.setState({
            count: this.state.count - 1
        })
    }




    render() {
        return (
            <div>
                <img src={pizza} width="200" />
                <h1>Pizza order counter</h1>
                <h1 style={Counter}>{this.state.count}</h1>
                <button style={button} onClick={() => this.takeOrder()}>Take Order</button>
                <br />
                <br />
                <button style={button} onClick={() => this.cancelOrder()}>Cancel Order</button>

            </div>
        )
    }
}

export default Pizza
