import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import  {Button, Field} from './common/';

class Login extends Component{
    render(){
        const {styleContainer, styleBtn} = styles;
        return(
            <View style={styleContainer}>
                <View>
                    <Field textBtn={'Username:'}/>
                    <Field textBtn={'Password:'}/>
                </View>
                <Text>Register</Text>
                <View style={styleBtn} >
                    <Button>
                        LOGIN
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    styleContainer:{
        flex:1,
    },
    styleBtn:{
        justifyContent: 'flex-end', 
        flex:1,
        marginBottom:15
    }
}

export default Login;