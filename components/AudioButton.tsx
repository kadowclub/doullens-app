import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';

type ClassicButtonProps = {
    label: string;
    onPress: (event: GestureResponderEvent) => void;
};

const ClassicButton: React.FC<ClassicButtonProps> = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
            <Ionicons name='volume-high-outline' size={48} />
        </TouchableOpacity>
    );
};

export default ClassicButton;



const styles = StyleSheet.create({
    button: {
        position: "absolute",
        right: 10,
        bottom: 60,
        borderRadius: "50%",
        backgroundColor: '#E5E5E5', // Light stone tone
        borderColor: '#999999',
        padding: 20,
        borderWidth: 1,
    },
    text: {
        color: '#333333',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});