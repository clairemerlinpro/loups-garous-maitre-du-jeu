import { StyleSheet, Text } from "react-native";
import { useTheme } from "../../../theme/ThemeContext";

interface H2Props {
  text: string;
  color?: string;
}

export default function H2({ text, color }: H2Props) {
  const theme = useTheme();

  return (
    <Text style={[styles.text, { color: color ?? theme.colors.text }]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Cinzel-Bold",
    fontSize: 22,
  },
});
