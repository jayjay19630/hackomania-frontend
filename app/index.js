import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../utils/Colors";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require("../assets/batteries.png")}
        />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.introtext}>
          Battle with your neighbours to{" "}
          <Text style={styles.energy}>conserve the most energy!</Text>
        </Text>
        <Text style={styles.victory}>
          Ready to claim your victory in Viridis?
        </Text>
        <TouchableOpacity
          onPress={() => router.navigate("/Signup")}
          style={styles.button}
        >
          <Text style={styles.started}>Let's get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  energy: {
    fontWeight: "700",
  },
  container: {
    height: "100%",
  },
  imagecontainer: {
    padding: 50,
  },
  introtext: {
    width: 350,
    fontSize: 30,
    fontWeight: "400",
    color: Colors.GREY,
    textAlign: "center",
    marginBottom: 20,
  },
  victory: {
    fontSize: 20,
    marginBottom: 30,
    color: Colors.GREY,
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 70,
    alignSelf: "center",
  },
  subcontainer: {
    backgroundColor: Colors.PRIMARY,
    fontSize: 27,
    textAlign: "center",
    height: "70%",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    alignItems: "center",
  },
  button: {
    borderRadius: 50,
    backgroundColor: Colors.SECONDARY,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  started: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
  },
});

export default IndexPage;
