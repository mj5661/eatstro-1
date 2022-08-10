import styled from 'styled-components/native';


export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #FBFBFB;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FBFBFB;
`;

export const UserWelcome = styled.Text`
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
  margin-bottom: 8px;
  margin-left: 26px;
  font-family: Abel;
`;

export const HomeInfo = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
  margin-left: 16px;
  color: #222B32;
  opacity: 0.5;
  font-family: DMSans;
`;

export const SearchContainer = styled.View`
  height: 56px;
  border-radius: 12px;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 12px;
  padding-horizontal: 16px;
  margin-horizontal: 16px;
  shadow-color: rgba(34, 43, 50, 0.1);
  shadow-offset: 0px 0px;
  shadow-opacity: 0.75;
  shadow-radius: 3px;
`;

export const SearchIcon = styled.Image`
  height: 24px;
  width: 24px;
  resize-mode: contain;
  margin-end: 11px;
`;

export const SearchInput = styled.TextInput`
  font-size: 16px;
  font-weight: 500;
  width: 90%;
  font-family: DMSans;
`;

export const SearchTitle = styled.Text`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #222B32;
  margin-horizontal: 16px;
  font-family: Abel;
`;

export const ItemContainer = styled.View`
  margin-top: 16px;
  border-radius: 16px;
  shadow-color: rgba(34, 43, 50, 0.1);
  shadow-offset: 2px -2px;
  shadow-opacity: 0.75;
  shadow-radius: 3px;
  background-color: #FFFFFF;
  margin-vertical: 2px;
`;

export const ItemImage = styled.Image`
  height: 140px;
  width: 100%;
  resize-mode: cover;
  border-radius: 16px;
`;

export const ItemInfoContainer = styled.View`
  padding: 16px;
`;

export const ItemName = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #222B32;
  margin-bottom: 5px;
  font-family: DMSans;
`;

export const ItemQuantity = styled.Text`
  color: #222B32;
  opacity: 0.5;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
  font-family: DMSans;
`;

export const ItemDescription = styled.Text`
  color: #222B32;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
  font-family: DMSans;
`;

export const ItemPrice = styled.Text`
  color: #222B32;
  font-size: 14px;
  font-weight: 700;
  font-family: DMSans;
`;

export const LikeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const LikeButton = styled.TouchableOpacity`
  margin-left: 8px
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  background-color: #FFFFFF;
`;

export const LikeImage = styled.Image`
  height: 12px;
  width: 12px;
  resize-mode: contain;
`;

export const LikeText = styled.Text`
  color: #FFFFFF; 
  font-size: 12px; 
  font-weight: 700;
  font-family: DMSans;
`;

export const ItemAddButton = styled.TouchableOpacity`
  background-color: #F16B59;
  height: 40px;
  width: 40px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  position: absolute;
  bottom: 0px; 
  right: 0px;
  align-items: center;
  justify-content: center;
`;

export const AddIcon = styled.Image`
  height: 16px; 
  width: 16px;
  resize-mode: contain;
`;

export const RawBox = styled.View`
  flex-direction: row;
`;

export const QuantityIcon = styled.Image`
  height: 14px;
  width: 14px;
  resize-mode: contain;
  margin-end: 6px;
`;

export const CuisionImage = styled.Image`
  height: 24px;
  width: 24px;
  resize-mode: contain;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const SpiceLevelContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

export const SpiceLevelImage = styled.Image`
  height: 12px;
  width: 15px;
  resize-mode: contain;
`;

export const FlatListView = styled.FlatList`
  padding-horizontal: 16px;
`;

export const EmptyContainer = styled.Text`
  align-self: center;
`;