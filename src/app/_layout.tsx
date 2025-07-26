import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          if (route.name === 'index') iconName = 'home-outline';
          if (route.name === 'registro') iconName = 'time-outline';
          if (route.name === 'relatorios') iconName = 'bar-chart-outline';
          if (route.name === 'configuracoes') iconName = 'settings-outline';

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#803CBF',
        tabBarInactiveTintColor: '#AAA',
        tabBarStyle: {
          height: 100,
          paddingBottom: 50,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="registro" options={{ title: 'Diário' }} />
      <Tabs.Screen name="relatorios" options={{ title: 'Relatórios' }} />
      <Tabs.Screen name="configuracoes" options={{ title: 'Ajustes' }} />
    </Tabs>
  );
}
