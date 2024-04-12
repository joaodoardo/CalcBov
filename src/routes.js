//Importação das funcionalidades de navegação 
import { createStackNavigator } from '@react-navigation/stack'

//Importação das páginas que serão referenciadas nas rotas 
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

const Stack = createStackNavigator(); // Cria uma instância de StackNavigator

// Componente responsável por definir as rotas e configurações de navegação
export default function Routes() {
    return(
        <Stack.Navigator screenOptions={{gestureEnabled: false,}}>
            <Stack.Screen name="Page1" component={Page1} options={{headerShown: false}}/>
            <Stack.Screen name="Page2" component={Page2} options={{headerShown: false}}/>
            <Stack.Screen name="Page3" component={Page3} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

/*A Stack Navigation, ou Navegação em Pilha, é um tipo de sistema de navegação utilizado em aplicativos móveis para 
organizar e gerenciar diferentes telas ou páginas. Funciona de maneira semelhante a uma pilha de cartas, 
onde as telas são empilhadas uma sobre a outra conforme o usuário navega pelo aplicativo. */