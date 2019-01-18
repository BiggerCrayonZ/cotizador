import React, { Component } from 'react';
import './FormComponent.css';

/* Components */
import GenericDropDownComponent from '../GenericDropdownComponent/GenericDropdownComponent';
import GenericButtonComponent from '../GenericButtonComponent/GenericButtonComponent';
import YearPickerComponent from '../YearPickerComponent/YearPickerComponent';

class FormComponent extends Component {
    selectBrand = (brand) => { this.props.setBrand(brand); }
    selectPlan = (plan) => { this.props.setPlan(plan); }
    changeYear = (newYear) => { this.props.setYear(newYear); }

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
            name: "Básico"
        }, {
            name: "Completo"
        }
    ]
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
                <div className="btn_section"> <GenericButtonComponent title="Cotizar" /> </div>
            </div>
        );
    }
}

export default FormComponent;