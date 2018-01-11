import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from './common/';

class MemeGeneratorSource extends Component {
    render() {
        const {mainContainerStyle, imageTop, containerBtns} = styles;
        return (
            <View style={mainContainerStyle}>
                <View style={imageTop}>
                    <Image source={require('../images/mmgSource.png')} />
                </View>
                <View style={containerBtns}>
                    <Button>Camera</Button>
                    <Button>Popular</Button>
                    <Button>My Assets</Button>
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainerStyle:{
        flex:1
    },
    imageTop:{
        marginBottom:20,
    },
    containerBtns:{
        justifyContent:'space-around',
        flex:1
    }
}

export default MemeGeneratorSource;