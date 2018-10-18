/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

/* Importación de Componentes */
import Login from './src/components/Login';
import Register from './src/components/Register';
import Historial from './src/components/Historial';
import Presentation from './src/components/Presentation';
import MenuRobotSelect from './src/components/MenuRobotSelect';
import RobotTO_LV1 from './src/components/RobotTO_LV1';
import RobotMO_LV1 from './src/components/RobotMO_LV1';
import Resultado from './src/components/Resultado';
import Resultado1 from './src/components/Resultado1';

type Props = {};

export default class App extends Component<Props> {

  render() {
	return <Router>

		<Scene key="root">
			<Scene key="login" component={Login} title="Login" hideNavBar/>
			<Scene key="Register" component={Register} title="Register" hideNavBar/>
			<Scene key="MenuRobotSelect" component={MenuRobotSelect} title="MenuRobotSelect" hideNavBar/>
			<Scene key="Historial" component={Historial} title="Historial" hideNavBar/>
			<Scene key="Presentation" component={Presentation} title="Presentation" hideNavBar/>
			<Scene key="RobotTO_LV1" component={RobotTO_LV1} title="RobotTO_LV1" hideNavBar/>
			<Scene key="RobotMO_LV1" component={RobotMO_LV1} title="RobotMO_LV1" hideNavBar/>
			<Scene key="Resultado" component={Resultado} title="Resultado" hideNavBar/>
			<Scene key="Resultado1" component={Resultado1} title="Resultado1" hideNavBar/>
		</Scene>
		
	</Router>
  }
}
