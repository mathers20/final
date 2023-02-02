import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image,ScrollView, TouchableOpacity, FlatList, } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import { styles } from "../theme/appTheme";

    useEffect(()=>{
      getMisPedidos()
    }, [])  
    const navig = useNavigation();

export const Profile = () => {
  return (
    <ScrollView style={{flex:1, backgroundColor:"Grey"}}>
        <View>
          <Text style = {styles.textTitle}>USUARIO: XXXXX</Text>
        </View>
        <FlatList 
          data={pedidos}
          keyExtractor = {(_item,_index: any) => _index}
          renderItem={({item} : any)=>(
          <TouchableOpacity onPress={() => navig.dispatch(StackActions.push('ShopItem', { shop: item }))}>
            <View style = {{flex: 1.5}}>
              <Text style = {styles.textNombre}>{item.name}</Text>
            </View>
          </TouchableOpacity>
          )}
          />

    </ScrollView>
  );
};

