import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View  style={styles.container}>
      <Text style={styles.text3}>COLLEGE OF COMPUTING AND INFORMATION SCIENCES</Text>
      <Image source={require('@/assets/images/logoccis.jpg')} style={styles.image1}/>
      <Text style={styles.text1}>Developed by</Text>
      <Text style={styles.text2}>RAPHAEL RIO ARMAN Y QUIBRAL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    text1: {
      color: "black",
    },
    text2: {
      fontWeight: "bold",
      color: "black",
    },
    text3: {
      fontWeight: "bold",
      color: "black",
      fontSize: 20,
      textAlign: "center",
    },
    image1: {
      width: 300,
      height: 300,
      margin: 20,
      borderRadius: 20,
    },
    image2: {
      width: 230,
      height: 300,
      margin: 20,
      borderRadius: 20,
    },
    footerTxt: {
      fontSize: 40,
      fontWeight: "bold",
      position: "absolute",
      bottom: 1,
      color: "red",
    }
});
