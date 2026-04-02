import { StyleSheet, TouchableOpacity } from "react-native";
import UIText from "../UITexts/UIText";

interface LinkButtonProps {
  text: string;
}

export default function LinkButton({ text }: LinkButtonProps) {
  return (
    <TouchableOpacity onPress={() => console.log("pressed")}>
      <UIText text={text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
