import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Button } from './common';
import * as actions from '../actions';

class MemeGeneratorCamera extends Component {

    takePicture() {
        this.camera.capture()
            .then((data) => this.props.takePictureAction(data))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                <Button style={styles.capture} onPress={this.takePicture.bind(this)}>CAPTURE</Button>
            </Camera>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
};

const mapStateToProps = state => {
    return {
        mainMenuData: state.mainMenuData
    };
};

export default connect(mapStateToProps, actions)(MemeGeneratorCamera);