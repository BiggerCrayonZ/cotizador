import React, { Component } from 'react';
import './YearPickerComponent.css';

class YearPickerComponent extends Component {
    left = "<";
    right = ">";
    state = {
        flag_left: false,
        flag_right: true
    }

    toggleYear = (flag) => {
        let yearFixed;
        if (flag) { yearFixed = this.props.year + 1 } else { yearFixed = this.props.year - 1 };
        this.props.change(yearFixed);
        this.evaluateSelector(yearFixed);
    }

    evaluateSelector = (newYear) => {
        // if (newYear >= 2009) { this.setState({ flag_left: false, flag_right: true }) } else if (newYear <= 2019) { this.setState({ flag_left: true, flag_right: false }) }
        if (newYear < 2011) { this.setState({ flag_left: false }) } else { this.setState({ flag_left: true }) }
        // if (newYear > 2009 && newYear < 201){ this.setState({ flag_left: false }) } else { this.setState({ flag_left: true }) }
        if (newYear > 2018) { this.setState({ flag_right: false }) } else { this.setState({ flag_right: true }) }
    }

    render() {
        return (
            <div className="selector_container">
                {this.state.flag_left ? <div onClick={this.toggleYear.bind(null, false)} className="selector_item left_btn">{this.left}</div> : <div className="desabled_item selector_item left_btn">{this.left}</div>}
                <div className="selector_item year_container">{this.props.year}</div>
                {this.state.flag_right ? <div onClick={this.toggleYear.bind(null, true)} className="selector_item right_btn">{this.right}</div> : <div className="desabled_item selector_item right_btn">{this.right}</div>}
            </div>
        );
    }
}

export default YearPickerComponent;