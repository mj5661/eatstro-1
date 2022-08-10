import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
 Alert
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { images } from '../../Images';
import ComingSoon from '../../screens/ComingSoon';
import Home from '../../screens/Home';
import { AnimatedButton, CartButton, CartImage, TabButton, TabIcon, TabTitle } from './styles';


export const Tabbar = () => {
 const _renderIcon = (routeName: string, selectedTab: string, color: string) => {
  let icon = null;

  switch (routeName) {
   case 'Home':
    icon = images.home;
    break;
   case 'Favourite':
    icon = images.favourite;
    break;
   case 'Orders':
    icon = images.orders;
    break;
   case 'Profile':
    icon = images.profile;
    break;
  }
  
  return (<TabIcon iconColor={color} source={icon} />);
 };

 const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
  const color = routeName === selectedTab ? '#F16B59' : ''; 
  return (
   <TabButton onPress={() => navigate(routeName)}>
    {_renderIcon(routeName, selectedTab, color)}
    <TabTitle color={color}>{routeName}</TabTitle>
   </TabButton>
  );
 }; 

 return (
  <NavigationContainer>
   <CurvedBottomBar.Navigator
    style={{
     paddingBottom: 10
    }}
    strokeWidth={0.5}
    height={60}
    circleWidth={60}
    bgColor="#FFFFFF"
    initialRouteName="Home"
    borderTopLeftRight
    screenOptions={{ header: () => null }}
    renderCircle={({ selectedTab, navigate }) => (
     <AnimatedButton>
      <CartButton
       onPress={() => Alert.alert('Cart Selected')}>
       <CartImage source={images.cart} />
       </CartButton>
     </AnimatedButton>
    )}
    tabBar={renderTabBar}>
     <CurvedBottomBar.Screen
      name="Home"
      position="LEFT"
      component={() => (
        <Home />
      )}
     />
     <CurvedBottomBar.Screen
      name="Favourite"
      component={() => (
       <ComingSoon />
      )}
      position="LEFT"
      />
      <CurvedBottomBar.Screen
       name="Orders"
       component={() => (
        <ComingSoon />
       )}
       position="RIGHT"
      />
      <CurvedBottomBar.Screen
       name="Profile"
       component={() => (
        <ComingSoon />
       )}
       position="RIGHT"
      />
   </CurvedBottomBar.Navigator>
  </NavigationContainer>
 );
};
