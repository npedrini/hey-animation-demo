import React from 'react';
import { Alert, Animated, FlatList, Text, View } from 'react-native';
import TagListItem from './partials/TagListItem';
import data from '../../../data.json';
import styles from '../styles';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ViewGroupScreen extends React.Component {

	static navigationOptions = ({navigation}) => {
		let group = navigation.getParam('group');
		return {
			headerBackImage: <Icon name="chevron-left" size={20} style={styles.headerIcon} />,
			headerBackTitle: null,
			headerTitleStyle: styles.headerTitle,
			headerTitle: (group && group.name) || 'View Group'
		}
	}

	constructor(props){
		super(props);
		this.state = {
			isFocused: false,
		}
	}

	componentDidMount = () => {
		if( this.props.navigation.getParam('group') ) {
			this.setState({
				group: this.props.navigation.getParam('group')
			});
		}

		if( this.props.isFocused ) {
			this.setState({
				isFocused: true,
			});
		}
	}

	componentDidUpdate = ( prevProps, prevState ) => {
		if( prevProps.navigation.getParam('group') !== this.props.navigation.getParam('group') ) {
			this.setState({
				group: this.props.navigation.getParam('group'),
			})
		}
		if( prevProps.isFocused !== this.props.isFocused ) {
			this.setState({
				isFocused: this.props.isFocused,
			});
		}
	}

	render(){
		let { group } = this.state;

		return 	<View style = {[styles.container]}>
							{group && group.tags ? 
								<FlatList 
									data={group.tags} 
									extraData={this.state}
									renderItem={this.renderItem}
									style={styles.paddingMedium}
									keyExtractor={(item, index) => index.toString()} /> : 
								<Text style={styles.text}>No tags</Text>}
						</View>
	}

	renderItem = ({item,index}) => {
		let { isFocused } = this.state;

		return 	<TagListItem 
							tag={item} 
							index={index}
							isFocused={isFocused}
							onPress={() => Alert.alert('Not implemented')} />
	}
}