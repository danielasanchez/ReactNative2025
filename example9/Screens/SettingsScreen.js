import { StyleSheet, Text, View, Image } from 'react-native'

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
           <Image style={styles.logo} source={require('../assets/meme.jpg')} />
           <Text style={styles.paragraph}>Aqui portada</Text>
           <Text style={styles.paragraph}>Logo del Tec</Text>
           <Text style={styles.paragraph}>Nombres</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paragraph: {
        margin: 24,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 200,
        width: 300,
   }
});
  