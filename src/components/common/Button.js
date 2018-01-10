import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({onPress, children}) => {
    const {buttonStyle, buttonText} = styles;
    return(
        <TouchableOpacity style={buttonStyle}>
            <Text style={buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle:{
        backgroundColor: '#3ADF00',
        padding: 18,
        borderRadius:50,
        marginLeft:25,
        marginRight:25
    },
    buttonText:{
        color: '#FFFFFF',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: '800',
    }
}

export {Button};