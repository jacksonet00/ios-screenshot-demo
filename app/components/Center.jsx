import React from "react";
import { View, StyleSheet } from "react-native";

const Center = (props) => {
  const { children } = props;
  return (
    <View {...props} style={styles.contianer}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Center;
