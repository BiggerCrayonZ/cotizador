import React, { Component } from 'react';
import './GenericButtonComponent.css';

class GenericButtonComponent extends Component {
    clickFunction = () => { this.props.click(); }
    render() {
        return (
            <div onClick={this.clickFunction} className="generic_btn">
                <div className="btn_title">{this.props.title}</div>
            </div>
        );
    }
}

export default GenericButtonComponent;