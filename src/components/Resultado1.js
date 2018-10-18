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


export default class Resultado1 extends Component {


		

	render(){
        return (
			<View style={{flex:1,flexDirection: 'column', backgroundColor: '#095573'}}>
					<Image 
								
								style={{flex:0.7, height: undefined, width: undefined}}
							source={require('../assets/img/robotMovil/piezas/robotMovil.png')}
							/>
				</View>
        );
    }

}

const styles = StyleSheet.create({
 	
	
 });
