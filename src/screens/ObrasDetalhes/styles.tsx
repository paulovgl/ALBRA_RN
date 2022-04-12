import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8942',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#3d323f',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#eecd86',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width - 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  imgContainer: {
    width: 160 * 2,
    height: 240 * 2,
    borderWidth: 1,
    borderColor: '#3d323f',
    backgroundColor: '#3d323f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerLeft: {
    height: 2,
    backgroundColor: '#3d323f',
    width: 110,
    marginRight: 5,
  },
  dividerRight: {
    height: 2,
    backgroundColor: '#3d323f',
    width: 110,
    marginLeft: 5,
  },
  sectionTitulo: {
    color: '#3d323f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionConteudo: {
    color: '#3d323f',
    fontSize: 15,
    textAlign: 'justify',
  },
});

export default styles;
