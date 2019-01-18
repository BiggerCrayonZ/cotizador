import React, { Component } from 'react';
import './GenericDropdownComponent.css';

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
            items.push(<div key={i} onClick={this.selectItem.bind(null, element)} className="item"> {element.name} </div>);
        }
        return items;
    }
    render() {
        return (
            <div className="button_group_container">
                {this.renderListItems()}
            </div>
        );
    }
}

export default GenericDropdownComponent;
