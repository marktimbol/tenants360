import React from 'react';
import { Text, Image, StyleSheet, Platform } from 'react-native';
import { Container, Content, ListItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Sidebar extends React.Component
{
	render()
	{
		return (
			<Container>
				<Image source={require('../../assets/images/sid.png')} style={styles.background}>
					<Content>
						<ListItem button onPress={Actions.requestForMaintenance} iconLeft>
							<Icon name="ios-stats" style={{ color: '#fff' }} />
							<Text style={styles.link__text}>Properties</Text>
						</ListItem>
						<ListItem button onPress={() => console.log('hi')} iconLeft>
							<Icon name="ios-person-outline" style={{ color: '#fff' }} />
							<Text style={styles.link__text}>Profile</Text>
						</ListItem>						
					</Content>
				</Image>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: null,
		height: null,
		backgroundColor: '#58bb69',
  	},	
	drawerContent: {
		paddingTop: Platform.OS === 'android' ? 20 : 30,
		marginBottom: (Platform.OS === 'ios') ? -50 : -10,
	},
	link: {
		paddingTop: Platform.OS === 'android' ? 8 : 10,
		paddingBottom: Platform.OS === 'android' ? 8 : 10,
		paddingLeft: Platform.OS === 'android' ? 0 : 10,
		borderBottomWidth: Platform.OS === 'android' ? 0 : 0,
		borderBottomColor: 'transparent',
	},
	link__text: {
		color: '#fff',
		paddingLeft: 15,
	},	
})

export default Sidebar;