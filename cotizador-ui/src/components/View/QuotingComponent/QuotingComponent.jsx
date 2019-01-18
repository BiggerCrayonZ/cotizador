import React, { Component } from 'react';
import './QuotingComponent.css';

/* Components */
import FormComponent from '../FormComponent/FormComponent';
import ResumeComponent from '../ResumeComponent/ResumeComponent';

class QuotingComponent extends Component {
    cardHeader = 'cotizador de seguros';
    state = { brand: '', plan: '', year: 2010, year_value: 0.1, total: 0 };

    /* Functions */
    setBrand = (brand) => { this.setState({ brand: brand }); }
    setPlan = (plan) => { this.setState({ plan: plan }); }
    setYear = (year) => { this.setState({ year: year }); this.setYearValue(year) }
    getQuote = () => {
        let currentBrand = this.state.brand.value;
        let currentYear = this.state.year_value;
        let currentPlan = this.state.plan.porcentage;
        let total = this.state.brand.value + (currentBrand * currentPlan) + (currentBrand * currentYear)
        this.setState({ total })
    }
    setYearValue = (year) => {
        switch (year) {
            case 2010:
                this.setState({ year_value: 0.15 });
                break;
            case 2011:
                this.setState({ year_value: 0.2 });
                break;
            case 2012:
                this.setState({ year_value: 0.25 });
                break;
            case 2013:
                this.setState({ year_value: 0.3 });
                break;
            case 2014:
                this.setState({ year_value: 0.35 });
                break;
            case 2015:
                this.setState({ year_value: 0.4 });
                break;
            case 2016:
                this.setState({ year_value: 0.45 });
                break;
            case 2017:
                this.setState({ year_value: 0.5 });
                break;
            case 2018:
                this.setState({ year_value: 0.55 });
                break;
            case 2019:
                this.setState({ year_value: 0.60 });
                break;
            default:
                this.setState({ year_value: 0.1 });
        }
    }

    render() {
        return (
            <div className="quote_container">
                <div className="form_card">
                    <div className="card_header">{this.cardHeader}</div>
                    <div className="card_form"> <FormComponent getYear={this.state.year} setBrand={this.setBrand} setPlan={this.setPlan} setYear={this.setYear} getQuote={this.getQuote} /> </div>
                </div>
                <div className="card_resume"> <ResumeComponent brand={this.state.brand.name} plan={this.state.plan.name} year={this.state.year} total={this.state.total} /> </div>
            </div>
        );
    }
}

export default QuotingComponent;

