import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export default function CardComponent({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
});