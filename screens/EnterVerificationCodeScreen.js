import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

class EnterVerificationCodeScreen extends React.Component
{
	render()
	{
		return (
			<Container>
				<Content padder={true}>
					<Text style={styles.p}>Enter your code</Text>

					<Button rounded success onPress={Actions.home}>
						<Text style={{ color: '#fff' }}>Go to App</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	p: {
		color: '#555',
		marginBottom: 16,
	}
})

export default EnterVerificationCodeScreen;