import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

const MenuButton = ({onPress}) => {
        return(
            <TouchableOpacity style={{height: 35}} onPress={onPress}>
                <Image style={{backgroundColor:'black', width: 30, height: 35, marginLeft: 8}} source={require('../../images/menuIcon.png')}/>
            </TouchableOpacity>
        );
}

export {MenuButton};