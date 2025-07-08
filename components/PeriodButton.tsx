import React, {useEffect} from 'react';

import {TouchableOpacity, Text, StyleSheet, GestureResponderEvent, Pressable} from 'react-native';
import Animated, {AnimatableValue, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

type PeriodButtonProps = {
    delay: any;
    label: string;
    onPress: (event: GestureResponderEvent) => void;
};

const PeriodButton: React.FC<PeriodButtonProps> = ({ delay, label, onPress }) => {

    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.0);

    useEffect(() => {
        // @ts-ignore
        opacity.value = withTiming(1, {duration: 800, delay });
        // @ts-ignore
        scale.value = withTiming(1, {duration: 800, delay });
    }, []);

    const style = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
    }));

    return (
        <Animated.View style={[style, { margin: 10, width: "200", height: "100%" }]}>
            <Pressable style={styles.button} onPress={onPress} >
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        </Animated.View>
    );
};

export default PeriodButton;



const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ed6955'
    },
    text: {
        color: '#333333',
        fontSize: 18,
        fontWeight: '600',
        // fontFamily: 'serif', // Use a custom font if you want a more authentic style
        textAlign: 'center',
    },
});