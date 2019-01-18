import React, { Component } from 'react';
import './QuotingComponent.css';

/* Components */
import FormComponent from '../FormComponent/FormComponent';
import ResumeComponent from '../ResumeComponent/ResumeComponent';

class QuotingComponent extends Component {
    cardHeader = 'cotizador de seguros';
    state = {}
    render() {
        return (
            <div className="card">
                <div className="card_header">{this.cardHeader}</div>
                <div className="card_form"> <FormComponent /> </div>
                <div className="card_resume"> <ResumeComponent brand='Americano' plan='Básico' year='2010' total={1519} /> </div>
            </div>
        );
    }
}

export default QuotingComponent;

