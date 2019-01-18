import React, { Component } from 'react';
import './GenericDropdownComponent.css';
import { RadioButton, RadioGroup } from '@trendmicro/react-radio';
import '@trendmicro/react-radio/dist/react-radio.css';

class GenericDropdownComponent extends Component {
    state = {}

    selectItem = (item) => {
        this.props.select(item);
        this.renderListItems();
    }

    renderListItems = () => {
        let items = [];
        for (let i = 0; i < this.props.list.length; i++) {
            let element = this.props.list[i];
            items.push(<RadioButton label={element.name} value={element} />);
        }
        return items;
    }
    render() {
        return (
            <div className="button_group_container">
                <RadioGroup onChange={(value, event) => {
                    this.selectItem(value);
                }} >
                    {this.renderListItems()}
                </RadioGroup>
            </div>
        );
    }
}

export default GenericDropdownComponent;
