import React, { Component } from 'react';
import './GenericDropdownComponent.css';

class GenericDropdownComponent extends Component {
    state = {}

    selectItem = (key) => { 
        this.props.selectBrand();
        this.renderListItems();
    }

    /* show = () => {
        this.setState({ listVisible: true });
        document.addEventListener("click", this.hide);
    }

    hide = () => {
        this.setState({ listVisible: false });
        document.removeEventListener("click", this.hide);
    } */

    renderListItems = () => {
        let items = [];
        for (let i = 0; i < this.props.list.length; i++) {
            let element = this.props.list[i];
            console.log(element);
            items.push(
                <div key={i} onClick={this.selectItem.bind(null, i)} className="item"> {element.name} </div>
            );
            console.log('done it');
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
