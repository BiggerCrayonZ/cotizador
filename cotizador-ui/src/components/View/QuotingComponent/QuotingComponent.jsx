import React, { Component } from 'react';
import './QuotingComponent.css';

class QuotingComponent extends Component {
    cardHeader = 'cotizador de seguros';
    state = {}
    render() {
        return (
            <div className="card">
                <div className="card_header">{this.cardHeader}</div>
                <div className="card_form"></div>
                <div className="card_resume"></div>
            </div>
        );
    }
}

export default QuotingComponent;

