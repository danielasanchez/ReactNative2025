import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  const [cargado, setCargado]=useState(false);

  useEffect(()=>{
    //la funcion se ejecuta despues de 5 segundos
    //cambiando el state cargado a true
    const timer = setTimeout(()=>{
                    setCargado(true)
                  },5000)
             
    return ()=>clearTimeout(timer)
  },[]);

  return (
    <View style={styles.container}>
      { 
        cargado === false  
        ?
        <ActivityIndicator size="large" color="#0059ffff" />
        :
        <HomeScreen/> 
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
