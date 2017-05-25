import React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Container, Content, Button } from 'native-base';
import Swiper from 'react-native-swiper';
const deviceHeight = Dimensions.get('window').height;

import { Actions } from 'react-native-router-flux';

class TutorialScreen extends React.Component
{
	static route = {
		navigationBar: {
			visible: false,
			title: 'Tutorials'
		}
	}

	render()
	{
		return (
			<Container>
				<Content>
					<Swiper loop={false} dot={<View style={styles.dots} />}
						activeDot={<View style={styles.current} />}>
						<View style={styles.slide}>
							<Text>Tutorial 1</Text>
						</View>
						<View style={styles.slide}>
							<Text>Tutorial 2</Text>
						</View>
						<View style={styles.slide}>
							<Text>Tutorial 3</Text>
							<Button outline light bordered onPress={Actions.enterVerificationCode}>
								<Text>Go to App</Text>
							</Button>
						</View>												
					</Swiper>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	slide: {
	    flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    flexDirection: 'column',
	    backgroundColor: '#5cb85c',
	    height: deviceHeight,
	},
	dots: {
		width: 50,
		height: 1,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 20,
		backgroundColor: 'rgba(0,0,0,.2)',
	},
	current: {
		width: 50,
		height: 1,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 20,
		backgroundColor: '#fff',
	},	
})

export default TutorialScreen;