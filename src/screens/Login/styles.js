import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    height: '100%',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 20,
    fontSize: 15,
  },
});

export default styles;
