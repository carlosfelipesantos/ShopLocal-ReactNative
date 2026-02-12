import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

     
      <Image
        source={require('./assets/LogoOficial.png')}
        style={styles.logo}
        resizeMode="contain"
      />

     
      <Text style={styles.texto}>
        Meu primeiro aplicativo mobile!
      </Text>

      <StatusBar style="light" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#116936',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 440,   
    height: 440, 
    marginBottom: 20,
  },

  texto: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
