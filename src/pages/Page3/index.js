import React from "react";
import { Text, View, TouchableOpacity} from 'react-native';

import { styles } from './styles.js';

export default function Page3({ navigation, route }) {

    const { area_total } = route.params;

    function reiniciar() {
        navigation.navigate("Page1")
    }

    return(
        <View style={styles.container}>
          <View style={styles.containermenor}>
            <Text style={styles.texto}>{area_total.toFixed(2)}m²</Text>
            <TouchableOpacity style={styles.botao} onPress={reiniciar}><Text style={styles.textobtn}>Reiniciar</Text></TouchableOpacity>
          </View>
        </View>
    );
}