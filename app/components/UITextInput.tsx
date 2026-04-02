import { StyleSheet, TextInput, View } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import UIText from "./UITexts/UIText";

interface UITextInputProps {
  label: string;
  placeholder: string;
}

export default function UITextInput({ label, placeholder }: UITextInputProps) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <UIText text={label} />
      <TextInput
        style={[styles.textInput, { borderColor: theme.colors.border }]}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    marginTop: 4,
  },
});
