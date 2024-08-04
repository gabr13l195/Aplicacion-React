import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

//Props: Comoponentes que reciben propiedades desde otro componente

interface Props {
    tittle: string;
    position?: string; //propiedad opcional
    setCounter: () => void; //propiedad funcion
}


export const ButtonComponent = ({ tittle, position, setCounter }: Props) => {
    // console.log(props.tittle);

    return (
        <TouchableOpacity
            onPress={setCounter}
            style={[styles.button,
            (position === 'bl')
                ? styles.left
                : styles.right
            ]}>
            <Text
                style={styles.buttonText}>{tittle}
            </Text>
        </TouchableOpacity>
    )
}

//Aqui se gestionan los estilos

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: 0,
        // right: 0
    },
    right: {
        right: 10,
        backgroundColor: '#99eb5c'
    },

    left: {
        left: 10,
        backgroundColor: '#e3806b'
    },




    // button2: {
    //     backgroundColor: '#e3806b',
    //     borderRadius: 100,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: 70,
    //     height: 70,
    //     position: 'absolute',
    //     bottom: 0,
    // },
    buttonText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    }

})
