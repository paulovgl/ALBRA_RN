import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Preload from './src/screens/Preload';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import NavigatorHomeLeitor from './src/routes/NavigatorHomeLeitor';
import NavigatorHomeAutor from './src/routes/NavigatorHomeAutor';
import ObrasDetalhes from './src/screens/ObrasDetalhes';
import EditarPerfil from './src/screens/EditarPerfil';

export type RootStackParams = {
  Preload: any;
  Login: any;
  Cadastro: any;
  Leitor: any;
  Autor: any;
  ObrasDetalhes: any;
  EditarPerfil: any;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Preload"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Preload" component={Preload} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Cadastro" component={Cadastro} />
        <RootStack.Screen name="Leitor" component={NavigatorHomeLeitor} />
        <RootStack.Screen name="Autor" component={NavigatorHomeAutor} />
        <RootStack.Screen
          name="ObrasDetalhes"
          component={ObrasDetalhes}
          options={{
            headerShown: true,
            headerTintColor: '#3d323f',
            headerStyle: {backgroundColor: '#b95835'},
            headerTitleAlign: 'center',
            headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
          }}
        />
        <RootStack.Screen
          name="EditarPerfil"
          component={EditarPerfil}
          options={{
            headerShown: true,
            headerTintColor: '#3d323f',
            headerStyle: {backgroundColor: '#b95835'},
            headerTitleAlign: 'center',
            headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
