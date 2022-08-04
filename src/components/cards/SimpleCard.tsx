import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../../assets/colors';

const SimpleCard = ({pokemon}: any) => {
  const {name, id, sprites} = pokemon;
  const capName = name.charAt(0).toUpperCase() + name.slice(1);
  const fullId = id.toString().padStart(3, '0');

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.id, {color: COLORS.grass}]}>{`#${fullId}`}</Text>
      <Image
        style={styles.image}
        source={{
          uri: sprites.other['official-artwork'].front_default,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{capName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 124,
    height: 132,
    borderWidth: 2,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: COLORS.grass,
  },

  id: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 4,
  },

  image: {
    width: '100%',
    height: '75%',
    resizeMode: 'contain',
  },

  textContainer: {
    width: '100%',
    height: '25%',
    backgroundColor: COLORS.grass,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1,
    padding: 4,
  },
});

export default SimpleCard;
