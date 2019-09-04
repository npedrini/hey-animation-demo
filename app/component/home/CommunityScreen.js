import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

export default class CommunityScreen extends React.Component {
	render(){
		return 	<View style={[styles.container,styles.paddingMedium]}>
							<Text style={styles.text}>{`You didn't join any community yet, search or browse to discover one!`}</Text>
						</View>
	}
}