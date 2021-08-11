import React from "react";
import { Pane, Heading } from "evergreen-ui";

export const Navbar = () => {
  const bgColor = "#314769";
  const typoColor = "#e4e7eb";
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      height: 60,
      borderBottom: "1px solid #E4E7EB",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      width: "30%",
      height: "100%",
    },
    logo: {
      color: typoColor,
    },
  };
  return (
    <Pane style={styles.navbar} background={bgColor}>
      <Pane style={styles.logoContainer} className="p-left">
        <Heading size={700} style={styles.logo}>
          Dashboard
        </Heading>
      </Pane>
    </Pane>
  );
};
