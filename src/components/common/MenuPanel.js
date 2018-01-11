import React, { Component } from 'react';
import Router from '../../Router';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SideMenu from 'react-native-side-menu';
import MenuList from './MenuList';

class MenuPanel extends Component {
    checkOpenMenu(isOpen){
        if(!isOpen){
            this.props.openMenu(false);
        }
    }
    render() {
        return (
            <SideMenu
                menu={<MenuList />}
                isOpen={this.props.mainMenuOpen}
                onChange={(isOpen) => this.checkOpenMenu(isOpen)}
            >
                <Router />
            </SideMenu>
        );
    }
}

const mapStateToProps = state => {
    return {
        mainMenuOpen: state.mainMenu.mainMenuOpen
    };
};

export default connect(mapStateToProps, actions)(MenuPanel);