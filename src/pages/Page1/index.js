import React, {useState} from "react";
import { Text, View, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native';

import { styles } from './styles.js';

export default function Page1({ navigation }) {

    const [quantidade, setQuantidade] = useState('')

    function enviarQuantidade() {
        if (quantidade == '' || quantidade < 1) {
            alert('Insira pelo menos 1 animal!')
            return
        }

        console.log(quantidade);
        navigation.navigate("Page2", {quantidade})
        setQuantidade('');
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.containermaior}>
                    <Image source={require("../../../assets/page1pic.jpg")} style={styles.img}/> 
                    <View style={styles.containermenor}>
                        <Text style={styles.pergunta}>Quantidade de animais</Text>
                        <TextInput keyboardType='numeric' placeholder='0' onChangeText={setQuantidade} value={quantidade} style={styles.input}></TextInput>
                        <TouchableOpacity style={styles.botao} onPress={enviarQuantidade}>
                            <Text style={styles.texto}>Prosseguir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback> 
    );
}