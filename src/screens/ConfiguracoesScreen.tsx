import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/screens/ConfiguracoesScreen.styles';

export default function ConfiguracoesScreen() {
  const settings = [
    { label: 'Permissões', icon: 'lock-closed-outline' },
    { label: 'Notificações', icon: 'notifications-outline' },
    { label: 'Perfil', icon: 'person-outline' },
    { label: 'Suporte', icon: 'help-circle-outline', external: true },
    { label: 'Política de Privacidade', icon: 'document-text-outline', external: true },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#2B1A42" />
        <Text style={styles.headerTitle}>Ajustes</Text>
      </View>

      {/* Lista de opções */}
      {settings.map((item, index) => (
        <TouchableOpacity key={index} style={styles.option}>
          <View style={styles.optionLeft}>
            <Ionicons name={item.icon as any} size={20} color="#803CBF" />
            <Text style={styles.optionText}>{item.label}</Text>
          </View>

          {item.external && (
            <Ionicons name="open-outline" size={18} color="#803CBF" />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
