/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Login extends Component {

	onPress (){

		console.warn('Hola!');

	}

  render() {
	return (

		<View style={styles.login}>

			<View style={styles.titleBox}>

				<Text style={styles.title}> Iniciar Sesión</Text>

			</View>	

			<View style={styles.iconoBox}>

				<Image 
					style={styles.icono} 
					source={require('../assets/img/icono.png')}/>

			</View>	

			<View style={styles.loginFormBox}>

				<Text>inputs </Text>

			</View>	

			<View style={styles.loginAcountBox}>

				<Button
				  onPress={this.onPress}
				  title="Registrarse"
				  color="#01579b"
				  accessibilityLabel="Learn more about this purple button"
				/>

				<Button
				  onPress={this.onPress}
				  title="Iniciar Sesión"
				  color="#01579b"
				  accessibilityLabel="Learn more about this purple button"
				  style={{paddingTop:50}}
				/>

			</View>

		</View>	
	);
  }
}

const styles = StyleSheet.create({

	login: {
		flex: 1,
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

	// Contenedor del icono principal

	iconoBox:{
		//flex: 1,
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
