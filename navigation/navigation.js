import React from 'react'
import { createStackNavigator  } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import HomeScreen from '../Component/HomeScreen';
import Connexion from '../Component/Connexion';
import { createBottomTabNavigator } from "react-navigation-tabs";
import Inscription from '../Component/Inscription'
import Route from '../Component/Route'
import Prizes from '../Component/Prizes'
import navigation2 from './navigation2'
import Grille from '../Component/Grille'
import SplashScreen from '../Component/SplashVideo'


const HomeScreenNavigator = createStackNavigator({
	Route: { screen: Route,
		navigationOptions: { title: 'Title', headerLeft: null, gestureEnabled: false, }, },
	HomeScreen: { screen: HomeScreen },

	Connexion: { 
	    screen: Connexion
	},
	Inscription: { 
	    screen: Inscription
	},
	Grille: { 
	    screen: navigation2
	}
},{ headerMode: 'none' })


export default createAppContainer(HomeScreenNavigator)