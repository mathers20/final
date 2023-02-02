import React from "react";
import{Button, ScrollView, Text,TextInput,View} from 'react-native';
import { styles } from "../theme/appTheme";


export const Profile = () => {
  return (
    <ScrollView style={{flex:1, backgroundColor:"Grey"}}>
        <View style={{paddingHorizontal: 30 }}>
          <TextInput
            style={styles.input}
            placeholder="Nombre Padre"
            placeholderTextColor={'grey'}
            autoCapitalize = 'none'
          />

          <TextInput
            style={styles.input}
            placeholder="Nombre Madre"
            placeholderTextColor={'grey'}
            autoCapitalize = 'none'
          />
        
          <Text>Padre vivo?</Text>
          <Text>Madre viva?</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre y apellido"
            placeholderTextColor={'grey'}
            autoCapitalize = 'none'
          />
          <Text>Fecha nac</Text>
          <TextInput
            style={styles.input}
            placeholder="Lugar de nacimiento"
            placeholderTextColor={'grey'}
            autoCapitalize = 'none'
          />
        </View>
        <View style={{paddingHorizontal: 30 , marginTop: 30}}>
          <Button
            title="Guardar"
          />
        </View>
    </ScrollView>
  );
};

