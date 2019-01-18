import React, { Component } from 'react';
import './GenericButtonComponent.css';

class GenericButtonComponent extends Component {
    state = {}
    render() {
        return (
        <div className="generic_btn">
            <div className="btn_title">{this.props.title}</div>
        </div>
        );
    }
}

export default GenericButtonComponent;