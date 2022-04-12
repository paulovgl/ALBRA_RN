import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import HomeLeitor from '../screens/HomeLeitor';
import Favoritos from '../screens/Favoritos';
import ObrasGerais from '../screens/ObrasGerais';
import Perfil from '../screens/Perfil';

import Person from '../assets/account.svg';
import Home from '../assets/home.svg';
import Book from '../assets/book.svg';
import Favorite from '../assets/favorite_full.svg';
import {StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let IconName;

          switch (route.name) {
            case 'HomeLeitor':
              IconName = Home;
              size = size * 1.1;
              break;
            case 'Favoritos':
              IconName = Favorite;
              break;
            case 'ObrasGerais':
              IconName = Book;
              size = size * 0.85;
              break;
            case 'Perfil':
              IconName = Person;
              break;
            default:
              IconName = Home;
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
      <Tab.Screen name="HomeLeitor" component={HomeLeitor} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
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
