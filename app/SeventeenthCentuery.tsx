import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function SixteenthCentuery() {

    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text>
                    Au XVII e siècle : de la citadelle à la caserne
                </Text>
            </View>
            <Text style={styles.stepContainer}>
                Le règne de Louis XIII (1610-1643) fut marqué par la construction de
                cinq ouvrages avancés appelés « demi-lunes » venant achever le
                perfectionnement du système défensif. Mais, par la suite, les conquêtes
                territoriales de Louis XIV (1643-1715) ayant repoussé la frontière vers le Nord-
                Est, Doullens perdit sa fonction stratégique. Dès lors, la citadelle devint place de
                garnison, à une époque où les armées royales avaient abandonné le logement des
                troupes chez l’habitant pour choisir le casernement.
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
