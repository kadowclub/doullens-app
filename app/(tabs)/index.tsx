import { Image } from 'expo-image';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import ClassicalButton from "@/components/ClassicalButton";
import MenuButton from '@/components/MenuButton';
import Menu from '@/components/ui/Menu';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


const SCREEN_WIDTH = Dimensions.get('window').width;
const DRAWER_WIDTH = SCREEN_WIDTH * 0.75;


function Drawer() {

    return (
        <View style={styles.drawer}>
        </View>
    )
}


export default function HomeScreen() {
    const Navigation = useNavigation();

    const translateX = useSharedValue(-DRAWER_WIDTH);

    const openDrawer = () => {
        translateX.value = withTiming(0, { duration: 300 });
    };
    const closeDrawer = () => {
        translateX.value = withTiming(-DRAWER_WIDTH, { duration: 300 });
    };
    const drawerStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));


  return (
      <View style={styles.container} >
        <Animated.View style={[styles.drawer, drawerStyle]}>
            <Menu close={1} onPressProps={closeDrawer}></Menu>
            <View style={styles.drawerContainer}>
                <MenuButton label={"Programmes de la Citadelle"} onPress={() => {}}></MenuButton>
                <MenuButton label={"Langues"} onPress={() => {}}></MenuButton>
                <MenuButton label={"Contacts"} onPress={() => {}}></MenuButton>
                <MenuButton label={"Mentions Legales"} onPress={() => {}}></MenuButton>
                <MenuButton label={"Options"} onPress={() => {}}></MenuButton>
            </View>
        </Animated.View>
        <Menu close={0} onPressProps={openDrawer}></Menu>

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

    drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: DRAWER_WIDTH,
    height: '100%',
    borderBottomRightRadius: '60%',
    backgroundColor: '#f08777',
    padding: 20,
    zIndex: 5,
    },

    drawerContainer: {
        flex: 1,
        zIndex: 6,
        elevation: 5,
        paddingTop: 75,
    }

});
