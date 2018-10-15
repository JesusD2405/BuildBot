/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Login from './src/components/Login';

type Props = {};

export default class App extends Component<Props> {

  render() {
	return (
		<View style={styles.container}>

			<Login />
			
		</View>
	);
  }
}

const styles = StyleSheet.create({

	// Contenedor Principal
	container: {
		flex: 1,
		//flexDirection: 'column',
		//justifyContent: 'center',
		//alignItems: 'center',
		backgroundColor: '#158FBF',
	},

	// Contenedor del titulo de la pantalla
	titleBox: {
		flexDirection: 'row',
		backgroundColor: '#0277bd',
		justifyContent: 'center',
		//width: 150,
		height: 100,
	},

	// Texto titulo de la pantalla
	title: {
		fontSize: 40,
		paddingTop: 20,
		color: 'white',
		fontWeight: 'bold',
		fontFamily: 'Cochin',
    
	},

	// Contenedor del icono principal

	iconoBox:{
		flex: 1,
		alignItems: 'center',
	},

	// Icono

	icono:{
		width: 450,
		height: 450,
	},

	// Inputs
	loginFormBox: {
		//flex: 1,
		//width: 150,
		//height: 100,
	},

	// Logueo
	loginAcountBox: {
		//flex: 1,
		//width: 150,
		//height: 100,
	},

});
