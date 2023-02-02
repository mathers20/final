import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const getUserDB = async() => {
    try {
        const users = await AsyncStorage.getItem('users')
        return users;   
    } catch (error) {
        return null;
    }
};

export const addUser = async (email, password) => {
    let users = JSON.parse(await getUserDB())
    if(users){
        users.push({email,password})
    }else{
        users = [{email, password}]
    }
    await AsyncStorage.setItem('users',JSON.stringify(users))
    Alert.alert("El usuario ha sido registrado con exito")
}

export const addUserDB = async(email: any, password: any) => {
    const users = JSON.parse(await getUserDB())
    if(users && users?.find((item: any) => item.email === email && item.password === password)){
        Alert.alert("El usuario ya existe en la base de datos")
    }else{
        addUser(email,password)
    }
}

export const clearAllStorage = () => {
    AsyncStorage.clear()
}
