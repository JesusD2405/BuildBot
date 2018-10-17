/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, PanResponder, Animated, Dimensions, TouchableOpacity} from 'react-native';

import Draggable from 'react-native-draggable';


export default class RobotTO_LV1 extends Component {

	constructor(){

		super();

		// Silueta de construcción
		var Scabeza= false;
		var Scuerpo= false;
		var SbrazoDerecho= false;
		var SbrazoIzquierdo= false;
		var Spies= false;

		// Piezas 
		var cabeza= false;
		var cuerpo= false;
		var brazoDerecho= false;
		var brazoIzquierdo= false;
		var pies= false;
	}

	onRobot (pieza)
	{
		switch (pieza) 
		{
			case "cabeza":

					if (this.cabeza === true)
					{
						this.Scabeza = true;
					}

				break;

			case "cuerpo":

					if (this.cuerpo === true) 
					{
						this.Scuerpo= true;
					}	

				break;

			case "brazoDerecho":

					if (this.brazoDerecho === true) 
					{
						this.SbrazoDerecho= true;
					}	

				break;

			case "brazoIzquierdo":

					if (this.brazoIzquierdo === true) 
					{
						this.SbrazoIzquierdo= true;
					}	

				break;

			case "pies":

					if (this.pies === true) 
					{
						this.Spies= true;
					}	

				break;	
		}

		this.finishRobot();	
	}

	onPieces(pieza)
	{
		switch (pieza) 
		{
			case "cabeza":
					this.cabeza = true;
				break;
			case "cuerpo":
					this.cuerpo= true;
				break;
			case "brazoDerecho":
					this.brazoDerecho= true;
				break;
			case "brazoIzquierdo":
					this.brazoIzquierdo= true;
				break;
			case "pies":
					this.pies= true;
				break;
			
		}
	}

	finishRobot()
	{
		if (((this.Scabeza===true && this.Scuerpo===true) && (this.SbrazoDerecho===true && this.SbrazoIzquierdo===true)) && this.Spies===true)
		{
			alert('Felicidades ha construido correctamente su Robot!');
		}
	}


	render(){
        return (
			<View style={styles.content}>
				<View style={styles.titleBox}>
					<Text style={styles.title}> Armar Robot</Text>
				</View>

				<View style={styles.Game}>
					
					<View style={styles.piecesBox }>
						<Text style={styles.title}> Piezas </Text>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onPieces('cabeza')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%', backgroundColor: '#095573',}}
								source={require('../assets/img/piezasRobot/cabeza.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onPieces('brazoDerecho')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%', backgroundColor: '#095573',}}
								source={require('../assets/img/piezasRobot/brazoDerecho.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onPieces('brazoIzquierdo')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%', backgroundColor: '#095573',}}
								source={require('../assets/img/piezasRobot/brazoIzquierdo.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onPieces('cuerpo')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%', backgroundColor: '#095573',}}
								source={require('../assets/img/piezasRobot/cuerpo.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onPieces('pies')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%', backgroundColor: '#095573',}}
								source={require('../assets/img/piezasRobot/pies.png')}
							/>
						</TouchableOpacity>

					</View>

					<View style={styles.robotBox}>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onRobot('cabeza')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%'}}
								source={require('../assets/img/estructura/cabeza.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onRobot('cuerpo')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%'}}
								source={require('../assets/img/estructura/cuerpo.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onRobot('brazoDerecho')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%'}}
								source={require('../assets/img/estructura/brazoDerecho.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onRobot('brazoIzquierdo')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%'}}
								source={require('../assets/img/estructura/brazoIzquierdo.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onRobot('pies')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%'}}
								source={require('../assets/img/estructura/pies.png')}
							/>
						</TouchableOpacity>

					</View>

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
	button: {
		flex:1,
		resizeMode : 'contain',
    	backgroundColor: '#158FBF',
     	marginBottom: '-20%',
  	},
 	// Contenedor del titulo de la pantalla
	titleBox: {
		flexDirection: 'row',
		backgroundColor: '#0277bd',
		justifyContent: 'center', 
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
    Game:{
    	flex: 1, 
    	flexDirection: 'row',
    },
     piecesBox:
    {
    	flexDirection: 'column',
    	width: '30%',
    	backgroundColor: '#095573',
     },
	robotBox:
	{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#158FBF',
	}
 });
