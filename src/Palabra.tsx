import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

type PalabraProps = {
    letrasAdivinadas: string[]
    palabra: string
    revelar?: boolean
}

const Palabra = ({
    letrasAdivinadas,
    palabra,
    revelar = false,
}: PalabraProps) => {
    return (
        <SafeAreaView>
            <View style={estilosPalabra.contenedor}>
                {palabra.split("").map((letra, index) => (
                    <View style={estilosPalabra.lineaLetra} key={index}>
                        <Text style={estilosPalabra.estiloLetra(letra, letrasAdivinadas, revelar)}>
                            {letrasAdivinadas.includes(letra) || revelar ? letra : "_"}
                        </Text>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    )
}

const estilosPalabra = {
    contenedor: {
        flexDirection: "row",
        gap: 7,
        fontSize: 100,
        fontWeight: "bold",
        fontFamily: "monospace",
    },

    lineaLetra: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },

    estiloLetra: (letra: string, letrasAdivinadas: string[], revelar: boolean) => ({
        color: !letrasAdivinadas.includes(letra) && revelar ? "red" : "black",
    }),
}

export default Palabra
