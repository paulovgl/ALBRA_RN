import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8942',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  titulo: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#3d323f',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#eecd86',
    marginTop: 15,
    flexDirection: 'row',
    height: 150,
    padding: 5,
    width: Dimensions.get('window').width - 20,
  },
  imgContainer: {
    height: 140,
    width: 100,
    marginRight: 5,
  },
  tituloCard: {
    textAlign: 'center',
    justifyContent: 'center',
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3d323f',
    borderBottomColor: '#3d323f',
    borderBottomWidth: 1,
  },
  descricaoCard: {
    textAlign: 'justify',
    justifyContent: 'center',
    height: 120,
    fontSize: 14,
    color: '#3d323f',
    flex: 1,
  },
  textCard: {
    flexDirection: 'column',
    flex: 1,
  },
});

export default styles;
