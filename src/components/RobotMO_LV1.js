/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

import Draggable1 from './Draggable1';

export default class RobotMO_LV1 extends Component {

  render() {
	return (
			
		<View style={styles.content}>

			<View style={styles.titleBox}>

				<Text style={styles.title}> Armar Robot </Text>

			</View>

			<View style={styles.DraggableBox}>

				<Draggable1 />

			</View>

		</View>	
	);
  }
}

const styles = StyleSheet.create({

	content: {
		flex: 1,
		backgroundColor: '#158FBF',
	},

	// Contenedor del titulo de la pantalla
	titleBox: {
		flexDirection: 'row',
		backgroundColor: '#0277bd',
		justifyContent: 'center',
		//width: 150,
		height: 80,
	},

	// Texto titulo de la pantalla
	title: {
		fontSize: 40,
		paddingTop: 10,
		color: 'white',
		fontWeight: 'bold',
		fontFamily: 'Cochin',
    },

    DraggableBox:
    {
    	flexDirection: 'column',
    }

});
