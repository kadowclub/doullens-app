import { Dimensions, StyleSheet, View } from "react-native";

export function Drawer() {

    return (
        <View style={styles.drawer}>
        </View>
    )
}



const SCREEN_WIDTH = Dimensions.get('window').width;
const DRAWER_WIDTH = SCREEN_WIDTH * 0.75;

const styles = StyleSheet.create({
    drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: DRAWER_WIDTH,
    height: '100%',
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
