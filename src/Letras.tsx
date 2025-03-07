import { View, SafeAreaView, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

// Hago un array con todas las letras del abecedario y luego para crear cada tecla las mapeo
const conjuntoLetras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

type KeyboardProps = {
    // Arrays para ir guardando que letras se pueden utilizar o no
    letrasActivas: string[]
    letrasInactivas: string[]
    // Añadir la letra pulsada al array de inactivas
    ponerLetraAdivinada: (letter: string) => void
    // Esto será para desactivar los botones cuando se pierda/gane
    deshabilitadas?: boolean
}


const Letras = ({
    letrasActivas,
    letrasInactivas,
    ponerLetraAdivinada,
    deshabilitadas = false,
}: KeyboardProps) => {
    return (
        <View style={styles.gridContainer}>
            {conjuntoLetras.map((key) => {
                const activas = letrasActivas.includes(key);
                const inactivas = letrasInactivas.includes(key);

                // Definir el estilo del botón en función del estado
                const estiloBoton = [
                    styles.boton,
                    activas && styles.activa,
                    inactivas && styles.inactiva,
                    deshabilitadas && styles.deshabilitada,
                ];

                return (
                    // Ya no es un botón, tengo que ponerle lo que va en su interior aparte...
                    <TouchableOpacity
                        key={key} // La letra (valor), lo visible está en Text
                        onPress={() => ponerLetraAdivinada(key)} // Al pulsar, llamar método y ponerla en inactiva
                        style={estiloBoton} // Cambiar color según estado
                        disabled={inactivas || activas || deshabilitadas} // Poner estado según lo que ocurra
                    >
                        <Text style={styles.textoBoton}>{key}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

// --- Estilo ---
const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: 10,
    },

    // ESTILO PROMEDIO DE TODOS LOS BOTONES DE LETRA
    boton: {
        borderColor: 'black',
        borderWidth: 5,
        width: '30%',
        height: 0,
        paddingTop: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        cursor: 'pointer', // Esto es cambiar el cursor, nada más
    },

    textoBoton: {
        fontSize: 30,
        color: 'black',
    },

    // Estilos según el estado del botón
    activa: {
        backgroundColor: 'orange',
        color: 'white',
    },

    inactiva: {
        backgroundColor: 'lightorange',
    },

    deshabilitada: {
        backgroundColor: 'lightgray',
    },
});

export default Letras