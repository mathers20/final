import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image,ScrollView, TouchableOpacity, FlatList, } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import { styles } from "../theme/appTheme";
import { pedidos } from "../../pedidos";

   /*  useEffect(()=>{
      // getMisPedidos()
    }, []) */  
    //const navig = useNavigation();

export const Profile = (props) => {
  const [miPedidos, setMisPedidos] = useState([])
  const getPedidos = () => {
    return pedidos.filter((item) => item.user === props.route.params.email)
  }

  useEffect(() => {
    setMisPedidos(getPedidos())
  }, [])

  return (
    <ScrollView style={{flex:1, backgroundColor:"Grey"}}>
        <View>
          <Text>USUARIO: {props.route.params.email}</Text>
        </View>
        <FlatList 
          data={miPedidos}
          keyExtractor = {(_item,_index: any) => _index}
          renderItem={({item} : any)=>(
          <TouchableOpacity>
            <View style = {{flex: 1.5, backgroundColor:"red", marginVertical:10}}>
            <Text>{item.numeroDePedido}</Text>
            <Text>{item.fecha}</Text>
            <Text>{item.productos.map((item) => item)}</Text>
            </View>
          </TouchableOpacity>
          )}
          />

    </ScrollView>
  );
};

