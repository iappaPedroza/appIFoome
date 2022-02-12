import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import logo from './assets/adaptive-icon.png'; 

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão de acesso à sua galeria solictado!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.basictext}>
          Encontre sua larica mais próxima.
        </Text>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Carrega uma foto</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcb00',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 10,
  },
  basictext: {
    color: '#c70039', 
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 20
  },
  logo: { 
    width: 305, 
    height: 250,
    borderRadius: 350
  },
  button: {
    backgroundColor: "#F70505",
    padding: 20,
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
