import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button} from './common';

class AssetsPage extends Component{
    render(){
        const {containerFolder} = styles;
        return(
            <View style={containerFolder}>
                <Button>ADD FOLDER</Button>
            </View>
        );
    }
}

styles = {
    containerFolder:{
        flex:1,
        justifyContent: 'flex-end',
        marginBottom:28
    }
}

export default AssetsPage;