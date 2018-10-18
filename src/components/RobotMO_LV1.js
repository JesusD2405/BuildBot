/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, PanResponder, Animated, Dimensions, TouchableOpacity} from 'react-native';

import Draggable1 from './Draggable1';
import { Actions } from 'react-native-router-flux';

export default class RobotMO_LV1 extends Component {

	constructor(){

		super();

		// Silueta de construcción
		var ScaminadoraBrazoDerecho= false;
		var ScaminadoraCauchos= false;
		var SbrazoIzquierdo= false;
		var ScaminadoraBase= false;

		// Piezas 
		var caminadoraBrazoDerecho= false;
		var caminadoraCauchos= false;
		var brazoIzquierdo= false;
		var caminadoraBase= false;
	}

	onRobot (pieza)
	{
		switch (pieza) 
		{
			case "caminadoraBrazoDerecho":

					if (this.caminadoraBrazoDerecho === true)
					{
						this.ScaminadoraBrazoDerecho = true;
						//console.warn('caminadoraBrazoDerecho')
					}

				break;

			case "caminadoraCauchos":

					if (this.caminadoraCauchos === true) 
					{
						this.ScaminadoraCauchos= true;
						//console.warn('caminadoraCauchos')
					}	

				break;

			case "brazoIzquierdo":

					if (this.brazoIzquierdo === true) 
					{
						this.SbrazoIzquierdo= true;
						//console.warn('brazoIzquierdo')
					}	

				break;

			case "caminadoraBase":

					if (this.caminadoraBase === true) 
					{
						this.ScaminadoraBase= true;
						//console.warn('caminadoraBase')
					}	

				break;
		}

		this.finishRobot();	
	}

	onPieces(pieza)
	{
		switch (pieza) 
		{
			case "caminadoraBrazoDerecho":
					//console.warn('caminadora brazo');
					this.caminadoraBrazoDerecho = true;
				break;
			case "caminadoraCauchos":
					//console.warn('cauchos');
					this.caminadoraCauchos= true;
				break;
			case "brazoIzquierdo":
					//console.warn('izquierdo');
					this.brazoIzquierdo= true;
				break;
			case "caminadoraBase":
					//console.warn('base');
					this.caminadoraBase= true;
				break;
			
		}
	}

	finishRobot()
	{
		if ((this.ScaminadoraBrazoDerecho===true && this.ScaminadoraCauchos===true) && (this.SbrazoIzquierdo===true && this.ScaminadoraBase===true))
		{
			alert('Felicidades ha construido correctamente su Robot!');
			Actions.Resultado1();
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
							onPress={() => this.onPieces('caminadoraBrazoDerecho')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%', backgroundColor: '#095573',}}
								source={require('../assets/img/robotMovil/piezas/caminadoraBrazoDerecho.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onPieces('caminadoraCauchos')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%', backgroundColor: '#095573',}}
								source={require('../assets/img/robotMovil/piezas/caminadoraCauchos.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onPieces('brazoIzquierdo')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%', backgroundColor: '#095573',}}
								source={require('../assets/img/robotMovil/piezas/brazoIzquierdo.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onPieces('caminadoraBase')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%', backgroundColor: '#095573',}}
								source={require('../assets/img/robotMovil/piezas/caminadoraBase.png')}
							/>
						</TouchableOpacity>

					</View>

					<View style={styles.robotBox}>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onRobot('caminadoraBrazoDerecho')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%',}}
								source={require('../assets/img/robotMovil/estructura/caminadoraBrazoDerecho.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onRobot('caminadoraCauchos')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%',}}
								source={require('../assets/img/robotMovil/estructura/caminadoraCauchos.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onRobot('brazoIzquierdo')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%',}}
								source={require('../assets/img/robotMovil/estructura/brazoIzquierdo.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onRobot('caminadoraBase')}>
							<Image 
								style={{flex:0.55, height: undefined, width: undefined, resizeMode : 'contain', marginTop:'7%',}}
								source={require('../assets/img/robotMovil/estructura/caminadoraBase.png')}
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