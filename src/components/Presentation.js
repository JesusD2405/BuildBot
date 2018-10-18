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

	constructor(props) {
	    super(props);

   }

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
    					Clasificación{"\n"}{"\n"}{"\n"}
  					</Text>
					
        			
  				

  					<Text style={{ fontSize: 16,color: 'white',
					textAlign: 'justify'}}>
    					Androides:  Los robots humanoides asemejan la morfología humana. Dado su grado de complejidad en el control de este tipo de robots, los avances han sido lentos en sus inicios, si bien en la actualidad encontramos numerosos robots humanoides con capacidades de aprendizaje que les han dotado de una mejor autonomía y control.
{"\n"}{"\n"}{"\n"}Móviles: Un manipulador móvil es una combinación de una base móvil (generalmente con ruedas) y un torso con brazos manipuladores. El principal campo de aplicación es en aquellos lugares, generalmente industriales, en los que se quiere extender el campo de trabajo de un brazo manipulador y pueden utilizarse, por ejemplo, para el transporte de cargas pesadas.
{"\n"}{"\n"}{"\n"}Industriales: los robots de este tipo pueden ser electrónicos o mecánicos y se los utiliza para la realización de los procesos de manipulación o fabricación automáticos. 
{"\n"}{"\n"}{"\n"}Médicos: Son robots con aplicaciones, principalmente en el campo de la cirugía, en las que se hace uso de la precisión de múltiples brazos robóticos para asistir al cirujano en las operaciones. Pueden también controlarse a distancia.
{"\n"}{"\n"}{"\n"}Teleoperadores: Se trata de robots que se controlan a distancia, ya sea mediante cable físico o inalámbrico (Wi-Fi, Bluetooth, etc.). Lo lo general el término ``control'' a distancia puede referirse a una distancia física, pero también podría significar un cambio de escala, como es el caso de los robots utilizados en cirugía, que requieren del uso de tecnologías micro-robóticas.{"\n"}{"\n"}

  					</Text>
					

  					
  								 
				</Text>

			</View>

			<View style={styles.BottomBox}>
				<Button
					onPress={this.onNext}
					title="Siguiente"
					color="#095573"
					/>
			</View>

			<Button
				onPress={this.onNext}
				title="Siguiente"
				color="#095573"
				/>

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
