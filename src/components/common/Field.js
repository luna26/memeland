import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Field = ({textBtn}) =>{
    const {containerStyle, textInputStyle, textStyle} = styles;
    return(
        <View style={containerStyle}>
            <Text style={textStyle}>
                {textBtn}
            </Text>
            <TextInput 
                style={textInputStyle}
            />
        </View>
    );
}

const styles = {
    containerStyle:{
        marginLeft:15,
        marginRight:15,
        marginTop: 30
    },
    textInputStyle:{
        backgroundColor:'#FFFFFF',
        borderColor:'#000000',
        borderWidth:1
    },
    textStyle:{
        fontSize:19
    }
}

export {Field};