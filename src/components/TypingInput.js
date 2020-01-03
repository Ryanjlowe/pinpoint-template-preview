import React, { Component } from 'react';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

export default class TypingInput extends Component {

  constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    componentWillMount() {
        this.timer = null;
    }

    handleChange(e) {
        clearTimeout(this.timer);
        this.setState({ value: e.target.value });
        this.timer = setTimeout(this.triggerChange.bind(this), WAIT_INTERVAL);
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
          this.triggerChange();
        }
    }

    triggerChange() {
        const { value } = this.state;

        this.props.onChange(value);
    }

    render() {

        return (
            <input type="text"
                placeholder={'Enter Endpoint Id'}
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
            />
        );
    }

}
