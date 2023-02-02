import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { styles } from '../theme/appTheme';
import {Alert, Button, ScrollView, Text,TextInput,View} from 'react-native';

interface Props extends StackScreenProps<any, any> {}


export const Login = ({navigation}:Props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = async () => {
		try {
			const fetchApiCall = await fetch('url');
			const response = fetchApiCall.json();
			console.log(response);
			navigation.navigate('Profile');
		} catch (error) {
			Alert.alert('Error','Ha habido un error');
		}
	};

  return (
    <ScrollView style={{flex:1, backgroundColor:'Grey'}}>
		<View >
			<View style={{paddingHorizontal: 30 }}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					placeholderTextColor={'grey'}
					autoCapitalize = "none"
					value={email}
					onChangeText={e => setEmail(e)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Contraseña"
					placeholderTextColor={'grey'}
					autoCapitalize = "none"
					value={password}
					onChangeText={e => setPassword(e)}
				/>
        </View>
        <View style ={styles.globalMargin}>
          <View>
            <Text>FALTA CHECKBOX</Text>
          </View>

			<Button
				title="Login"
				onPress={login}
				/>
    	</View>
      </View>
	</ScrollView>

  );
};

