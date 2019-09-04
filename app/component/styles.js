'use strict'

import React, { StyleSheet } from 'react-native';
 
export default StyleSheet.create({

  container: {
    flex: 1,
  },

  horizontalCenter: {
    alignItems: 'center', 
  },

  horizontalVerticalCenter: {
    alignItems: 'center', 
    justifyContent: 'center',
  },

  paddingMedium: {
    padding: 15,
  },

  userListItemContainer: {
    height: 50,
    flexDirection: 'row',
    marginBottom: 20,
  },
  userProfilePicPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor:'#999999',
    marginRight: 20
  },
  tagListItemContainer: {
    height: 50,
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth:1,
    borderBottomColor:'#666666',
    padding: 10,
  },

  //  text
  headerTitle: {
    color: '#999999',
    fontSize: 15,
    fontWeight: 'bold',
  },
  headerIcon: {
    color: '#999999',
    paddingLeft: 20,
    paddingRight: 20,
  },

  text: {
    color: '#333333',
    fontSize: 13,
  },
  textMedium: {
    color: '#333333',
    fontSize: 16,
  },
  textLarge: {
    color: '#333333',
    fontSize: 18,
  },

  tagTitle: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 'bold',
  },

  placeholderTitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom: 10,
  },
  placeholderDescription: {
    color: '#666666',
    fontSize: 14,
    textAlign:'center',
    paddingHorizontal: 15,
  },
}); 
