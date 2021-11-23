import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Center from "../components/Center";

export default function Screenshot({ image }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Done</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.headerIcon}>Y</Text>
          <Text style={styles.headerIcon}>Z</Text>
          <Text style={styles.headerIcon}>!</Text>
          <Text style={styles.headerIcon}>Q</Text>
          <Text style={styles.headerIcon}>J</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerIcons}>
          <Text style={styles.footerIcon}>P1</Text>
          <Text style={styles.footerIcon}>P2</Text>
          <Text style={styles.footerIcon}>P3</Text>
          <Text style={styles.footerIcon}>P4</Text>
          <Text style={styles.footerIcon}>P5</Text>
          <Text style={styles.footerIcon}>P6</Text>
          <Text style={styles.footerIcon}>I1</Text>
          <Text style={styles.footerIcon}>I2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  footerIcons: {
    flex: 1,
    flexDirection: "row",
    marginTop: "10%",
    marginBottom: "8%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingLeft: "10%",
  },
  footerIcon: {
    paddingHorizontal: 12,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: "13%",
    width: "100%",
    borderTopColor: "white",
    borderTopWidth: 1,
  },
  spacer: {
    width: "30%",
  },
  header: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "11.3%",
    top: 0,
    position: "absolute",
  },
  container: {
    height: "100%",
    backgroundColor: "#2C2C2B",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderColor: "white",
    borderWidth: 1,
    height: "69%",
    width: "69%",
  },
  headerText: {
    color: "white",
    marginTop: "15%",
    paddingLeft: "5%",
  },
  headerIcons: {
    flex: 1,
    flexDirection: "row",
    marginTop: "15%",
    paddingLeft: "15%",
  },
  headerIcon: {
    color: "white",
    paddingHorizontal: "8%",
  },
});
