import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function SixteenthCentuery() {

    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text>
                    Le projet de François I er (1530)
                </Text>
                <Text style={styles.stepContainer}>
                    Le conflit opposant, au XV e siècle, la Maison royale de France et la
                    Maison ducale de Bourgogne transforma en forteresses de frontières les villes
                    placées sur une ligne qui suivait la vallée de la Somme : Doullens étaient de
                    celles-là, de même qu’Abbeville, Amiens, Corbie et Péronne. Lorsqu’après la
                    mort de Charles le Téméraire, en 1477, sa fille unique Marie de Bourgogne
                    épousa l’archiduc Maximilien I er de Habsbourg, la Picardie devint un lieu
                    d’affrontement entre la Maison de France et la Maison d’Autriche, et Doullens,
                    place de la ligne défensive française située la plus au nord revêtit une
                    importance stratégique croissante.
                </Text>
            </View>
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
