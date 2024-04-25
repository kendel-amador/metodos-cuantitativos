import React from "react";
import { TbMathSymbols } from "react-icons/tb";

function Home() {
  return (
    <div style={styles.container}>
      <TbMathSymbols style={styles.icon} />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#242424",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
  icon: {
    fontSize: 100,
    color: "#E3E3E3",
  },
};

export default Home;
