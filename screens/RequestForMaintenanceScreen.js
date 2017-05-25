import React from 'react';
import { 
	Container, Content, Header, Left, Body, Title, Right, Icon, Button,
	Form, Item, Label, Input, Thumbnail
} 
from 'native-base';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class RequestForMaintenanceScreen extends React.Component
{
	constructor(props) {
		super(props);
		
		this.state = {
			captureImages: []
		}
	}

	componentDidMount() {
		console.log('Props', this.props);
		console.log('States', this.state);
	}

	render()
	{
		return (
			<Container>
				<Content padder={true}>
					<Form style={{ paddingHorizontal: 20 }}>
						<Button transparent iconLeft 
							style={{ paddingLeft: 0 }}
							onPress={Actions.camera}
						>
							<Icon name="ios-camera" style={{ color: '#333' }} />
							<Text>Capture Photo or Video</Text>
						</Button>

						<View>
							{
								this.state.captureImages.map((path, index) => {
									console.log(path, index)
									return (
										<Image source={{
											uri: 'data:image/jpeg;base64,'+path, isStatic: true}} 
											key={index} style={{width: 50, height: 50}}
										>
										    <Text>{index}</Text>
										</Image>											
									)
								})
							}
						</View>

						<Item floatingLabel style={{ marginLeft: 0 }}>
							<Label>Issue</Label>
							<Input />
						</Item>
						<Item floatingLabel style={{ marginLeft: 0 }}>
							<Label>Message</Label>
							<Input />
						</Item>
						<Button rounded success style={{ marginTop: 30 }}>
							<Text style={{ color: '#fff' }}>Submit Request</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({

})

export default RequestForMaintenanceScreen;