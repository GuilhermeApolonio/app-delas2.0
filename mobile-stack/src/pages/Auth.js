import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home'; 
import ProfileScreen from './profile/profile';
import { PayScreen } from './pagamento/pay';
import LoginScreen from './login';
import { DadosScreen } from './profile/dados';
import { ChatScreen } from './profile/chat';
import { HistoryScreen } from './profile/history';
import { CardScreen } from './pagamento/cartao';
import { MoneyScreen } from './pagamento/money';
import { PixScreen } from './pagamento/pix';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#5E17EB',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          backgroundColor: '#fff',
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: 6,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={size}
                />
              );
            }
            return (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="female" size={24} color={color} />
          ),
          tabBarOnPress: () => {
            navigation.navigate('Perfil');
          },
        })}
      />
      <Tab.Screen
        name="Pagamento"
        component={PayScreen}
        options={{
          tabBarLabel: 'Pagamento',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Auth() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Dados" component={DadosScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Cartao" component={CardScreen} />
        <Stack.Screen name="Money" component={MoneyScreen} />
        <Stack.Screen name="Pix" component={PixScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;
