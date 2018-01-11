import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView } from 'react-native';
import MenuItem from './MenuItem';

class MenuList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.mainMenuData);
    }

    renderRow(ItemMenu) {
        return <MenuItem item={ItemMenu}/>;
    }

    render() {
        const { containerMenuStyles, containerTitleStyle, titleStyle } = styles;
        return (
            <View style={containerMenuStyles}>
                <View style={containerTitleStyle}>
                    <Text style={titleStyle}>MENU</Text>
                </View>
                <View>
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerMenuStyles: {
        backgroundColor: '#2E64FE',
        flex: 1,
        borderRightWidth: 2,
        borderRightColor: '#fff'
    },
    containerTitleStyle: {
        marginTop: 10,
        backgroundColor: '#2E64',
        marginBottom:20
    },
    titleStyle: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center'
    }
}

const mapStateToProps = state => {
    return {
        mainMenuData: state.mainMenuData
    };
};

export default connect(mapStateToProps)(MenuList);