import React, { Component } from 'react';
import './ViewComponent.css';

/* Components */
import QuotingComponent from '../QuotingComponent/QuotingComponent';

class ViewComponent extends Component {
    state = {}
    render() {
        return (
            <div className="body-container">
                <section className="header_section"></section>
                <section className="body_section">
                    <QuotingComponent />
                </section>
                <section className="footer_section"></section>
            </div>
        );
    }
}

export default ViewComponent;