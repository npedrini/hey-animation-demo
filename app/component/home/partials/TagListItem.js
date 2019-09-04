import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Easing, FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';
import * as Animatable from 'react-native-animatable';

export default class TagListItem extends React.Component {

	constructor(props){
		super(props);
	}

	componentDidMount = () => {
		if( this.props.isFocused ) {
			this.reveal();
		}
	}

	componentDidUpdate = (prevProps,prevState) => {
		if( this.props.isFocused
			&& !prevProps.isFocused ) {
			this.reveal();
		}
	}

	render(){
		let { index, tag } = this.props;

		return <TouchableOpacity 
						onPress={this.props.onPress}>
							<Animatable.View 
								ref={ref => this.viewRef = ref} 
								style={styles.tagListItemContainer}>
								<Text style={styles.tagTitle}>{`#${tag}`}</Text>
							</Animatable.View>
						</TouchableOpacity>
	}

	reveal = ( index = 0 ) => {
		index = index || this.props.index;
		this.viewRef.bounceIn(200,500+index*200)
	}
}

TagListItem.propTypes = {}