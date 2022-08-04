import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import SimpleCard from '../components/cards/SimpleCard';

const Home = () => {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    await axios.get('https://pokeapi.co/api/v2/pokemon/1/').then(res => {
      setPokemon(res.data);
      setIsLoading(false);
    });
  };

  //   console.log(JSON.stringify(pokemon, null, 2));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    isLoading && (
      <View style={sytles.container}>
        <SimpleCard pokemon={pokemon} />
        <SimpleCard pokemon={pokemon} />
        <SimpleCard pokemon={pokemon} />
      </View>
    )
  );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    top: 10,
  },
});

export default Home;
