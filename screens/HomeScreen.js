import React from 'react';
import { View, Image, Text, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { 
	Container, Content, Button, Drawer, Header, Left, Right, Body, Footer, FooterTab
} from 'native-base';

import { Actions } from 'react-native-router-flux'

import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import Swiper from 'react-native-swiper';
import Sidebar from './components/Sidebar';

const { deviceWidth } = Dimensions.get('window').width;

class HomeScreen extends React.Component
{
	constructor(props) {
		super(props);
		
		this.state = {
			active: 'true',
		}
	}

	closeDrawer = () => {
		this.drawer._root.close();
	}

	openDrawer = () => {
		this.drawer._root.open()
	}

	render()
	{
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
				<Container>
					<View style={styles.body}>
						<Content>
							<Swiper height={350} width={deviceWidth + 3} dot={<View style={styles.dots} />}
								activeDot={<View style={styles.current} />}>						
								<Image source={require('../assets/images/properties/property1-a.jpeg')} style={styles.property__image}></Image>
								<Image source={require('../assets/images/properties/property1-b.jpeg')} style={styles.property__image}></Image>								
							</Swiper>
							<View style={styles.content}>
								<Text style={styles.h2}>Property Details</Text>
								<Text style={styles.p}>
									The development will comprise of 1,172 residential units complemented by retail, dining, leisure and entertainment amenities.
								</Text>
								<Text style={styles.p}>
									Scheduled to break ground in Q3 2016, the project is destined to become a 24 hour living, walkable community spread over 800,000 sq. ft. of land, with handover scheduled to commence Q4 2018.
								</Text>

								<Text style={styles.h3}>The space</Text>
								<View style={{ flex: 1, flexDirection: 'row' }}>
									<View style={{ flex: 1 }}>
										<Text style={styles.p__info}>Bathrooms: 1</Text>
										<Text style={styles.p__info}>Bedrooms: 1</Text>
										<Text style={styles.p__info}>Beds: 1</Text>
									</View>
									<View style={{ flex: 1 }}>
										<Text style={styles.p__info}>Accommodates: 2</Text>
										<Text style={styles.p__info}>Property type: Apartment</Text>
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-home" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Room Type: Entire home</Text>
										</View>										
									</View>									
								</View>

								<Text style={styles.h3}>Amenities</Text>
								<View style={{ flex: 1, flexDirection: 'row' }}>
									<View style={{ flex: 1 }}>
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Internet</Text>
										</View>
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-restaurant" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Kitchen</Text>
										</View>
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Wireless Internet</Text>
										</View>		
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Hair Dryer</Text>
										</View>		
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Laptop Friendly Workspace</Text>
										</View>	
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Iron</Text>
										</View>																																																												
									</View>
									<View style={{ flex: 1 }}>
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Buzzer</Text>
										</View>	
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Essentials</Text>
										</View>	
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Shampoo</Text>
										</View>					
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Washer</Text>
										</View>									
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Hangers</Text>
										</View>		
										<View style={{ flexDirection: 'row' }}>
											<Icon name="ios-wifi" style={{ fontSize: 20, paddingRight: 10, }} />
											<Text style={styles.p__info}>Heating</Text>
										</View>																																															
									</View>									
								</View>								

								<Button rounded block success onPress={Actions.landlord} style={{ marginTop: 30 }}>
									<Text style={{ color: '#fff' }}>View Landlord Information</Text>
								</Button>
							</View>
						</Content>
					</View>
					<Footer>
						<FooterTab>
							<Button full style={{ backgroundColor: '#58bb69', flexDirection: 'row' }} onPress={Actions.requestForMaintenance}>
								<Entypo name="tools" style={{ color: '#fff', fontSize: 16, marginRight: 10 }} />
								<Text style={{ color: '#fff' }}>Request for Maintenance</Text>
							</Button>
						</FooterTab>
					</Footer>
				</Container>
			</Drawer>
		)
	}

	enterVerificationCode = () => {
		this.props.navigator.push('enterVerificationCode');
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
	},
	header__logo: {
		width: 200,
	    height: 100,
	    resizeMode: 'contain',
	},
	property__image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	},
	dots: {
		width: 30,
		height: 2,
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
	content: {
		padding: 20,
	},
	h2: {
		fontSize: 20,
		color: '#58bb69',
		marginBottom: 20,
	},
	h3: {
		fontSize: 18,
		color: '#58bb69',
		marginBottom: 20,
		marginTop: 10,
	},	
	p: {
		color: '#555',
		lineHeight: 22,
		marginBottom: 16,
	},
	p__info: {
		color: '#555',
		marginBottom: 10,
	}	
})

export default HomeScreen;