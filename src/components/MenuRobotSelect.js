/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MenuRobotSelect extends Component {

	onPlay (robot)
	{
		if (robot=='robotMo') 
		{
			//console.warn('Seleccionó un robot móvil');
			// Redireccionamos a la sección de registro
			Actions.RobotMO_LV1();
		}
		else
		{
			//console.warn('Seleccionó un robot teleoperado');
			// Redireccionamos a la sección de registro
			Actions.RobotTO_LV1();
		}
	}

  render() {
	return (
			
		<View style={styles.content}>

			<View style={styles.titleBox}>

				<Text style={styles.title}> Seleccionar Robots </Text>

			</View>

			<TouchableOpacity
				onPress={() => this.onPlay('robotMo')}>
				<Text> Robot Movil </Text>
				<Image 
					style={styles.robotSelect}
					source={require('../assets/img/robotMovil.png')}
					/>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => this.onPlay('robotTo')}
				>
				<Text> Tele Operado </Text>
				<Image 
					style={styles.robotSelect}
					source={require('../assets/img/robotTeleOperado.png')}
					/>
			</TouchableOpacity>

		</View>	
	);
  }
}

const styles = StyleSheet.create({

	content: {
		flex: 1,
		backgroundColor: '#158FBF',
		//justifyContent: 'center',
		//alignItems: 'center',
	},

	// Contenedor del titulo de la pantalla
	titleBox: {
		flexDirection: 'row',
		backgroundColor: '#0277bd',
		//justifyContent: 'center',
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

    robotSelect: {
	    width: '50%',
		height: '50%',
	},

	countContainer: {
		alignItems: 'center',
		padding: 10
	},

	countText: {
		color: '#FF00FF'
	}

});
