import React, { Component } from 'react';

class InputNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.defaultValue || ''
        }
        this.input = React.createRef();
    }

    onChange = (e) =>{
        const value = e.target.value
        this.setState({
            value: value
        }, () => {
            this.props.onChange && this.props.onChange(value);
        });
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.onChange}/>
        )
    }
}

export default InputNumber