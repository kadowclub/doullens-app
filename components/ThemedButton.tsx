import {Button, ButtonProps} from "react-native";

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedButtonProps = ButtonProps & {
    lightColor?: string;
    darkColor?: string;

}

export function ThemedButton({color, lightColor, darkColor, ...otherProps }: ThemedButtonProps) {
    const backgroundColor = '#333333';

    return <Button color={backgroundColor} {...otherProps} />;
}