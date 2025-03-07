import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, Keyboard } from 'react-native';
import Palabra from './Palabra';
import Letras from './Letras';

const Juego = () => {
  const [palabraAdivinar, setpalabraAdivinar] = useState('');
  const [letrasAdivinadas, setletrasAdivinadas] = useState<string[]>([]);

  const letrasIncorrectas = letrasAdivinadas.filter(
    letra => !palabraAdivinar.includes(letra)
  );

  const fracaso = letrasIncorrectas.length >= 6;
  const exito = palabraAdivinar
    .split('')
    .every(letra => letrasAdivinadas.includes(letra));

  const ponerLetraAdivinada = useCallback(
    (letra: string) => {
      if (letrasAdivinadas.includes(letra) || fracaso || exito) return;

      setletrasAdivinadas(letrasActuales => [...letrasActuales, letra]);
    },
    [letrasAdivinadas, exito, fracaso]
  );

  const fetchPalabra = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
      const data = await response.json();
      setpalabraAdivinar(data[0].toUpperCase());
    } catch (error) {
      console.error('Error obteniendo la palabra a adivinar:', error);
    }
  };

  useEffect(() => {
    fetchPalabra();
  }, []);

  const handleTextInputChange = (text: string) => {
    if (text.length === 1 && text.match(/^[A-Z]$/)) {
      ponerLetraAdivinada(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          {exito && '¡Victoria!'}
          {fracaso && 'Has perdido...'}
        </Text>
      </View>
      <Palabra
        letrasAdivinadas={letrasAdivinadas}
        palabra={palabraAdivinar}
        revelar={fracaso}
      />
      <Letras
        letrasActivas={letrasAdivinadas.filter(letra =>
          palabraAdivinar.includes(letra)
        )}
        letrasInactivas={letrasIncorrectas}
        ponerLetraAdivinada={ponerLetraAdivinada}
        deshabilitadas={exito || fracaso}
      />
      <TextInput
        style={styles.textInput}
        placeholder="... O escribe una letra"
        maxLength={1}
        autoCorrect={false}
        onChangeText={handleTextInputChange}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  messageContainer: {
    marginBottom: 20,
  },
  messageText: {
    fontSize: 24,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
  },
});

export default Juego;