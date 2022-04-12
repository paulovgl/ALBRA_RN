import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {CommonActions, useNavigation} from '@react-navigation/native';

const ObrasGerais = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [obras, setObras] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Obras Gerais')
      .onSnapshot(querySnapshot => {
        const obras: any = [];

        querySnapshot.forEach(documentSnapshot => {
          obras.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setObras(obras);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const obrasDetalhes = (item: any) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ObrasDetalhes',
        params: {obra: item},
      }),
    );
  };

  const renderList = (item: any) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => obrasDetalhes(item)}>
        <Image style={styles.imgContainer} source={{uri: item.LinkdaImagem}} />
        <View style={styles.textCard}>
          <Text style={styles.tituloCard}>{item.NomedaObra}</Text>
          <Text style={styles.descricaoCard} numberOfLines={8}>
            {item.Descrição}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator color={'#b95835'} size={45} />
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList data={obras} renderItem={({item}) => renderList(item)} />
    </View>
  );
};

export default ObrasGerais;
