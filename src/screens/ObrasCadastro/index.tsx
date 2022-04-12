import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {CadastrarObra, CadastrarObraPorAutor} from '../../Api';
import Input from '../../components/Input';
import styles from './styles';

const ObrasCadastro = () => {
  const [LI, setLI] = useState('');
  const [LO, setLO] = useState('');
  const [NO, setNO] = useState('');
  const [GN, setGN] = useState('');
  const [DES, setDES] = useState('');
  const [uri, setUri] = useState(
    'https://img.freepik.com/fotos-gratis/textura-laranja_95678-73.jpg?size=626&ext=jpg',
  );

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.imgContainer}
          source={{
            uri: uri,
          }}
        />
        <TouchableOpacity
          style={styles.imgButao}
          onPress={() => {
            if (LI === '') {
              Snackbar.show({
                text: 'Link da Imagem vazio!',
                duration: Snackbar.LENGTH_SHORT,
              });
            } else {
              setUri(LI);
            }
          }}>
          <Text style={styles.imgText}>Carregar Imagem</Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#3d323f',
            height: 1.5,
            width: 100,
            marginTop: 10,
          }}
        />
        <TouchableOpacity style={styles.imgButao}>
          <Text style={styles.imgText}>Importar Imagem</Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#3d323f',
            height: 1.5,
            width: 350,
            marginTop: 10,
          }}
        />
        <Input
          placeholder="Link da Imagem"
          keyboardType="default"
          value={LI}
          onChangeText={t => setLI(t)}
        />
        <Input
          placeholder="Nome da Obra"
          keyboardType="default"
          value={NO}
          onChangeText={t => setNO(t)}
        />
        <Input
          placeholder="Link da Obra"
          keyboardType="default"
          value={LO}
          onChangeText={t => setLO(t)}
        />
        <Input
          placeholder="Gêneros"
          keyboardType="default"
          value={GN}
          onChangeText={t => setGN(t)}
        />
        <Input
          placeholder="Descrição/Sinopse"
          keyboardType="default"
          multiline={true}
          numberOfLines={50}
          height={150}
          value={DES}
          onChangeText={t => setDES(t)}
        />
        <TouchableOpacity
          style={styles.cadastroButao}
          onPress={() => {
            if (
              LI === '' &&
              LO === '' &&
              NO === '' &&
              DES === '' &&
              GN === ''
            ) {
              Snackbar.show({
                text: 'Preencha todos os campos!',
                duration: Snackbar.LENGTH_SHORT,
              });
            } else {
              CadastrarObra(LI, NO, LO, GN, DES);
              CadastrarObraPorAutor(LI, NO, LO, GN, DES);
              setLI('');
              setNO('');
              setLO('');
              setGN('');
              setDES('');
              setUri(
                'https://img.freepik.com/fotos-gratis/textura-laranja_95678-73.jpg?size=626&ext=jpg',
              );
              Snackbar.show({
                text: 'Obra cadastrada!',
                duration: Snackbar.LENGTH_SHORT,
              });
            }
          }}>
          <Text style={styles.cadastroButaoText}>Cadastrar Obra</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ObrasCadastro;
