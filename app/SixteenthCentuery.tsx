import {ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import { ThemedButton } from "@/components/ThemedButton";

export default function SixteenthCentuery() {

    return (
        <ScrollView>
            <ThemedView style="titleContainer">
                <ThemedText>
                    Le renforcement de la défense (1599-1600)
                </ThemedText>
            </ThemedView>
            <ThemedText style="stepContainer">
                François I er et Henri II (1547-1559), son fils et successeur, s’intéressèrent
                de près à la construction de la citadelle de Doullens. Le roi Henri IV (1589-
                1610) demanda, pour sa part en 1599, à l’ingénieur militaire Jean Errard nommé
                « ingénieur ordinaire des fortifications des provinces de Picardie et Île-de-
                France », d’agrandir la forteresse et d’en améliorer le système défensif. C’est à
                la suite de cet ordre royal que fut construite une seconde enceinte bastionnée
                couvrant l’ouest de la citadelle. C’est dans le prolongement de ces travaux, au
                début du XVII e siècle, que fut bâti le logis du gouverneur.
            </ThemedText>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 25,
    },
    stepContainer: {
        gap: 16,
        padding: 8,
        margin: 8,

    },
});
