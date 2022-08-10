import styled from 'styled-components/native';


export const TabIcon = styled.Image`
  height: 20px;
  width: 20px;
  margin-bottom: 5px;
  tint-color: ${(props: any) => props.iconColor || "#D1D1D1"};
`;

export const TabButton = styled.TouchableOpacity`
 flex: 1;
 align-items: center;
 justify-content: center;
`;

export const TabTitle = styled.Text`
  font-size: 12px;
  font-weight: 400;
  font-family: DMSans;
  color: ${(props: any) => props.color || "#D1D1D1"};
`;

export const CartButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

export const AnimatedButton = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  background-color: #F16B59;
  padding: 10px;
  shadow-color: rgba(34, 43, 50, 0.1);
  shadow-offset: 0px 0.5px;
  shadow-opacity: 0.75px;
  shadow-radius: 5px;
  bottom: 30px;
`;

export const CartImage = styled.Image`
  height: 20px;
  width: 20px;
`;
