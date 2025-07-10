import React from 'react';

import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ClassicButtonProps = {
    label: string;
    onPress: (event: GestureResponderEvent) => void;
};

const MenuButton: React.FC<ClassicButtonProps> = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

export default MenuButton;



const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        marginTop: 30,

    },
    text: {
        color: '#333333',
        fontSize: 18,
        fontWeight: '600',
        // fontFamily: 'serif', // Use a custom font if you want a more authentic style
        textAlign: 'center',
    },
});