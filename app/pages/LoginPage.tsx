import { StyleSheet, View } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import Avatar from "../components/Avatar";
import LinkButton from "../components/UIButtons/LinkButton";
import MainButton from "../components/UIButtons/MainButton";
import UITextInput from "../components/UITextInput";
import H1 from "../components/UITexts/H1";
import H2 from "../components/UITexts/H2";
import UIText from "../components/UITexts/UIText";

export default function LoginPage() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar src={require("../assets/images/wolf.jpeg")} />
        <H1 text="Loups-Garous" />
        <H2 text="Maître du Jeu" />
        <UIText
          style={{ textAlign: "center" }}
          text="Application compagnon pour gérer vos parties de Loups-Garous."
        />
      </View>
      <View style={[styles.form, { backgroundColor: theme.colors.container }]}>
        <H1 text="Connexion" />
        <UITextInput placeholder="E-mail" label={"E-mail"} />
        <UITextInput placeholder="Mot de passe" label={"Mot de passe"} />
        <MainButton text="Connexion" />
      </View>
      <View style={styles.nav}>
        <LinkButton text="Mot de passe oublié ?" />
        <LinkButton text="Créer un compte" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  header: {
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  form: {
    width: "100%",
    alignItems: "center",
    padding: 18,
    gap: 12,
    borderRadius: 8,
  },
  nav: {
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
});
