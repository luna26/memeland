import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import  {Button, Field} from './common/';

class Login extends Component{
    render(){
        const {styleContainer, styleContainerForm, styleBtn, styleRegisterText, styleRegisterTextContainer} = styles;
        return(
            <View style={styleContainer}>
                <View style={styleContainerForm}>
                    <Field textBtn={'Username:'}/>
                    <Field textBtn={'Password:'}/>
                    <View style={styleRegisterTextContainer}>
                        <Text style={styleRegisterText}>Register</Text>
                    </View>
                </View>
                <View style={styleBtn} >
                    <Button style={{height:80}}>
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
    styleContainerForm:{
        paddingTop:30,
        flex:5
    },
    styleRegisterTextContainer:{
        alignItems:'center', 
        marginTop:50
    },
    styleRegisterText:{
        borderBottomColor: '#47315a',
        borderBottomWidth: 1,
    },
    styleBtn:{
        flex:1,
        justifyContent: 'flex-end', 
        paddingBottom:30
    }
}

export default Login;