import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {Image, TouchableOpacity} from 'react-native';
import * as actions from './actions/';
import Login from './components/Login';
import AssetsPage from './components/AssetsPage';
import {MenuButton} from './components/common/';

const RouterComponent = ({openMenu}) => {
    const {homeNavigationTitleImage,navigationBarStyle} = styles;
    return (
        <Router>
            <Stack key='root'>
                <Scene key='login' component={Login} title='' navigationBarStyle={navigationBarStyle} navigationBarTitleImageStyle={homeNavigationTitleImage} navigationBarTitleImage={require('./images/iconMemeland.png')} />
                <Scene key='assetsPage' left={<MenuButton onPress={() =>openMenu(1)}/>} component={AssetsPage} navigationBarStyle={navigationBarStyle} navigationBarTitleImageStyle={homeNavigationTitleImage} navigationBarTitleImage={require('./images/iconMemeland.png')} initial />
            </Stack>
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
        height:100
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        mainMenu: state.mainMenu
    };
};

export default connect(mapStateToProps, actions)(RouterComponent);