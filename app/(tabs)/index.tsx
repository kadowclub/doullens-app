import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import ClassicalButton from "@/components/ClassicalButton";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const Navigation = useNavigation();

  return (
      <View style={styles.container} >

              <Image source={require('@/assets/images/citadelle-header.jpg')} style={{ width: '100%', height: '40%' }} />
              <View style={styles.textContainer}>
                   <View style={styles.titleContainer}>
                     <Text style={styles.title}>A LA DECOUVERTE DE LA CITADELLE DE DOULLENS</Text>
                   </View>
                     <View style={styles.stepContainer}>
                         <Text style={styles.subtitle}>
                             Notre application pour explorer la vieille citadelle
                         </Text>
                     </View>
                  <ClassicalButton onPress={() => {Navigation.navigate("PeriodScreen")}} label={"Frise Chronologique"} />
                  <ClassicalButton onPress={() => {}} label={"Exploration Thematique"} />
                  <ClassicalButton onPress={() => {}} label={"Se situer dans la Citadelle"} />

                  <View style={styles.menu}>
                      <Image source={require("@/assets/images/Screenshot 2025-06-10 235612.png")} style={{ width: 80, height: 80, alignSelf: "flex-end" }}></Image>
                  </View>
              </View>
      </View>
  );
}

const styles = StyleSheet.create({
titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
},
subtitle: {
    fontSize: 18,
    marginBottom: 6,
    textAlign: 'center',
},
container: {
    flex: 1,
    backgroundColor: '#f2efe9',
},
textContainer: {
    flex: 1,
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#ed6955',
    borderTopWidth: 10,
},
    logos: {
    flex: 1,
    },
    menu: {
    flex: 1,
    },


});
