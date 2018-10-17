/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity,  Button} from 'react-native';
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

				<Text style={styles.title}> Seleccionar Robot </Text>

			</View>
		
		

			<TouchableOpacity
					style={styles.button}
					onPress={() => this.onPlay('robotMo')}>
					<Image 
						style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%'}}

						source={require('../assets/img/robotMovil.png')}
						/>
			</TouchableOpacity>

			

			<TouchableOpacity
				style={styles.button}
				onPress={() => this.onPlay('robotTo')}
				>
				<Image 
					style={{flex:0.51, height: undefined, width: undefined, resizeMode : 'contain'}}
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

        
        
	},

	button: {
		flex:1,
		resizeMode : 'contain',
    	backgroundColor: '#158FBF',
     	marginBottom: '-20%',
     	

  	},

	// Contenedor del titulo de la pantalla
	titleBox: {
		//flexDirection: 'row',
		backgroundColor: '#095573',
		

		//width: 150,
		//height: 80,
		//flex: 0.5,
	},




	// Texto titulo de la pantalla
	title: {
		fontSize: 30,
		color: 'white',
		fontWeight: 'bold',
		fontFamily: 'Cochin',
		alignSelf: 'center',
    },

   

	countContainer: {
		alignItems: 'center',
		padding: 10
	},

	countText: {
		color: '#FF00FF'
	}

});
