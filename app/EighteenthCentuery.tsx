import { Image } from "expo-image";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EighteenthCentuery() {

    const backgroundImage = require('../assets/images/stone-texture-background.jpg');
    return (
        <ImageBackground source={backgroundImage} resizeMode={"repeat"} style={styles.background}>
            <SafeAreaView style={styles.safeArea} >
                <View style={styles.container}>
                    <ScrollView style={styles.scrollContainer}>
                        <View>
                            <Text style={styles.title}>
                                De la caserne au lieu de détention
                            </Text>
                            <Text style={styles.date}>
                                XVIII e -XIX e siècle
                            </Text>
                        </View>
                        <Text style={styles.paragraph}>
                            L’affectation de la citadelle, qui ne perdit pas totalement son rôle militaire,
                            connut des transformations dans le cours du XVIII e siècle. Le lieu, avec son
                            enceinte et ses issues faciles à surveiller, devint un lieu de détention, certains
                            casernements étant convertis en prison. La citadelle servit de prison d’État sous
                            la Régence lorsqu’en 1719-1720, Louis-Auguste de Bourbon, duc du Maine, y
                            fut emprisonné pour sa participation à un complot. Par la suite, sous la Terreur,
                            on y incarcéra des « suspects » attendant de monter à la guillotine.
                        </Text>
                        <Text style={styles.paragraph} >
                            Enfin, au
                            XIX e siècle, sous la Seconde République et le Second Empire, y furent détenus
                            des prisonniers politiques dont les plus célèbres furent Blanqui, surnommé
                            l’Enfermé, Raspail, Barbès et Proudhon. La prison d’État fut par la suite
                            transformée en prison pour femmes.
                        </Text>

                        <View>
                            <Image source={require('../assets/images/map.jpg')} style={styles.image} />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ImageBackground>
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
        flex: 1,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F5F5F5', // Slightly off-white
        marginBottom: 6,
    },
    date: {
        fontSize: 16,
        color: '#AAAAAA',
        fontStyle: 'italic',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 18,
        color: '#E0E0E0',
        lineHeight: 30,
        textAlign: 'justify',
        marginBottom: 18,
        letterSpacing: 0.3,
    },
    image: {
       width: 380,
       height: 300,
        marginBottom: 50,
       borderRadius: 20,
    },
});
