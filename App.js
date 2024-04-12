// Importação de recursos necessárias para o funcionamento do aplicativo React Native
import 'react-native-gesture-handler' // Importa o manipulador de gestos para lidar com gestos de toque na tela
import { NavigationContainer } from '@react-navigation/native' // Importa o contêiner de navegação para gerenciar a navegação entre telas
import { StatusBar } from "expo-status-bar"; // Importa o componente StatusBar do Expo para controlar a barra de status do aplicativo
import { useEffect } from 'react'; // Importa o hook useEffect para lidar com efeitos colaterais em componentes funcionais
import { BackHandler } from 'react-native'; // Importa o componente BackHandler do React Native para lidar com eventos de botão "voltar"

//Importação do componente de rotas
import Routes from './src/routes'

// Componente principal do aplicativo
export default function App() {

  // Impede o usuario de retroceder no app usando o botão de voltar do android
  useEffect(() => {
    BackHandler.addEventListener('backPress', () => true)
    return () => BackHandler.removeEventListener('backPress', () => true)
  }, [])
  
  // Retorno do componente principal onde define o comportamento da barra de status com automatico em todo app e referencia o componente de rotas
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Routes /> 
    </NavigationContainer>
  );
}


