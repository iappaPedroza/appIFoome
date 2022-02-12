import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';
import Button from '../../Components/Button';
import foto from '../../Assets/Img/icon.png';

export default function Perfil({navigation}) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Perfil</Text>
          <Image source={foto} />
          <Text>Dados</Text>
          
        </View>
        <ButtonContainer>
          <Button text="Pedidos"  />
          <Button text="Sair" theme="primary" onPress={() => navigation.navigate('Home')}  />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}