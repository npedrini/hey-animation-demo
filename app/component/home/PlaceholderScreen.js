import React from 'react';
import { Animated, Easing, Image, Text, View } from 'react-native';
import styles from '../styles';
import * as Animatable from 'react-native-animatable';

import PropTypes from 'prop-types';

export default class PlaceholderScreen extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {opacity:0}
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
		} else if( !this.props.isFocused
			&& this.state.opacity !== 0 ) {
			this.opacity = 0;
		}
	}

	render(){
		let { 
			title, 
			description, 
			showPlaceholder,
		} = this.props;

		return 	<View style = {[styles.container,styles.horizontalCenter]}>
							{showPlaceholder ?
							<View style={{marginTop:200,alignItems:'center'}}>
								<Animatable.Image 
									ref={ref => this.imgRef = ref}
									style={{height:200,marginBottom:10}}
									resizeMode='contain'
									source={require('../../../assets/images/kitty.png')} />
								<Animatable.Text 
									ref={ref => this.titleRef = ref}
									style={styles.placeholderTitle}>{title}</Animatable.Text>
								<Animatable.Text 
									ref={ref => this.descRef = ref}
									style={styles.placeholderDescription}>{description}</Animatable.Text>
							</View> : null}
						</View>
	}

	reveal = () => {
		if( this.props.showPlaceholder ) {
			this.imgRef.pulse(500);
		}
	}
}

PlaceholderScreen.defaults = {
	title: 'Nothing to show here',
	description: null,
	showPlaceholder: true,
}

PlaceholderScreen.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	showPlaceholder: PropTypes.bool,
}
