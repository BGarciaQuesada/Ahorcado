import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

// Hago un array con todas las letras del abecedario y luego para crear cada tecla las mapeo
const conjuntoLetras = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

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
                    <View style={styles.view} key={key}>
                        <TouchableOpacity
                            onPress={() => ponerLetraAdivinada(key)} // Al pulsar, llamar método y ponerla en inactiva
                            style={estiloBoton} // Cambiar color según estado
                            disabled={inactivas || activas || deshabilitadas} // Poner estado según lo que ocurra
                        >
                            <Text style={styles.textoBoton}>{key}</Text>
                        </TouchableOpacity>
                    </View>
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
        width: '100%', // Asegura que ocupe todo el ancho disponible
        maxWidth: 500, // Limita el ancho máximo del contenedor para que no se sobrepase
        alignItems: 'center',
        paddingVertical: 10, 
    },

    // ESTILO PROMEDIO DE TODOS LOS BOTONES DE LETRA
    boton: {
        borderColor: 'black',
        borderWidth: 2,
        width: 40, // Ancho fijo para evitar que se desborde
        height: 40, // Alto fijo para mantener las proporciones
        margin: 5, // Espacio entre botones
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },

    view: {
        height: 50, // Altura del contenedor para cada botón
        width: 50, // Ancho del contenedor para cada botón
    },

    textoBoton: {
        fontSize: 20,
        color: 'black',
    },

    // Estilos según el estado del botón
    activa: {
        backgroundColor: 'lightgreen',
        color: 'white',
    },

    inactiva: {
        backgroundColor: 'lightcoral',
    },

    deshabilitada: {
        backgroundColor: 'lightgray',
    },
});

export default Letras;
