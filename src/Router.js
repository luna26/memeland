import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';

const RouterComponent = () => {
    const {homeNavigationTitleImage,navigationBarStyle} = styles;
    return (
        <Router>
            <Scene key='root'>
                <Scene key='login' component={Login} title='' navigationBarStyle={navigationBarStyle} navigationBarTitleImageStyle={homeNavigationTitleImage} navigationBarTitleImage={require('./images/iconMemeland.png')} initial />
            </Scene>
        </Router>
    );
}

const styles = {
    homeNavigationTitleImage:{
        backgroundColor:'#000000',
        alignSelf: 'center',
        marginTop:15,
        marginBottom:15
    },
    navigationBarStyle:{
        backgroundColor:"#2E64FE",
        height:110
    }
}

export default RouterComponent;