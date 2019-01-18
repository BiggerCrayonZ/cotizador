import React, { Component } from 'react';
import './FormComponent.css';
import Fade from 'react-reveal/Fade';

/* Components */
import GenericDropDownComponent from '../GenericDropdownComponent/GenericDropdownComponent';
import GenericButtonComponent from '../GenericButtonComponent/GenericButtonComponent';
import YearPickerComponent from '../YearPickerComponent/YearPickerComponent';

class FormComponent extends Component {
    state = { btn_flag: false }
    brandList = [
        {
            name: "Europeo",
            value: 1500
        },
        {
            name: "Americano",
            value: 1000
        },
        {
            name: "Asiatico",
            value: 500
        }
    ];
    planList = [
        {
            name: "Básico",
            porcentage: 0.25
        }, {
            name: "Completo",
            porcentage: 0.5
        }
    ]
    selectBrand = (brand) => { this.props.setBrand(brand); }
    selectPlan = (plan) => { this.props.setPlan(plan); }
    changeYear = (newYear) => { this.props.setYear(newYear); }
    getQuote = () => { this.props.getQuote() };

    componentWillReceiveProps(nextProps) {
        if (nextProps.getPlan !== '' && nextProps.getBrand !== '') {
            this.setState({ btn_flag: true })
        } else {
            this.setState({ btn_flag: false })
        }

    }

    render() {
        return (
            <div className="form_container">
                <section className="brand_section">
                    <div className="brand_title subTitle">Marca:</div>
                    <GenericDropDownComponent list={this.brandList} select={this.selectBrand} />
                </section>
                <section className="year_section">
                    <div className="year_title subTitle">Año:</div>
                    <YearPickerComponent year={this.props.getYear} change={this.changeYear} />
                </section>
                <section className="plan_section">
                    <div className="plan_title subTitle">Plan:</div>
                    <GenericDropDownComponent list={this.planList} select={this.selectPlan} />
                </section>
                <Fade when={this.state.btn_flag} >
                    <div className="btn_section"> <GenericButtonComponent click={this.getQuote} title="Cotizar" /> </div>
                </Fade>
            </div>
        );
    }
}

export default FormComponent;