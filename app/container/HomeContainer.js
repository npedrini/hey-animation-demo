import React from 'react';

import { withNavigationFocus } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import DiscoverScreen from '../component/home/DiscoverScreen';
import ViewGroupScreen from '../component/home/ViewGroupScreen';
import CommunityScreen from '../component/home/CommunityScreen';
import PlaceholderScreen from '../component/home/PlaceholderScreen';

let tabConfig = {
	Communities: {
		screen: CommunityScreen,
		navigationOptions: {
			title: 'My Communities',
		}
	},
	Discover: {
		screen: withNavigationFocus(DiscoverScreen),
		navigationOptions: {
			title: 'Discover',
		}
	}
}

const TabNavigator = createMaterialTopTabNavigator(
	tabConfig, {
		activeColor: '#000000',
		inactiveColor: '#666666',
		initialRouteName: 'Communities',
		labeled: false,
		tabBarOptions: {
			activeTintColor: '#000000',
			inactiveTintColor: '#999999',
			indicatorStyle: {
				backgroundColor: '#4169e1',
				height: 3,
			},
		  labelStyle: {
		    fontSize: 16,
		    fontWeight: 'bold',
		  },
		  style: {
		    backgroundColor: 'transparent',
		    height: 60,
		    justifyContent: 'flex-end',
		  },
		  upperCaseLabel: false,
		}
	}
);

export default TabNavigator;