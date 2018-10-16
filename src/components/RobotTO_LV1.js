/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

export default class RobotTO_LV1 extends Component {

  render() {
	return (
			
		<View style={styles.content}>

			<View style={styles.titleBox}>

				<Text style={styles.title}> Armar Robot </Text>

			</View>

			<View style={styles.piecesBox}>

			</View>

			<View style={styles.robotBox}>

			</View>

		</View>	
	);
  }
}

const styles = StyleSheet.create({

	content: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#158FBF',
	},

	// Contenedor del titulo de la pantalla
	titleBox: {
		flexDirection: 'row',
		backgroundColor: '#0277bd',
		//justifyContent: 'center', // 
		//alignItems: 'center',
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

    piecesBox:
    {
    	backgroundColor: 'red',
    	width: 100,
		height: 100,

    },
	robotBox:
	{
		backgroundColor: 'blue',
		width: 100,
		height: 100,
	}

,});
