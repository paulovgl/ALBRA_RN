import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8942',
    alignItems: 'center',
    padding: 20,
  },
  imgContainer: {
    width: 160,
    height: 240,
    borderWidth: 1,
    borderColor: '#3d323f',
    backgroundColor: '#3d323f',
    justifyContent: 'center',
    alignItems: 'center',
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
  cadastroButao: {
    width: Dimensions.get('window').width - 100,
    height: 60,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#b95835',
  },
  cadastroButaoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3d323f',
  },
});

export default styles;
