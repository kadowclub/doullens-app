import {ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import { ThemedButton } from "@/components/ThemedButton";

export default function SixteenthCentuery() {

    return (
        <ScrollView>
            <ThemedView style="titleContainer">
                <ThemedText>
                    Au XVII e siècle : de la citadelle à la caserne
                </ThemedText>
            </ThemedView>
            <ThemedText style="stepContainer">
                Le règne de Louis XIII (1610-1643) fut marqué par la construction de
                cinq ouvrages avancés appelés « demi-lunes » venant achever le
                perfectionnement du système défensif. Mais, par la suite, les conquêtes
                territoriales de Louis XIV (1643-1715) ayant repoussé la frontière vers le Nord-
                Est, Doullens perdit sa fonction stratégique. Dès lors, la citadelle devint place de
                garnison, à une époque où les armées royales avaient abandonné le logement des
                troupes chez l’habitant pour choisir le casernement.
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
