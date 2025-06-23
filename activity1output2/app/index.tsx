import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View  style={styles.container}>
      <Image source={require('@/assets/images/mark.png')} style={styles.image1}/>
      <Text style={styles.text2}>Mark Zuckerberg</Text>
      <Text style={styles.text1}>CEO Meta</Text>
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
    image1: {
      width: 230,
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