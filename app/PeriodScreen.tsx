import PeriodButton from "@/components/PeriodButton";
import Ribbon from "@/components/Ribbon";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PeriodScreen() {
    const Navigation = useNavigation();
    const backgroundImage = require('../assets/images/stone-texture-background.jpg');

    return (
        <ScrollView style={{ backgroundColor: "#f2efe9"}}>
            <SafeAreaView>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Frise Historique</Text>
                </View>
                <Ribbon/>

                <View style={{ position: "absolute", top: 85, left: 80 }}>
                    <PeriodButton delay={500} label={"15eme Siecle"} onPress={() => {Navigation.navigate('FifteenthCentuery')}} />
                </View>

                <View style={{ position: "absolute", top: 260, left: 150 }}>
                    <PeriodButton delay={1000} label={"16eme Siecle"} onPress={() => {Navigation.navigate('PeriodScreen')}} />
                </View>

                <View style={{ position: "absolute", top: 440, left: 20 }}>
                    <PeriodButton delay={1500} label={"17eme Siecle"} onPress={() => {Navigation.navigate('PeriodScreen')}} />
                </View>

                <View style={{ position: "absolute", top: 630, left: 150 }}>
                    <PeriodButton delay={2000} label={"18eme Siecle"} onPress={() => {Navigation.navigate('PeriodScreen')}} />
                </View>

                <View style={{ position: "absolute", top: 805, left: 20 }}>
                    <PeriodButton delay={2500} label={"19eme Siecle"} onPress={() => {Navigation.navigate('PeriodScreen')}} />
                </View>

                <View style={{ position: "absolute", top: 975, left: 80 }}>
                    <PeriodButton delay={3000} label={"20eme Siecle"} onPress={() => {Navigation.navigate('PeriodScreen')}} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000', // Slightly off-white
        marginBottom: 6,
        marginLeft: 8,
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

    background: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    titleContainer: {
        backgroundColor: '#f2efe9',
        flex: 1,
        marginBottom: 20,
    },
});
