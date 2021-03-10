import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  border-radius: 4px;
  border-width: 2px;
  border-color: ${(props) => (props.disabled ? colors.darkGray : colors.light)};
  padding: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${colors.light};
`;
