import { StyleSheet, Text } from "react-native";
import { useTheme } from "../../../theme/ThemeContext";

interface H1Props {
  text: string;
}

export default function H1({ text }: H1Props) {
  const theme = useTheme();

  return (
    <Text style={[styles.text, { color: theme.colors.text }]}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Cinzel-Bold",
    fontSize: 26,
  },
});
