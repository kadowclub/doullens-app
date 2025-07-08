import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
} from 'react-native-reanimated';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function SwirlingRibbonBackground() {
    const pathLength = 3000; // Overestimated to ensure full draw coverage
    const dashOffset = useSharedValue(pathLength);

    useEffect(() => {
        dashOffset.value = withTiming(0, {
            duration: 5000,
        });
    }, []);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: dashOffset.value,
    }));

    // Generate 5 full-width swirls vertically
    const centerX = screenWidth / 2;
    const left = 20;
    const right = screenWidth - 20;
    const heightPerSwirl = screenHeight / 5;

    const pathData = `
    M ${centerX} 0
    C ${right} ${heightPerSwirl * 0.25}, ${left} ${heightPerSwirl * 0.75}, ${centerX} ${heightPerSwirl}
    C ${left} ${heightPerSwirl * 1.25}, ${right} ${heightPerSwirl * 1.75}, ${centerX} ${heightPerSwirl * 2}
    C ${right} ${heightPerSwirl * 2.25}, ${left} ${heightPerSwirl * 2.75}, ${centerX} ${heightPerSwirl * 3}
    C ${left} ${heightPerSwirl * 3.25}, ${right} ${heightPerSwirl * 3.75}, ${centerX} ${heightPerSwirl * 4}
    C ${right} ${heightPerSwirl * 4.25}, ${left} ${heightPerSwirl * 4.75}, ${centerX} ${heightPerSwirl * 5}
  `;

    return (
        <View>
            <Svg width={screenWidth} height={screenHeight} viewBox={`0 0 ${screenWidth} ${screenHeight}`}>
                <AnimatedPath
                    d={pathData}
                    stroke="#ed6955"
                    strokeWidth={6}
                    fill="none"
                    strokeDasharray={pathLength}
                    animatedProps={animatedProps}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
}