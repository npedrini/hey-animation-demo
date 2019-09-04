import React from 'react';
import { Animated, FlatList, Text, View } from 'react-native';
import CommunityListItem from './partials/CommunityListItem';
import data from '../../../data.json';
import styles from '../styles';

export default class DiscoverScreen extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isFocused: false,
			hasAnimated: false,
		}
	}

	componentDidMount = () => {
		if( this.props.isFocused ) {
			this.setState({
				isFocused: true,
			});
		}
	}

	componentDidUpdate = ( prevProps, prevState ) => {
		if( prevProps.isFocused !== this.props.isFocused ) {
			this.setState({
				isFocused: this.props.isFocused,
			});
		}

		if( prevState.isFocused !== this.state.isFocused
			&& prevState.isFocused ) {
			this.setState({
				hasAnimated: true,
			});
		}
	}

	render(){
		return 	<View style = {[styles.container]}>
							<FlatList 
								data={data} 
								extraData={this.state}
								renderItem={this.renderItem}
								style={styles.paddingMedium}
								keyExtractor={(item, index) => index.toString()} />
						</View>
	}

	renderItem = ({item,index}) => {
		let { hasAnimated } = this.state;

		return 	<CommunityListItem 
							item={item} 
							index={index}
							isFocused={this.state.isFocused && !hasAnimated}
							onPress={()=>this.props.navigation.navigate({routeName:'ViewGroup',params:{group:item}})} />
	}
}