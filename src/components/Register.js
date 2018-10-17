/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TextInput, KeyboardAvoidingView, StatusBar,  Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class Register extends Component {


constructor(props) {
    super(props);
    this.state = {text: null, text2: null, text3: null, text4: null};

    
   }

   onRegister()
	{
		console.warn('1');
		// Redireccionamos a la sección de registro
		Actions.Register();
	}

	onLogin()
	{	console.warn('2');
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
					<Text style={styles.title}> Registrarse </Text>


		</View>	
	    
	    <View style={styles.iconoBox}>

						<Image 
							style={{flex:1, height: undefined, width: undefined, resizeMode : 'contain'}}
							source={require('../assets/img/cabeza.png')}
							//resizeMode="cover"
							/>
							
		</View>	
		
		

	    <View style={styles.loginFormBox}>
						
	 					

						<TextInput
					        style={{ borderColor: '#158FBF', borderWidth: 0, flex: 1,
		    					paddingTop: '5%',
		    					paddingRight: '5%',
		    					paddingBottom: '5%',
		    					paddingLeft: '5%',
		    					backgroundColor: '#fff',
		    					color: '#424242',}}
		    					placeholder="Nombre"
					        onChangeText={(text) => this.setState({text})}
					        value={this.state.text}
					        returnKeyType = { "next" }
    						onSubmitEditing={() => { this.secondTextInput.focus(); }}
    						blurOnSubmit={false}
					     />

					     <Icon style={styles.searchIcon} name="person" size={33} color="#424242"/>

					    
	

		</View>

		<View style={{flex:0.1,flexDirection:"row",justifyContent:'space-between'}}>
            
            </View>

		<View style={styles.loginFormBox}>
						
	 					

					

					     <TextInput
					        style={{ borderColor: '#158FBF', borderWidth: 0, flex: 1,
		    					paddingTop: '5%',
		    					paddingRight: '5%',
		    					paddingBottom: '5%',
		    					paddingLeft: '5%',
		    					backgroundColor: '#fff',
		    					color: '#424242',}}
		    					placeholder="Apellido"
					        onChangeText={(text2) => this.setState({text2})}
					        value={this.state.text2}
					        returnKeyType = { "next" }
    						onSubmitEditing={() => { this.thirdTextInput.focus(); }}
    						ref={(input) => { this.secondTextInput = input; }}
    						blurOnSubmit={false}
					     />

					     <Icon style={styles.searchIcon} name="person" size={33} color="#424242"/>
	

		</View>

		<View style={{flex:0.1,flexDirection:"row",justifyContent:'space-between'}}>
            
            </View>


        <View style={styles.loginFormBox}>
						
	 					

						<TextInput
					        style={{ borderColor: '#158FBF', borderWidth: 0, flex: 1,
		    					paddingTop: '5%',
		    					paddingRight: '5%',
		    					paddingBottom: '5%',
		    					paddingLeft: '5%',
		    					backgroundColor: '#fff',
		    					color: '#424242',}}
		    					placeholder="Correo"
					        onChangeText={(text3) => this.setState({text3})}
					        value={this.state.text3}
					        returnKeyType = { "next" }
    						onSubmitEditing={() => { this.forthTextInput.focus(); }}
    						ref={(input) => { this.thirdTextInput = input; }}
    						blurOnSubmit={false}
					     />

					     <Icon style={styles.searchIcon} name="person" size={33} color="#424242"/>

					    
	

		</View>

		<View style={{flex:0.1,flexDirection:"row",justifyContent:'space-between'}}>
            
            </View>

		<View style={styles.loginFormBox}>

					     <TextInput
					     secureTextEntry={true}
					        style={{ borderColor: '#158FBF', borderWidth: 0, flex: 1,
		    				paddingTop: '5%',
		    				paddingRight: '5%',
		    				paddingBottom: '5%',
		    				paddingLeft: '5%',
		    				backgroundColor: '#fff',
		    				color: '#424242',}}
					        placeholder="*********"
		          			onChangeText={(text4) => this.setState({text4})}
					        value={this.state.text4}					     
     						ref={(input) => { this.forthTextInput = input; }}
     						blurOnSubmit={false}
     						onSubmitEditing={Keyboard.dismiss}
					     />

					     <Icon style={styles.searchIcon2} name="lock" size={33} color='#424242'/>
	

		</View>

		<View style={{flex:0.2,flexDirection:"row",justifyContent:'space-between'}}>
            
            </View>

		<View style={styles.loginAcountBox}>

					<Button
						onPress={() => this.onRegister()}
						title="Registrarse"
						color="#0281ce"
					/>

					

		</View>

		<View style={styles.loginAcountBox2}>
					<Button
						onPress={() => this.onLogin()}
						title="Iniciar Sesión"
						color="#095573"
						/>
					
		</View>

		<Button
			onPress={() => this.onLogin()}
			title="Iniciar Sesión"
			color="#095573"
			/>



	 </KeyboardAwareScrollView>
	);
  }
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#158FBF',
		flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',


	},

	// Contenedor del titulo de la pantalla
	titleBox: {

		//flexDirection: 'row',
		backgroundColor: '#095573',
		


		flexDirection: 'row',
		justifyContent: 'center',
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

	// Contenedor del icono principal

	iconoBox:{
		flex: 1,
		marginBottom :'2%',
		marginTop :'5%',



		
		
	},

	// Icono

	

	// Inputs
	loginFormBox: {
		backgroundColor: '#fff',
		flex: 0.3,
		marginLeft: '10%',
		marginRight: '10%',
		
		flexDirection: 'row',
    	justifyContent: 'center',
    	alignItems: 'center',
		//width: 150,
		//height: 100,

	},

	loginFormBox2: {
		backgroundColor: '#fff',
		flex: 0.3,
		marginLeft: '10%',
		marginRight: '10%',
		
		flexDirection: 'row',
    	justifyContent: 'center',
    	alignItems: 'center',
		//width: 150,
		//height: 100,

	},

	// Logueo
	loginAcountBox: {
		
		marginBottom :'5%',
		marginLeft: '10%',
		marginRight: '10%',
		//flex: 1,
		//width: 150,
		//height: 100,
		backgroundColor: '#095573',
	},

	loginAcountBox2: {
		marginBottom :'10%',
		marginLeft: '10%',

		marginRight: '10%',
		//flex: 1,
		//width: 150,
		//height: 100,
		backgroundColor: '#095573',
	},

	searchIcon: {
    //padding: 200,
    backgroundColor: '#FBFBEF',
    

	},

	searchIcon2: {
	borderWidth: 10,
    //padding: 200,
    backgroundColor: '#FBFBEF',
    paddingRight: 10,
    alignSelf: 'center',

	},

});
