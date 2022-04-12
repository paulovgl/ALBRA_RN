import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import HomeAutor from '../screens/HomeAutor';
import ObrasCadastro from '../screens/ObrasCadastro';
import ObrasGerais from '../screens/ObrasGerais';
import Perfil from '../screens/Perfil';
import ObrasAutor from '../screens/ObrasAutor';

import Person from '../assets/account.svg';
import Home from '../assets/home.svg';
import Book from '../assets/book.svg';
import Folder from '../assets/folder.svg';
import Add from '../assets/add.svg';
import {StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let IconName;

          switch (route.name) {
            case 'HomeAutor':
              IconName = Home;
              break;
            case 'ObrasAutor':
              IconName = Folder;
              size = size * 0.9;
              break;
            case 'ObrasCadastro':
              IconName = Add;
              size = size * 0.9;
              break;
            case 'ObrasGerais':
              IconName = Book;
              size = size * 0.85;
              break;
            case 'Perfil':
              IconName = Person;
              break;
            default:
              IconName = Person;
              break;
          }
          return <IconName fill={color} width={size} height={size} />;
        },
        tabBarActiveTintColor: '#eecd86',
        tabBarInactiveTintColor: '#3d323f',
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#b95835'},
        headerShown: false,
      })}>
      <Tab.Screen name="HomeAutor" component={HomeAutor} />
      <Tab.Screen name="ObrasAutor" component={ObrasAutor} />
      <Tab.Screen
        name="ObrasCadastro"
        component={ObrasCadastro}
        options={() => ({
          tabBarIcon: ({color}) => (
            <View>
              <LinearGradient
                style={styles.iconTabRound}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}
                colors={['#eecd86', '#b95835']}>
                <Add fill={color} width={26} height={26} />
              </LinearGradient>
            </View>
          ),
        })}
      />
      <Tab.Screen name="ObrasGerais" component={ObrasGerais} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
