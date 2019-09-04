import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Easing, FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';
import * as Animatable from 'react-native-animatable';

export default class CommunityListItem extends React.Component {

	COLORS = ['#FFE25C','#F69846','#F18DBD','#0083B3','#B3BF6F'];

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
		let { index, item } = this.props,
			bgColor = this.COLORS[ Math.floor( Math.random() * this.COLORS.length ) ]

		return <TouchableOpacity onPress={this.props.onPress}>
							<Animatable.View 
								ref={ref => this.viewRef = ref} 
								style={styles.userListItemContainer}>
								<View style={styles.userProfilePicPlaceholder} />
								<View style={{justifyContent:'center'}}>
									<Text style={{color:'#000000'}}>{item.name}</Text>
									<Text style={{color:'#666666'}}>{`${item.members} members`}</Text>
								</View>
							</Animatable.View>
						</TouchableOpacity>
	}

	reveal = ( index = 0 ) => {
		index = index || this.props.index;
		this.viewRef.fadeInRight(100,index*100)
	}
}

CommunityListItem.propTypes = {
	onPress: PropTypes.func.isRequired,
}