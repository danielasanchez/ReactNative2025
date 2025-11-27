import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
    return (
        <View style={styles.container}>

            <Text style={styles.paragraph}>Aqui info de la API</Text>
  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    paragraph: {
        margin: 24,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});