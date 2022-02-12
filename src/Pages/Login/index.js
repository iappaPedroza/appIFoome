import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';
import Button from '../../Components/Button';
import foto from '../../Assets/Img/icon.png';

export default function Login({navigation}) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Pagina de Login</Text>
          <Image source={foto} />
          <Text>Dados</Text>
          
        </View>
        <ButtonContainer>
          <Button text="Meus Dados" theme="primary" />
          <Button text="Sair" onPress={() => navigation.navigate('Home')}  />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}