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

export default class Presentation extends Component {

	onNext ()
	{
		// Redireccionamos a la sección del menú del juego
		Actions.MenuRobotSelect();
	}

  render() {
	return (
			
		<View style={styles.content}>

			<View style={styles.titleBox}>

				<Text style={styles.title}> Presentación </Text>

			</View>

			<View>

				<Text style={styles.textContent}> 
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
				</Text>

			</View>

			<View>
				<Button
					onPress={this.onNext}
					title="Siguiente"
					color="#01579b"
					accessibilityLabel="Learn more about this purple button"
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

    textContent: {
    	fontSize: 20,
		paddingTop: 30,
		color: 'white',
		fontWeight: 'bold',
		//fontFamily: 'Cochin',
    }

});
