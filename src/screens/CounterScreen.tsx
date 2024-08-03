import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'

export const CounterScreen = () => {

    const [counter, setCounter] = useState<number>(50)

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                position: 'relative',
            }}>Contador: {counter}</Text>
            <Button
                title='+'
                onPress={() => setCounter(counter + 10)}
            />
            <TouchableOpacity
                onPress={() => setCounter(counter - 10)}
                style={{
                    backgroundColor: 'pink',
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50
                }}>
                    <Text>-</Text>
            </TouchableOpacity>
        </View>
    )
}
