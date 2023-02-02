import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { styles } from '../theme/appTheme';
import{Button, ScrollView, Text,TextInput,View} from 'react-native';

interface Props extends StackScreenProps<any, any> {};


export const Login = ({navigation}:Props) => {
  return (
    <ScrollView style={{flex:1, backgroundColor:"Grey"}}>
		<View >
			<View style={{paddingHorizontal: 30 }}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					placeholderTextColor={'grey'}
					autoCapitalize = 'none'
				/>

				<TextInput
					style={styles.input}
					placeholder="Contraseña"
					placeholderTextColor={'grey'}
					autoCapitalize = 'none'
				/>
        </View>
        <View style ={styles.globalMargin}>
          <View>
            <Text>FALTA CHECKBOX</Text>
          </View>
		
			<Button
				title="Login"
				onPress={() => navigation.navigate('Profile')}
				/>
    	</View>
      </View>
	</ScrollView>
    
  );
};

