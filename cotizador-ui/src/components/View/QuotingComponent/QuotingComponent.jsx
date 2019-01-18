import React, { Component } from 'react';
import './QuotingComponent.css';

/* Components */
import FormComponent from '../FormComponent/FormComponent';
import ResumeComponent from '../ResumeComponent/ResumeComponent';

class QuotingComponent extends Component {
    cardHeader = 'cotizador de seguros';
    state = { brand: '', plan: '', year: 2010 };

    /* Functions */
    setBrand = (brand) => { this.setState({ brand: brand }); }
    setPlan = (plan) => { this.setState({ plan: plan }); }
    setYear = (year) => { this.setState({ year: year }); }

    render() {
        return (
            <div className="card">
                <div className="card_header">{this.cardHeader}</div>
                <div className="card_form"> <FormComponent getYear={this.state.year} setBrand={this.setBrand} setPlan={this.setPlan} setYear={this.setYear} /> </div>
                <div className="card_resume"> <ResumeComponent brand={this.state.brand} plan={this.state.plan} year={this.state.year} total={1519} /> </div>
            </div>
        );
    }
}

export default QuotingComponent;

