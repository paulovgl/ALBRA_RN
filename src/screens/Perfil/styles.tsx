import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8942',
    alignItems: 'center',
    padding: 20,
  },
  containerLoading: {
    flex: 1,
    backgroundColor: '#ff8942',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#3d323f',
    marginBottom: 20,
  },
  avatarOff: {
    backgroundColor: '#eecd86',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
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
  imgText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3d323f',
  },
  imgButao: {
    width: 140,
    height: 30,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b95835',
  },
  sairBtn: {
    width: 140,
    height: 30,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b95835',
  },
});

export default styles;
