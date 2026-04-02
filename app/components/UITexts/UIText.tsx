import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { useTheme } from "../../../theme/ThemeContext";

interface UITextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

export default function UIText({ text, style }: UITextProps) {
  const theme = useTheme();

  return (
    <Text style={[styles.text, { color: theme.colors.text }, style]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
  },
});
