export type Theme = {
  colors: {
    background: string;
    container: string;
    text: string;
    border: string;
    primary: string;
  };
};

export const lightTheme: Theme = {
  colors: {
    background: "#EBEBF0",
    container: "#D8D8DC",
    text: "#363638",
    border: "#6C6C70",
    primary: "#956D51",
  },
};

export const darkTheme: Theme = {
  colors: {
    background: "#242426",
    container: "#363638",
    text: "#D8D8DC",
    border: "#AEAEB2",
    primary: "#DBA679",
  },
};
