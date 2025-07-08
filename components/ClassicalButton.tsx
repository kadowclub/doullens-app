import React from 'react';

import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

type ClassicButtonProps = {
    label: string;
    onPress: (event: GestureResponderEvent) => void;
};

const ClassicButton: React.FC<ClassicButtonProps> = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

export default ClassicButton;



const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E5E5E5', // Light stone tone
        borderColor: '#999999',
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,

    },
    text: {
        color: '#333333',
        fontSize: 18,
        fontWeight: '600',
        // fontFamily: 'serif', // Use a custom font if you want a more authentic style
        textAlign: 'center',
    },
});