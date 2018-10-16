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

			<View style={styles.textcontainer}>

				<Text style={styles.textContent}> 
					<Text style={{ fontSize: 24,color: 'white',fontWeight: 'bold',fontFamily: 'Cochin',
					 }}>
    					Clasificación{"\n"}{"\n"}
  					</Text>
					
        			
  					<Text style={{ fontSize: 18,color: 'white',
					 textDecorationLine : 'underline'}}>
    					Robots Tele operados.{"\n"}{"\n"}
  					</Text>

  					<Text style={{ fontSize: 16,color: 'white',
					textAlign: 'justify'}}>
    					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
					commodo consequat.{"\n"}{"\n"}

  					</Text>
					

  					<Text style={{ fontSize: 18,color: 'white',
					 textDecorationLine : 'underline'}}>
    					Robots Móviles.{"\n"}{"\n"}

  					</Text>
  					<Text style={{ fontSize: 16,color: 'white',
					textAlign: 'justify'}}>
    					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
					commodo consequat.{"\n"}{"\n"}

  					</Text>

  					

				</Text>

			</View>

			<View style={styles.loginAcountBox}>
				<Button
					onPress={this.onNext}
					title="Siguiente"
					color="#095573"
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

    textcontainer: {
		marginTop: '5%',
		padding: 5,
		flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
		//width: 150,
		//height: 100,

	},

    textContent: {

    	padding: 10,
    	backgroundColor: '#095573',
    	fontSize: 20,
		paddingTop: 10,
		color: 'white',
		fontWeight: 'bold',
		//fontFamily: 'Cochin',
		//marginBottom :'10%',
		marginLeft: '5%',
		marginRight: '5%',
		borderWidth: 10,
		borderStyle: "solid",
		borderRadius: 0.5,
	
		borderColor:'#095573',
    },

   loginAcountBox: {
		marginTop :'7%',
		marginBottom :'5%',
		marginLeft: '10%',
		marginRight: '10%',
		//flex: 1,
		//width: 150,
		//height: 100,
		backgroundColor: '#095573',
	},

});
