import { View, TouchableOpacity, TextInput, Text, Keyboard} from "react-native";
import React, { useState } from 'react';
import { styles } from './styles.js';

let i = 0
let dataArray = []
let area_boi = 0
let area_total = 0

export default function Page2({ navigation, route }) {

    const { quantidade } = route.params;

    const [peso, setPesokg] = useState('');
    const [possuiChifres, setIsChecked] = useState(false);
    const toggleCheck = () => {
      setIsChecked(!possuiChifres);
    };

    function enviarDados() {
      if (peso == '' || peso < 1) {
        alert('Insira o peso do animal!')
        return
      }

      const data = {possuiChifres, peso}
      dataArray.push(data)
      console.log(dataArray);

      i++

      if(possuiChifres == true) {
        toggleCheck()
      }

      setPesokg('');
      area_total = 0;
      
      if(i == quantidade) { 
        //Calculos
        for(let boi = 0; boi<quantidade; boi++) {

          if(dataArray[boi].possuiChifres == true) {
            area_boi = 0.021 * dataArray[boi].peso ** 0.67 * 1.07
          }
          else {
            area_boi = 0.021 * dataArray[boi].peso ** 0.67
          }
          area_total += area_boi
        }

        console.log(area_total)
        dataArray = [];
        i = 0;
        navigation.navigate("Page3", {area_total})
      }
    }

    return(
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => Keyboard.dismiss()}> 
          <Text style={styles.pergunta}>Informe o peso do {i+1}º boi</Text>

          <View style={styles.form}>

            <TextInput keyboardType='numeric' placeholder='kg' style={styles.input} onChangeText={setPesokg} value={peso}></TextInput>
             
            {/*    Checkbox    */}
            <View style={styles.checkcontainer}>
              <TouchableOpacity style={styles.check} onPress={toggleCheck}><View style={[styles.checkicon, possuiChifres ? styles.visible : styles.hidden]}></View></TouchableOpacity>
              <Text style={styles.checktext}>Possui chifres?</Text>
            </View>
    
            {/*    Adicionar    */}
            <TouchableOpacity style={styles.botao} onPress={enviarDados}>
              <Text style={styles.texto}>Adicionar</Text>
            </TouchableOpacity>

          </View>            
        </TouchableOpacity>
    );
}