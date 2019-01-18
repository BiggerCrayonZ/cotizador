import React, { Component } from 'react';
import './FormComponent.css';

/* Components */
import GenericDropDownComponent from '../GenericDropdownComponent/GenericDropdownComponent';
import GenericButtonComponent from '../GenericButtonComponent/GenericButtonComponent';
import YearPickerComponent from '../YearPickerComponent/YearPickerComponent';

class FormComponent extends Component {
    state = {
        brand: 'default',
        plan: 'defaul',
        year: 2010,
    }

    selectBrand = (brand) => {
        
    }

    selectPlan = () => {
        // console.log("Plan changed");
    }

    changeYear = (newYear) => {
        this.setState({ year: newYear });
    }

    brandList = [
        {
            name: "Americano"
        },
        {
            name: "Asiatico"
        },
        {
            name: "Europeo"
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
                    <GenericDropDownComponent list={this.brandList} selectBrand={this.selectBrand} />
                </section>
                <section className="year_section">
                    <div className="year_title subTitle">Año:</div>
                    <YearPickerComponent year={this.state.year} change={this.changeYear} />
                </section>
                <section className="plan_section">
                    <div className="plan_title subTitle">Plan:</div>
                    <GenericDropDownComponent list={this.planList} selectBrand={this.selectPlan} />
                </section>
                <div className="btn_section"> <GenericButtonComponent title="Cotizar" /> </div>
            </div>
        );
    }
}

export default FormComponent;