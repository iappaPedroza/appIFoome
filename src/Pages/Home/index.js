import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';
import banner from '../../Assets/Img/banner.png';
import Button from '../../Components/Button';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Sua fome não espera! Peça agora!</Text>
          <Image source={banner} />
          <Text>Encontre sua larica mais próxima.</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Permitir Localização</Text>
          <Text>
            Imagens gentilmente cedidas por freepik.com
          </Text>
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={() => navigation.navigate('Main')} />
          <Button text="ENTRAR" theme="primary" />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
