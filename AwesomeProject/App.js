import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import HomeScreen from './components/Homescreen';
import AboutScreen from './components/Aboutscreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Gerar codigo inicial automatico em page nova: rnfes, react native component with styles

//jogo da velha js: palavra, pega tamanho da palavra, substitui por traços: função q soma baseado
//no tamanho da palavra, array com letras dessa palavra em cada posição com traços no lugar das letras,
//se o cara acertou a letra, pega a posição dessa letra na palavra, e substitui os traços por essa letra
//lê um array com letras preenchidas e um array com traços
// function tracos(palavra){palavraEmTraco = ''; for(let i = 0; i < palavra.length; i++){(i+1 == palavra.length)? palavraEmTraco += '_' : palavraEmTraco += '_ '} return palavraEmTraco}
// for(let i = 0; i < 'arara'.length; i++){if('arara'[i] == 'a'){completandoPalavra += 'a'}else{completandoPalavra += '_'}}
//saida: 'a_a_a'