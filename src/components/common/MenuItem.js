import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Text, TouchableOpacity } from 'react-native';

class MenuItem extends Component{
    render(){
        const { title, desc, id } = this.props.item;
        const {itemContainerStyle, itemTextStyle} = styles;
        return(
            <TouchableOpacity onPress={() => this.props.selectMenu(id)} style={itemContainerStyle}>
                <Text style={itemTextStyle}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    itemContainerStyle:{
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        borderTopWidth: 2,
        borderTopColor: '#fff',
        paddingTop:15,
        paddingBottom:15
    },
    itemTextStyle:{
        color:'#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center'
    }
}

const mapStateToProps = state => {
    return { menu_selected: state.mainMenu.menu_selected };
};

export default connect(mapStateToProps, actions)(MenuItem);