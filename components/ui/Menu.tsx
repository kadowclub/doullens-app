import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Menu({ close, onPressProps }: any) {

    return (
        <View style={close ? styles.menuClose : styles.menuButton}>
            <TouchableOpacity onPress={onPressProps}>
                <Ionicons name={close ? "close" : "menu"} size={48}></Ionicons>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    menuClose: {

        position: 'absolute',
        right: 10,
        top: 50,
        zIndex: 10,
        padding: 5,
    },
    menuButton: {
        position: 'absolute',
        left: 10,
        top: 50,
        zIndex: 3,
        padding: 5,
        backgroundColor: "#f2efe9",
        borderRadius: '50%',
        borderColor: '#ed6955',
        borderWidth: 3
    }
});