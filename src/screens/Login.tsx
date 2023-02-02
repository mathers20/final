import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { styles } from '../theme/appTheme';
import {Alert, Button, ScrollView, Text,TextInput,View} from 'react-native';
import { addUserDB, clearAllStorage, getUserDB } from '../helpes';
import { useNetInfo } from '@react-native-community/netinfo';

interface Props extends StackScreenProps<any, any> {}


export const Login = ({navigation}:Props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const netinfo = useNetInfo()
	const login = async () => {
		const dataUsers = JSON.parse(await getUserDB());
		if (dataUsers && dataUsers.find((item: any) => item.email === email && item.password === password)){
			navigation.navigate('Profile');
			setEmail("")
			setPassword("")
		} else {
			Alert.alert('Error de credenciales');
		}
	};

	const signUp = () => {
		if(email.length > 0 && password.length> 0){
			addUserDB(email, password);
			setEmail("")
			setPassword("")
		}else{
			Alert.alert("Completa todos los campos")
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

		  <Button
				title="Aceptar"
				onPress={login}
				/>
				<Button
				title="Registro"
				onPress={signUp}
				/>
    	</View>
		<View>
		<Text>{netinfo.isConnected ? "Estas conectado a internet" : "No tienes conexion a internet"}</Text>
		<Text>Estas conectado mediante {netinfo.type}</Text>
		</View>
      </View>
	</ScrollView>

  );
};

