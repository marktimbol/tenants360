import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Image,
	Text,
} from 'react-native';

import { Button, Drawer } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons';
import Sidebar from './screens/components/Sidebar';

import Login from './screens/LoginScreen';
import Tutorial from './screens/TutorialScreen';
import EnterVerificationCode from './screens/EnterVerificationCodeScreen';
import Home from './screens/HomeScreen';
import Landlord from './screens/LandlordScreen';
import RequestForMaintenance from './screens/RequestForMaintenanceScreen';
import CameraScreen from './screens/CameraScreen';

class tenants360 extends Component
{
	closeDrawer = () => {
		this.drawer._root.close();
	}

	openDrawer = () => {
		this.drawer._root.open()
	}

	render()
	{
		const MainMenu = () => {
			return (
				<Button transparent onPress={() => this.openDrawer() } style={{ marginTop: -8 }}>
					<Icon name="ios-menu" size={26} color="#fff" />
				</Button>
			)
		}

		const LogoutButton = () => {
			return (
				<Button transparent onPress={Actions.login} style={{ marginTop: -13 }}>
					<Icon name="ios-power" size={26} color="#fff" />
				</Button>
			)
		}		

		return (
			<Drawer
				ref={(ref) => { this.drawer = ref; }}
				type="overlay"
				tweenDuration={150}
				content={<Sidebar navigator={this.props.navigator} />}
				tapToClose
				acceptPan={false}
				onClose={() => this.closeDrawer()}
				openDrawerOffset={0.2}
				panOpenMask={0.2}
			>		
				<Router navigationBarStyle={styles.router}
					sceneStyle={styles.scene}
					titleStyle={styles.title}
				>
					<Scene key="root">
						<Scene key="login" component={Login} title="Login" type="replace" initial={false} />
						<Scene key="tutorials" component={Tutorial} title="Tutorials" />
						<Scene key="enterVerificationCode" component={EnterVerificationCode} title="Enter Verification Code" />
						<Scene key="home" component={Home} 
							initial={true} 
							title="Tenants360" 
							renderLeftButton={MainMenu}
							renderRightButton={LogoutButton}
						/>
						<Scene key="landlord" component={Landlord} title="Landlord Information" />
						<Scene key="requestForMaintenance" component={RequestForMaintenance} title="Request For Maintenance" />
						<Scene key="camera" component={CameraScreen} title="Take Photo" />
					</Scene>
				</Router>
			</Drawer>
		)
	}
}

const styles = StyleSheet.create({
	router: {
		flex: 1,
		backgroundColor: '#58bb69',
		borderBottomWidth: 0,
	},
	scene: {
		paddingTop: 64,
	},
	title: {
		color: 'white',
	},
	navigationBarTitleImageStyle: {
		width: 200,
	    height: 100,
	    resizeMode: 'contain',
	}
});

AppRegistry.registerComponent('tenants360', () => tenants360);
