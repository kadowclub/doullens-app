import {ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import { ThemedButton } from "@/components/ThemedButton";

export default function SixteenthCentuery() {

    return (
        <ScrollView>
            <ThemedView style="titleContainer">
                <ThemedText>
                    Doullens, témoin de l’évolution des fortifications
                </ThemedText>
                <ThemedText style="stepContainer">
                    La haute enceinte circulaire qui dominait l'architecture militaire au Moyen
                    Âge s'avéra vulnérable aux tirs de canon dès lors que se développa la puissance
                    de l’artillerie à poudre. A la fin du XV e siècle, les principes qui régissaient
                    jusque-là la construction des fortifications furent abandonnés : on construisit des
                    remparts moins hauts et plus épais que par le passé, avec des matériaux
                    composites, mêlant remblais en terre et revêtement en maçonnerie, en partie en
                    brique. Une autre innovation fut le bastion, avancée de la muraille dotée de
                    parements obliques permettant de faire dévier les projectiles. Les nouveaux
                    principes de fortifications apparurent d’abord en Italie avant de se diffuser au
                    nord des Alpes à partir des années 1530-1540, Doullens étant l’un des exemples
                    les plus précoces de leur adoption en France.
                </ThemedText>
            </ThemedView>
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
