import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/base';

const Tab = createBottomTabNavigator();

// Telas temporárias enquanto as reais não forem criadas
function Placeholder({ title }: { title: string }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{title}</Text>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#AAA',
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0.5,
          borderTopColor: '#eee',
          height: 70,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') iconName = 'home-outline';
          else if (route.name === 'Cronômetro') iconName = 'time-outline';
          else if (route.name === 'Relatórios') iconName = 'bar-chart-outline';
          else if (route.name === 'Configurações') iconName = 'settings-outline';

          return <Ionicons name={iconName as any} size={24} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Cronômetro" children={() => <Placeholder title="Cronômetro" />} />
      <Tab.Screen name="Relatórios" children={() => <Placeholder title="Relatórios" />} />
      <Tab.Screen name="Configurações" children={() => <Placeholder title="Configurações" />} />
    </Tab.Navigator>
  );
}
