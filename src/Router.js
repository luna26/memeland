import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {Image, TouchableOpacity} from 'react-native';
import * as actions from './actions/';
import {MenuButton} from './components/common/';

import Login from './components/Login';
import AssetsPage from './components/AssetsPage';
import MemeGenerator from './components/MemeGenerator';

const RouterComponent = ({openMenu}) => {
    const {homeNavigationTitleImage,navigationBarStyle} = styles;
    return (
        <Router>
            <Stack key='root'>
                <Scene key='login' component={Login} title='' navigationBarStyle={navigationBarStyle} navigationBarTitleImageStyle={homeNavigationTitleImage} navigationBarTitleImage={require('./images/iconMemeland.png')} />
                <Scene key='assetsPage' left={<MenuButton onPress={() =>openMenu(true)}/>} component={AssetsPage} navigationBarStyle={navigationBarStyle} navigationBarTitleImageStyle={homeNavigationTitleImage} navigationBarTitleImage={require('./images/iconMemeland.png')} initial />
                <Scene key='memeGenerator' left={<MenuButton onPress={() =>openMenu(true)}/>} component={MemeGenerator} navigationBarStyle={navigationBarStyle} navigationBarTitleImageStyle={homeNavigationTitleImage} navigationBarTitleImage={require('./images/iconMemeland.png')} />
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
        backgroundColor:'#2E64FE',
        height:100
    }
}

const mapStateToProps = state => {
    return {
        mainMenu: state.mainMenu
    };
};

export default connect(mapStateToProps, actions)(RouterComponent);