import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import axios from 'axios';
import COLORS from './assets/colors';

const App = () => {
  const [pokemon, setPokemon] = React.useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then(res => {
      setPokemon(res.data);
    });
  }, []);

  const imageUrl: string =
    pokemon.sprites.other['official-artwork'].front_default;
  const type = pokemon.types[0].type.name;
  // console.log(Object.keys(pokemon.sprites.other));
  // console.log(JSON.stringify(pokemon.sprites.other, null, 2));
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.grass,
      }}>
      <Text style={{fontSize: 50}}>{pokemon.name}</Text>
      <Text>{type}</Text>

      <Image
        style={{height: 250, width: 200, resizeMode: 'contain'}}
        source={{uri: imageUrl}}
      />
    </SafeAreaView>
  );
};

export default App;
