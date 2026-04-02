import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../../theme/ThemeContext";
import H2 from "../UITexts/H2";

interface MainButtonProps {
  text: string;
}

export default function MainButton({ text }: MainButtonProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.colors.primary }]}
      onPress={() => console.log("pressed")}
    >
      <H2 text={text} color={theme.colors.background} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
    padding: 14,
  },
});
