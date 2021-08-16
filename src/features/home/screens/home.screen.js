import React, { useState, useContext } from "react";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { DuckContext } from "../../../services/duck/duck.context";

import {
  HomeBackground,
  AnimationWrapper,
  BuyButton,
  Title,
  Input,
} from "../components/home.styles";

export const HomeScreen = ({ navigation }) => {
  const { addDuck } = useContext(DuckContext);

  const [name, setName] = useState("");
  return (
    <HomeBackground>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/duck.json")}
        />
      </AnimationWrapper>
      <Title>Velkommen til Aarhus Duckrace</Title>
      <Spacer size="large">
        <Input
          label="Navn"
          value={name}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setName(u)}
        />
      </Spacer>
      <Spacer size="large">
        <BuyButton
          onPress={() => {
            addDuck(name);
            setName("");
            navigation.navigate("Checkout");
          }}
        >
          Køb en and til racet
        </BuyButton>
      </Spacer>
    </HomeBackground>
  );
};
