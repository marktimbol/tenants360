import { createRouter } from '@expo/ex-navigation';
import LoginScreen from '../screens/LoginScreen';
import TutorialScreen from '../screens/TutorialScreen';
import EnterVerificationCodeScreen from '../screens/EnterVerificationCodeScreen';
import HomeScreen from '../screens/HomeScreen';
import LandlordScreen from '../screens/LandlordScreen';
import RequestForMaintenanceScreen from '../screens/RequestForMaintenanceScreen';
import CameraScreen from '../screens/CameraScreen';

export default createRouter(() => ({
	login: () => LoginScreen,
	tutorials: () => TutorialScreen,
	enterVerificationCode: () => EnterVerificationCodeScreen,
	home: () => HomeScreen,
	landlord: () => LandlordScreen,
	requestForMaintenance: () => RequestForMaintenanceScreen,
	camera: () => CameraScreen,
}))