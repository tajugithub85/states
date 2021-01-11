import React from 'react'
import {colors} from './colors'
import './colorSquares.css'

export class ColorSquares extends React.Component{
    constructor(props){
        super(props)
        this.state = {color: colors[Math.floor(Math.random() * 280)]}
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
        const newColor = colors[Math.floor(Math.random() * 280)]
        this.setState({color:newColor})
    }

    render(){
        return(
            <div className='square' style={{background:this.state.color}} onClick={this.changeColor}></div>
        )
    }
}