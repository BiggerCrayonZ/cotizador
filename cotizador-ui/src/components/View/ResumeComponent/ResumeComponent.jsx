import React, { Component } from 'react';
import './ResumeComponent.css';

/* Constants */
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

class ResumeComponent extends Component {
    details_title = 'Resumen de la Cotización';
    brand_span = 'Marca: ';
    plan_span = 'Plan: ';
    year_span = 'Año: ';
    total_span = 'El Total es: ';
    total_value = '';
    state = {}
    render() {
        return (
            <div className="resume_container">
                <section className="details_section">
                    <div className="details_container">
                        <div className="details_title">{this.details_title}</div>
                        <div className="details_item brand_result">{this.brand_span}{this.props.brand}</div>
                        <div className="details_item plan_result">{this.plan_span}{this.props.plan}</div>
                        <div className="details_item year_result">{this.year_span}{this.props.year}</div>
                    </div>
                </section>
                <div className="separator_section" />
                <section className="total_section">
                    <div className="total_container">{this.total_span} {formatter.format(this.props.total)} </div>
                </section>
            </div>
        );
    }
}

export default ResumeComponent;

