import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const HomeBackground = styled.ImageBackground.attrs({})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AnimationWrapper = styled.View`
  width: 40%;
  height: 22%;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const BuyButton = styled(Button).attrs({
  color: "black",
})`
  background-color: rgb(255, 193, 73);
  padding: ${(props) => props.theme.space[2]};
`;

export const Input = styled(TextInput)`
  width: 300px;
`;
