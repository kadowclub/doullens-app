import {Dimensions, ScrollView, Text, StyleSheet, TouchableOpacity, View, ImageBackground} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import { ThemedButton } from "@/components/ThemedButton";
import {SafeAreaView} from "react-native-safe-area-context";
import ClassicalButton from "@/components/ClassicalButton";

export default function SixteenthCentuery() {

    return (
        <SafeAreaView style={styles.background} >
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View>
                        <Text style={styles.title}>
                            Doullens, ville frontière
                        </Text>
                        <Text style={styles.date}>
                            XVe siècle
                        </Text>
                    </View>
                    <Text style={styles.paragraph}>
                        Le conflit opposant, au XV e siècle, la Maison royale de France et la
                        Maison ducale de Bourgogne transforma en forteresses de frontières les villes
                        placées sur une ligne qui suivait la vallée de la Somme : Doullens étaient de
                        celles-là, de même qu’Abbeville, Amiens, Corbie et Péronne.
                    </Text>
                    <Text style={styles.paragraph} >
                            Lorsqu’après la
                        mort de Charles le Téméraire, en 1477, sa fille unique Marie de Bourgogne
                        épousa l’archiduc Maximilien I er de Habsbourg, la Picardie devint un lieu
                        d’affrontement entre la Maison de France et la Maison d’Autriche, et Doullens,
                        place de la ligne défensive française située la plus au nord revêtit une
                        importance stratégique croissante.
                    </Text>
                    <ClassicalButton label={"Next one"} onPress={() => {}}></ClassicalButton>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    background: {
        backgroundColor: '#f2efe9',
        flex: 1,
        marginBottom: 20,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,

        borderStyle: 'solid',
        borderColor: '#ed6955',
        borderTopWidth: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    date: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 18,
        lineHeight: 30,
        textAlign: 'justify',
        marginBottom: 18,
        letterSpacing: 0.3,
    },
});