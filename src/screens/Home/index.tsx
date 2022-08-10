import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Platform, ToastAndroid, View } from 'react-native';
import { fetchFoodItemsQuery } from '../../apollo/queries';
import { images } from '../../Images';
import {
  AddIcon,
  Container,
  CuisionImage,
  EmptyContainer,
  FlatListView,
  HomeInfo,
  ItemAddButton,
  ItemContainer,
  ItemDescription,
  ItemImage,
  ItemInfoContainer,
  ItemName,
  ItemPrice,
  ItemQuantity,
  LikeButton,
  LikeContainer,
  LikeImage,
  LikeText,
  QuantityIcon,
  RawBox,
  SafeAreaView,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchTitle,
  SpiceLevelContainer,
  SpiceLevelImage,
  UserWelcome
} from './styles';

const Home = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [list, setList] = useState<any[]>([]);
  const [likeCount, setLikeCount] = useState<number>(0);
  const { data, loading } = useQuery(fetchFoodItemsQuery);

  useEffect(() => {
    if(data && data?.items) {
      setList(data?.items);
    }
  }, [data]);

  const renderItem = ({item}) => (
    <ItemContainer>
      <View>
        <ItemImage source={{ uri: item.photo }} />
        <LikeContainer>
          <LikeText>{likeCount}</LikeText>
          <LikeButton onPress={() => setLikeCount(likeCount + 1)}>
            <LikeImage source={images.like}/>
          </LikeButton>
        </LikeContainer>
        <ItemAddButton onPress={() => {
          Platform.OS === 'android' && ToastAndroid.show('Added to Cart', 1000);
          Platform.OS === 'ios' && Alert.alert('Cookstro','Added to Cart');
        }}>
          <AddIcon source={images.plus} />
        </ItemAddButton>
      </View>
      <ItemInfoContainer>
        <ItemName>{item?.name}</ItemName>
        <RawBox>
          <QuantityIcon source={images.kcal} />
          <ItemQuantity>{item?.kcal + ' kcal'}</ItemQuantity>
        </RawBox>
        <ItemDescription>{item?.desc}</ItemDescription>
        <ItemPrice>{'$ ' + item?.price}</ItemPrice>
        <CuisionImage source={images.paleo_inactive} />
        <SpiceLevelContainer>
          <SpiceLevelImage source={images.spice} />
          <SpiceLevelImage source={images.spice_inactive} />
          <SpiceLevelImage source={images.spice_inactive} />
        </SpiceLevelContainer>
      </ItemInfoContainer>
    </ItemContainer>
  );

  return (
    <SafeAreaView>
      <Container showsVerticalScrollIndicator={false}>
        <UserWelcome>
          {'Hi, User! 👋'}
        </UserWelcome>
        <HomeInfo>
          {'What would you like to eat today?'}
        </HomeInfo>
        <SearchContainer>
          <SearchIcon source={images.search} />
          <SearchInput
            placeholder="Search something..."
            value={searchText}
            onChangeText={(text: string) => {
              setSearchText(text);
              let listToDisplay = data?.items;
              listToDisplay = data?.items?.filter((i: any) => i?.name?.includes(text));
              setList(listToDisplay);
            }}
          />
        </SearchContainer>
        <SearchTitle>
          {'Search results for ...'}
        </SearchTitle>
        {loading ?
          <ActivityIndicator size={'large'} /> 
          : <FlatListView 
              data={list} 
              renderItem={renderItem} 
              showsVerticalScrollIndicator={false} 
              ListEmptyComponent={<EmptyContainer>{'No data found..'}</EmptyContainer>}
            />
        }
      </Container>
    </SafeAreaView>
  );
};

export default Home;