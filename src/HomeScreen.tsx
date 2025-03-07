import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/LogoAhorcado.png')}
      /> 
      <Button 
        title="Nueva partida" 
        onPress={() => navigation.navigate('Juego')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default HomeScreen;
