/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

	onRegister ()
	{
		// Redireccionamos a la sección de registro
		Actions.Register();
	}

	onLogin()
	{
		// Redireccionamos a la sección de registro
		Actions.Presentation();
	}

  render() {
	return (

		<View style={styles.content}>

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
					onPress={this.onRegister}
					title="Registrarse"
					color="#01579b"
					accessibilityLabel="Learn more about this purple button"
					/>

				<Button
				  onPress={this.onLogin}
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
