import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
export default function MapScreen() {

  const { width: screenWidth, height: screenHeight } = useMemo(
    () => Dimensions.get('window'),
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorer la citadelle</Text>

      <View style={styles.mapWrapper}>
        <ImageZoom
          cropWidth={screenWidth - 40} // padding adjustment
          cropHeight={screenHeight * 0.8}
          imageWidth={918}
          imageHeight={869}
          minScale={1}
          maxScale={10}
          enableCenterFocus={false}
        >
          <View>
            <Image
              source={require('../assets/images/citadelle_plan.png')}
              style={styles.mapImage}
              resizeMode="cover"
            />
            {/* Floating button */}
            <TouchableOpacity
              style={styles.mapButton}
              onPress={() => alert('Button Pressed!')}
            >
                <Ionicons name='volume-high-outline' size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mapButton1}
              onPress={() => alert('Button Pressed!')}
            >
                <Ionicons name='volume-high-outline' size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mapButton2}
              onPress={() => alert('Button Pressed!')}
            >
                <Ionicons name='volume-high-outline' size={24} />
            </TouchableOpacity>
          </View>
        </ImageZoom>
      </View>

      <Text style={styles.caption}>Pincez, zoomez et bouger la carte pour l'explorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2efe9',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  mapWrapper: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  mapImage: {
    width: 918,
    height: 869,
  },
  mapButton: {
    position: 'absolute',
    top: 140, // adjust position relative to map
    left: 300,
    backgroundColor: '#ff6b6b',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  mapButton1: {
    position: 'absolute',
    top: 500, // adjust position relative to map
    left: 780,
    backgroundColor: '#ff6b6b',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  mapButton2: {
    position: 'absolute',
    top: 420, // adjust position relative to map
    left: 280,
    backgroundColor: '#ff6b6b',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  caption: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
});