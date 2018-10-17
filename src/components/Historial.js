/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Historial extends Component {

  render() {
	return (
			
		<View style={styles.content}>

			<View style={styles.titleBox}>

				<Text style={styles.title}> Historial </Text>

			</View>

			<View style={styles.textcontainer}>

				<Text style={styles.textContent}> 

					<Text style={{ fontSize: 24,color: 'white',fontWeight: 'bold',fontFamily: 'Cochin',
					 }}>
    					Jugador{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}Puntaje{"\n"}
    					─────────────────
  					</Text>
	
				</Text>
				

			</View>

			<View style={styles.BottomBox}>
				<Button
					onPress={this.onNext}
					title="Jugar de Nuevo"
					color="#095573"
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

   BottomBox: {
		marginTop :'7%',
		marginBottom :'5%',
		marginLeft: '10%',
		marginRight: '10%',
		backgroundColor: '#095573',
	},

});

