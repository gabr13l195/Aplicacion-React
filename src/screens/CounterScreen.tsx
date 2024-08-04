import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, TouchableOpacityComponent, View, StyleSheet } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';

export const CounterScreen = () => {

    const [counter, setCounter] = useState<number>(50)

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Contador: {counter}</Text>
            {/* <TouchableOpacity
                onPress={() => setCounter(counter + 10)}
                style={styles.button1}>
                <Text
                    style={styles.buttonText}>+
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setCounter(counter - 10)}
                style={styles.button2}>
                <Text
                    style={styles.buttonText}>-
                </Text>
            </TouchableOpacity> */}
            <ButtonComponent 
                tittle='+' 
                setCounter={() => setCounter(counter + 10)}/>
            <ButtonComponent 
                tittle='-' 
                setCounter={() => setCounter(counter - 10)}
                position='bl'/>
        </View>
    )
}

//Aqui se mandan los estilos
const styles = StyleSheet.create({ //Esta constante hace los estilos
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    tittle: {
        fontSize: 30,
        textAlign: 'center',
        position: 'relative',
    },
})

