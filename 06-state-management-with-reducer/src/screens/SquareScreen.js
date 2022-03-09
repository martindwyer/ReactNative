import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const colorIncrement = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change < 255 && red + change >= 0 ? setRed(red + change) : null;
        break;
      case "green":
        green + change < 255 && green + change >= 0
          ? setGreen(green + change)
          : null;
        break;
      case "blue":
        blue + change < 255 && blue + change >= 0
          ? setBlue(blue + change)
          : null;
        break;
      default:
        break;
    }
  };

  return (
    <Text>
      <View>
        <ColorCounter
          onIncrease={() => setColor("red", colorIncrement)}
          onDecrease={() => setColor("red", -1 * colorIncrement)}
          color="Red"
        />
        <ColorCounter
          onIncrease={() => setColor("green", colorIncrement)}
          onDecrease={() => setColor("green", -1 * colorIncrement)}
          color="Green"
        />
        <ColorCounter
          onIncrease={() => setColor("blue", colorIncrement)}
          onDecrease={() => setColor("blue", -1 * colorIncrement)}
          color="Blue"
        />
      </View>
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </Text>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
