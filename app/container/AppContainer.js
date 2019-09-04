import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { createAppContainer, withNavigationFocus } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import withCustomPlaceholder from '../component/hoc/WithCustomPlaceholder';
import HomeContainer from './HomeContainer';
import PlaceholderScreen from '../component/home/PlaceholderScreen';
import ViewGroupScreen from '../component/home/ViewGroupScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../component/styles';

let config = {
	Home: {
		screen: HomeContainer,
		navigationOptions: {
			title: 'Home',
			headerRight: 	<View style={{flexDirection:'row',alignItems:'center'}}>
											<TouchableOpacity 
												onPress={() => Alert.alert('Not implemented')}>
												<Icon name="plus" style={[styles.headerIcon,{paddingRight:0}]} size={20} />
											</TouchableOpacity>
											<TouchableOpacity 
												onPress={() => Alert.alert('Not implemented')}>
												<Icon name="search" style={styles.headerIcon} size={20} />
											</TouchableOpacity>
										</View>,
			tabBarIcon: ({focused,horizontal,tintColor}) => <Icon name="home" color={tintColor} size={30} />,
		}
	},
	Favorites: {
		screen: withNavigationFocus(
			withCustomPlaceholder(PlaceholderScreen,null,null,false)
		),
		navigationOptions: {
			title: 'Favorites',
			tabBarIcon: ({focused,horizontal,tintColor}) => <Icon name="heart" color={tintColor} size={30} />,
		}
	},
	Notifications: {
		screen: withNavigationFocus(
			withCustomPlaceholder(PlaceholderScreen,'Nothing to show here','Notifications come when other users interact with you.')
		),
		navigationOptions: {
			title: 'Notifications',
			tabBarIcon:({focused,horizontal,tintColor}) => <Icon name="bell" color={tintColor} size={30} />,
		}
	},
	Messages: {
		screen: withNavigationFocus(
			withCustomPlaceholder(PlaceholderScreen,'No messages yet','Invite your friends or search a user.')
		),
		navigationOptions: {
			title: 'Messages',
			tabBarIcon: ({focused,horizontal,tintColor}) => <Icon name="envelope" color={tintColor} size={30} />,
		}
	}
}

const getCurrentRoute = (navigationState) => {
    if (!navigationState) {
        return null
    } else if (!navigationState.routes) {
        return navigationState
    }

		const route = navigationState.routes[navigationState.index];
    
    /*
    if (route.routes) {
        return getCurrentRoute(route)
    }
		*/
		
    return route
}

const MainTabNavigator = createBottomTabNavigator(
	config, {
		initialRouteName: 'Home',
		barStyle: { backgroundColor: 'transparent', padding: 0 },
		tabBarOptions: {
			activeTintColor: '#ff3300',
			inactiveTintColor: '#666666',
			showLabel: false,
		},
		navigationOptions: ({navigation}) => {
			const route = getCurrentRoute(navigation.state),
				routeConfig = route && config[route.key] && config[route.key].navigationOptions,
				routeTitle =  routeConfig && routeConfig.title,
				routeHeaderRight = routeConfig && routeConfig.headerRight;

      return {
      	title: routeTitle || '',
      	headerBackTitle: null,
      	headerRight: routeHeaderRight,
      	headerTitleStyle: styles.headerTitle,
      }
		}
	}
);

const AppNavigator = createStackNavigator({
    Root: MainTabNavigator,
    ViewGroup: withNavigationFocus(ViewGroupScreen),
  }, {
    headerMode: 'screen',
    mode: 'card',
})

export default createAppContainer(AppNavigator);