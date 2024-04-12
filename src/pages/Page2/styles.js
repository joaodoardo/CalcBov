import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#331701',
      alignItems: 'center',
      justifyContent: 'space-around',
      minHeight: 850
    },
    texto: {
      color: '#fad6a2',
      fontWeight: 'bold',
      fontSize: 20
    },
    pergunta: {
      color: '#fad6a2',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: '10%'
    },
    botao: {
      backgroundColor: '#b43602',
      width: '100%',
      height: '50%',
      borderRadius: 6,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 

    },
    input: {
      backgroundColor: '#fad6a2',
      width: '100%',
      height: '50%',
      borderRadius: 6,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10%',
      fontSize: 20,
      color: '#4d3e37',
      textAlign: 'center'
    },
    form: {
      width: '65%',
      height: '16%',
      marginBottom: '70%'
    },
    checkcontainer: {
      width: '100%',
      marginBottom: '10%',
      height: 25,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    checktext: {
      color: '#fad6a2',
      fontWeight: 'bold',
    },
    check: {
      backgroundColor: '#fad6a2',
      width: 25,
      height: 25,
      borderRadius: 5,
      marginRight: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    checkicon: {
      backgroundColor: '#b43602',
      height: '80%',
      width: '80%',
      borderRadius: 4,
     
    },
    visible: {
      display: 'flex',
    },
    hidden: {
      display: 'none',
    },
});