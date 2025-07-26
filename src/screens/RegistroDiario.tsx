import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../styles/screens/RegistroDiario.styles';

export default function RegistroDiarioScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#2B1A42" />
        <Text style={styles.headerTitle}>Registro Diário</Text>
        <View style={{ width: 24 }} /> {/* espaço do lado direito */}
      </View>

      {/* Botão Novo Registro */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Novo Registro</Text>
        <Ionicons name="arrow-forward-outline" size={20} color="white" />
      </TouchableOpacity>

      {/* Resumo do dia */}
      <Text style={styles.sectionTitle}>Resumo do dia</Text>
      <View style={styles.summaryGrid}>
        <View style={[styles.summaryCard, { backgroundColor: '#D9F9CE' }]}>
          <FontAwesome5 name="smile" size={24} color="#2B1A42" />
          <Text style={styles.cardLabel}>Humor</Text>
          <Text style={styles.cardValue}>Bem</Text>
        </View>

        <View style={[styles.summaryCard, { backgroundColor: '#FCD5D5' }]}>
          <FontAwesome5 name="running" size={24} color="#2B1A42" />
          <Text style={styles.cardLabel}>Movimentos</Text>
          <Text style={styles.cardValue}>632</Text>
        </View>

        <View style={[styles.summaryCard, { backgroundColor: '#D5F4F2' }]}>
          <FontAwesome5 name="tint" size={24} color="#2B1A42" />
          <Text style={styles.cardLabel}>Hidratação</Text>
          <Text style={styles.cardValue}>1200ml</Text>
        </View>

        <View style={[styles.summaryCard, { backgroundColor: '#E6E4F9' }]}>
          <FontAwesome5 name="bed" size={24} color="#2B1A42" />
          <Text style={styles.cardLabel}>Sono</Text>
          <Text style={styles.cardValue}>7h42min</Text>
        </View>
      </View>

      {/* Atividades */}
      <Text style={styles.sectionTitle}>Atividades</Text>
      <View style={styles.activityCard}>
        <Ionicons name="walk-outline" size={20} color="#803CBF" />
        <View style={styles.activityInfo}>
          <Text style={styles.activityLabel}>Caminhada</Text>
          <Text style={styles.activityTime}>2h 12min</Text>
        </View>
        <Ionicons name="checkmark-circle-outline" size={20} color="#803CBF" />
      </View>

      <View style={styles.activityCard}>
        <Ionicons name="accessibility-outline" size={20} color="#803CBF" />
        <View style={styles.activityInfo}>
          <Text style={styles.activityLabel}>Yoga</Text>
          <Text style={styles.activityTime}>2h 12min</Text>
        </View>
        <Ionicons name="checkmark-circle-outline" size={20} color="#803CBF" />
      </View>
    </ScrollView>
  );
}
