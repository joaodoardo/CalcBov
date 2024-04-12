import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fad6a2',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 850
    },
    containermaior: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '90%',
        height: 600, 
        marginBottom: '15%',   
    },
    containermenor: {
        display: 'flex',
        backgroundColor: '#331701',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 418,
        borderRadius: 25,
    },
    pergunta: {
        color: '#fad6a2',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '10%'
    },
    texto: {
        color: '#fad6a2',
        fontWeight: 'bold',
        fontSize: 20
    },
    img: {
        width: 241.5,
        height: 182,
        resizeMode: 'contain',
        position: 'absolute',
        top: 8
    },
    botao: {
        backgroundColor: '#b43602',
        width: '70%',
        height: '15%',
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: '30%'
       
    },
    input: {
        backgroundColor: '#fad6a2',
        width: '70%',
        height: '15%',
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#4d3e37',
        textAlign: 'center'
    },
});