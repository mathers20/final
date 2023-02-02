import React from "react";
import{Button, ScrollView, Text,TextInput,View} from 'react-native';
import { styles } from "../theme/appTheme";


export const Detalle = () => {
  return (
    <ScrollView style={{flex:1, backgroundColor:"Grey"}}>
        <View>
          <Text style = {styles.textTitle}>Detalle</Text>
        </View>

    </ScrollView>
  );
};

