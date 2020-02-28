import React from 'react';
import { Link } from 'react-router-dom';
import './App-header-nav-left-item.css';
import CategoriesNav from '../categories-nav'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

import './App-header-nav-left-item.css'

export default class AppHeaderNavLeftItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle(key) {
    this.updateState(key, !this.state[key]);
  }

  onMouseEnter(key) {
    this.updateState(key, true);
  }

  onMouseLeave(key) {
    this.updateState(key, false);
  }

  updateState(key, value) {
    let newState = {};
    newState[key] = value;
    this.setState(newState);
  }

  render() {
    return (
        <Dropdown className="d-inline-block " onMouseOver={() => this.onMouseEnter('dropdownOpen')}
                  onMouseLeave={() => this.onMouseLeave('dropdownOpen')}
                  isOpen={this.state.dropdownOpen} toggle={() => this.toggle('dropdownOpen')}>
          <DropdownToggle  className='link-button'>
          <Link to={`/catalogs/${this.props.catalog}`} className='link-name'>{this.props.catalog}</Link>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem> <CategoriesNav  className='categories-nav-down' catalog={this.props.catalog}/> </DropdownItem>
          </DropdownMenu>
        </Dropdown>

    );
  }
}
