import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fad6a2',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    containermenor: {
      backgroundColor: '#331701',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 25,
      width: '90%',
      height: '60%'
    },
    texto: {
      color: '#fad6a2',
      fontWeight: 'bold',
      fontSize: 40,
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '40%'
    },
    textobtn: {
      color: '#fad6a2',
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: '10%',
      marginRight: '10%'
    },
    botao: {
      backgroundColor: '#b43602',
      width: '70%',
      height: '15%',
      borderRadius: 6,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
      marginBottom: '20%'
    },
});