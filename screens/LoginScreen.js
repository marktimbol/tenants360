import React from 'react';
import { Text, Image, StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import { Container, Content, Form, Label, Item, Input, Button } from 'native-base';

import { Actions } from 'react-native-router-flux';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class LoginScreen extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		}
	}

	render()
	{
		const bg = require('../assets/images/BG.png');
		const logo = require('../assets/images/logo.png');

		return (
			<Container>
				<StatusBar barStyle="light-content" backgroundColor="blue" />
				<Content scrollEnabled={true} bounces={false}>
					<Image source={bg} style={styles.background}>
						<Image source={logo} style={Platform.OS === 'android' ? styles.androidShadow : styles.iOSShadow} />
						<Form style={{ padding: 40 }}>
							<Item floatingLabel>
								<Label style={{ color: '#fff' }}>Email</Label>
								<Input onChangeText={email => this.setState({ email })} style={{ color: '#fff' }} />
							</Item>
							<Item floatingLabel>
								<Label style={{ color: '#fff' }}>Password</Label>
								<Input securityTextEntry onChangeText={password => this.setState({ password })} style={{ color: '#fff' }} />
							</Item>
							<Button rounded block success
								onPress={Actions.tutorials}
								style={{ marginTop: 40, marginBottom: 20 }}
							>
								<Text style={{ color: '#fff' }}>Login</Text>
							</Button>
						</Form>
					</Image>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: null,
		height: deviceHeight,
	},
	label: {
		color: '#fff',
	},
	iOSShadow: {
		flex: 1,
		width: (deviceHeight < 500) ? 80 : (deviceWidth / 4) + 12,
		resizeMode: 'contain',
		height: (deviceHeight < 500) ? 50 : (deviceHeight / 15),
		alignSelf: 'center',
		marginTop: (deviceWidth < 330) ? (deviceHeight / 15) : (deviceHeight / 6),
	},
	androidShadow: {
		flex: 1,
		resizeMode: 'contain',
		width: (deviceWidth / 3) + 8,
		height: (deviceHeight / 20),
		padding: 20,
		alignSelf: 'center',
		marginTop: (deviceWidth < 330) ? (deviceHeight / 15) : ((deviceHeight / 5) - 60),
	},	
})

export default LoginScreen;