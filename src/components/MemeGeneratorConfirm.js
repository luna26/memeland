import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class MemeGeneratorConfirm extends Component{
    renderImage(){
        const {myImageStyle} = styles;
        var objInfo;
        objInfo = this.props.memeGeneratorInfo.picture_data_camera;
        console.log(objInfo);
        if(objInfo != null && objInfo != undefined){
            return(
                <Image source={{uri:objInfo.path}} style={myImageStyle}/>
            );
        }
    }
    render(){
        const {containerStyle, iconStyle} = styles;
        return(
            <View style={containerStyle}>
                <Text>Confirm Picture</Text>
                {this.renderImage()}
                <View>
                    <Image source={require('../images/check_green.png')} style={iconStyle} />
                    <Image source={require('../images/x_red.png')} style={iconStyle}/>
                </View>
            </View>
        );
    }
}

const styles = {
    myImageStyle:{
        width: 300, 
        height: 300
    },
    containerStyle:{
        flex:1
    },
    iconStyle:{
        width: 75, 
        height: 75
    }
}

const mapStateToProps = state => {
    return {
        memeGeneratorInfo: state.memeGeneratorInfo   
    };
};

export default connect(mapStateToProps, actions)(MemeGeneratorConfirm);