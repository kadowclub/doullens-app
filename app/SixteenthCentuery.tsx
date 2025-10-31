import AudioButton from "@/components/AudioButton";
import ClassicalButton from "@/components/ClassicalButton";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useMemo } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SixteenthCentuery() {
  const { width: screenWidth, height: screenHeight } = useMemo(
    () => Dimensions.get('window'),
    []
  );

  const Navigation = useNavigation()


    return (
        <SafeAreaView style={styles.background} >
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View>
                        <Text style={styles.title}>
                            Le projet de Francois Ier
                        </Text>
                        <Text style={styles.date}>
                            1530
                        </Text>
                    </View>
                    <Text style={styles.paragraph}>
C’est le roi de France François Ier (1515-1547) qui conçut le projet de faire bâtir sur le flanc ouest de Doullens, une citadelle, c’est-à-dire une forteresse destinée à renforcer puissamment les défenses de la ville en cas d’offensive ennemie venant de l’Artois. Le modèle de ce type de place-forte était fourni par la nouvelle architecture militaire qui se développait en Italie : il était caractérisé par l’établissement d’une large enceinte munie de bastions, remplaçant les hauts murs et les tours massives de l’architecture médiévale.
Ces nouveautés étaient une réponse aux progrès de l’artillerie 
à poudre et des techniques de siège.
                        Le conflit opposant, au XV e siècle, la Maison royale de France et la

                        Maison ducale de Bourgogne transforma en forteresses de frontières les villes
                        placées sur une
                         ligne qui suivait la vallée de la Somme : Doullens étaient de
                        celles-là, de même qu’Abbeville, Amiens, Corbie et Péronne.
                    </Text>
                    <View style={styles.buttonRow}>
                        <ClassicalButton label={"Precedent"} onPress={() => {Navigation.navigate("FifteenthCentuery")}}></ClassicalButton>
                        <ClassicalButton label={"Suivant"} onPress={() => {Navigation.navigate("SixteenthCentuery")}}></ClassicalButton>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button} onPress={() => changePage("prev")}>
                        <Ionicons name="arrow-forward-outline" />
                        <Text style={styles.buttonText}>Previous</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => changePage("next")}>
                        <Text style={styles.buttonText}>Next</Text>
                        <Ionicons name="arrow-forward-outline" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <AudioButton label={""} onPress={() => {}}></AudioButton>
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
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2f2f2f",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    mapImage: {
    width: 2000,
    height: 1500,
  },
    buttonText: {
    color: "#fff",
    marginHorizontal: 5,
  },
    background: {
        backgroundColor: '#f2efe9',
        flex: 1,
    },
    scrollContainer: {
        paddingHorizontal: 20,
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
    image: {
        height: 400,
        width: "auto",
    }
});
