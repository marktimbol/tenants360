import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Button } from 'native-base';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons';

class CameraScreen extends React.Component
{
	constructor(props) {
		super(props);
		
		this.takePicture = this.takePicture.bind(this)
	}

	takePicture() {
		console.log(this.camera);
		this.camera.capture({ metadata: {} })
			.then((data) => {
				Actions.pop()
			})
			.catch(err => console.log(err));
	}

	render()
	{
		return (
			<Camera style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} ref={(cam) => { this.camera = cam }}
				aspect={Camera.constants.Aspect.fill}
				captureTarget={Camera.constants.CaptureTarget.disk}
			>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
					<Button iconLeft rounded success onPress={() => this.takePicture() } style={{ marginBottom: 20 }}>
						<Icon name="ios-camera" size={24} style={{ color: '#fff', marginRight: 10, }} />
						<Text style={{ color: '#fff' }}>Capture</Text>
					</Button>
				</View>
			</Camera>
		)
	}
}

export default CameraScreen;