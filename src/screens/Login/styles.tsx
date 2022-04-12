import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8942',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#3d323f',
    marginBottom: 20,
  },
  button: {
    width: Dimensions.get('window').width - 100,
    height: 60,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#b95835',
  },
  textButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3d323f',
  },
  messageButton: {
    marginTop: 100,
    flexDirection: 'row',
  },
});

export default styles;
