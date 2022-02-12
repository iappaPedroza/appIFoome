import { Alert } from 'react-native';
export const buscaDados = async () => {

    try {

      const response = fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');

      const data = await response.json();

      return data;

    } catch (e) {

      Alert.alert('Erro consultada' + e);

    }

  }

  //   const buscaDados = async () => {



  //   }

  //   buscaDados()