import { ScrollView, StyleSheet, Text, View } from "react-native";
export default function SixteenthCentuery() {

    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text>
                    Le renforcement de la défense (1599-1600)
                </Text>
            </View>
            <Text style={styles.stepContainer}>
                François I er et Henri II (1547-1559), son fils et successeur, s’intéressèrent
                de près à la construction de la citadelle de Doullens. Le roi Henri IV (1589-
                1610) demanda, pour sa part en 1599, à l’ingénieur militaire Jean Errard nommé
                « ingénieur ordinaire des fortifications des provinces de Picardie et Île-de-
                France », d’agrandir la forteresse et d’en améliorer le système défensif. C’est à
                la suite de cet ordre royal que fut construite une seconde enceinte bastionnée
                couvrant l’ouest de la citadelle. C’est dans le prolongement de ces travaux, au
                début du XVII e siècle, que fut bâti le logis du gouverneur.
            </Text>
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
