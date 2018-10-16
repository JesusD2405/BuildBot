/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TextInput, KeyboardAvoidingView, StatusBar} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

	constructor(props) {
    super(props);
    this.state = { text: '' };
    
   }

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

 <KeyboardAwareScrollView
      style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >

	    <View style={styles.titleBox}>
	    			<StatusBar hidden={true} />
					<Text style={styles.title}> Iniciar Sesión </Text>


		</View>	
	    
	    <View style={styles.iconoBox}>

						<Image 
							style={{flex:1, height: undefined, width: undefined}}
							source={require('../assets/img/icono.png')}
							//resizeMode="cover"
							/>
							
		</View>	

	    <View style={styles.loginFormBox}>

	 

						<TextInput
					        style={{ borderColor: '#35D0F2', borderWidth: 6, flex: 3,
		    					paddingTop: '5%',
		    					paddingRight: '5%',
		    					paddingBottom: '5%',
		    					paddingLeft: '5%',
		    					backgroundColor: '#fff',
		    					color: '#424242',}}
		    					placeholder="Correo"
					        onChangeText={(text) => this.setState({text})}
					        value={this.state.text}
					        returnKeyType = { "next" }
    						onSubmitEditing={() => { this.secondTextInput.focus(); }}
    						blurOnSubmit={false}
					        

					     />

					     <TextInput
					     secureTextEntry={true}
					        style={{ borderColor: '#35D0F2', borderWidth: 6, flex: 3,

		    					paddingTop: '5%',
		    					paddingRight: '5%',
		    					paddingBottom: '5%',
		    					paddingLeft: '5%',
		    					backgroundColor: '#fff',
		    					color: '#424242',}}
					        placeholder="*********"
		          			onChangeText={(text) => this.setState({text})}
					        value={this.state.text}

					        
     ref={(input) => { this.secondTextInput = input; }}
					        

					     />
	

		</View>

		<View style={styles.loginAcountBox}>

					<Button
					  onPress={this.onLogin}
					  title="Iniciar Sesión"
					  color="#158FBF"
					  //style={{paddingTop:50}}
					/>

					<Button
						onPress={this.onRegister}
						title="Registrarse"
						color="#0281ce"
						/>
		</View>

	 </KeyboardAwareScrollView>




	);
  }
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#35D0F2',
		flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',


	},

	// Contenedor del titulo de la pantalla
	titleBox: {
		flexDirection: 'row',
		backgroundColor: '#158FBF',
		justifyContent: 'center',
		//width: 150,
		//height: 80,
		//flex: 0.5,
	},

	// Texto titulo de la pantalla
	title: {
		fontSize: 40,
		color: 'white',
		fontWeight: 'bold',
		fontFamily: 'Cochin',

    },

	// Contenedor del icono principal

	iconoBox:{
		flex: 3,
		justifyContent: 'center',
		
	},

	// Icono

	

	// Inputs
	loginFormBox: {
		backgroundColor: '#FBFBEF',
		flex: 0.8,
		marginLeft: '15%',
		marginRight: '15%',
		//width: 150,
		//height: 100,

	},

	// Logueo
	/*loginAcountBox: {
		//flex: 1,
		//width: 150,
		//height: 100,
	},*/

});
