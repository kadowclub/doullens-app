import AudioButton from "@/components/AudioButton";
import ClassicalButton from "@/components/ClassicalButton";
import { useNavigation } from "expo-router";
import { useMemo } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
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
                            Doullens, ville frontière
                        </Text>
                        <Text style={styles.date}>
                            XVe siècle
                        </Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/map.jpg')} style={styles.image} />
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
                    <Image source={require('../assets/images/soldier.jpg')} style={styles.image} />
                    <ClassicalButton label={"Next one"} onPress={() => {Navigation.navigate("SixteenthCentuery")}}></ClassicalButton>
                    <View style={styles.buttonRow}>
                        {/* <TouchableOpacity style={styles.button} onPress={() => changePage("prev")}>
                        <Ionicons name="arrow-forward-outline" />
                        <Text style={styles.buttonText}>Previous</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => changePage("next")}>
                        <Text style={styles.buttonText}>Next</Text>
                        <Ionicons name="arrow-forward-outline" />
                        </TouchableOpacity> */}
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