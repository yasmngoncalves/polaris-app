import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../styles/screens/RelatoriosScreen.styles';

export default function RelatoriosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#2B1A42" />
        <Text style={styles.headerTitle}>Histórico</Text>
      </View>

      {/* Seletor de semana */}
      <View style={styles.weekSelector}>
        <Text style={styles.weekOption}>18–24</Text>
        <View style={styles.weekSelected}>
          <Text style={styles.weekSelectedText}>25–31 Jul</Text>
        </View>
        <Text style={styles.weekOption}>01–07</Text>
      </View>

      {/* Cards */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconLabel}>
            <View style={[styles.cardIcon, { backgroundColor: '#D9F9CE' }]}>
              <FontAwesome5 name="smile" size={16} color="#2B1A42" />
            </View>
            <Text style={styles.cardTitle}>Humor</Text>
          </View>
          <Ionicons name="arrow-forward-outline" size={16} color="#2B1A42" />
        </View>
        {/* Inserir gráfico de linha aqui */}
      </View>

      {/* ...Repetir cards para Movimento, Hidratação e Medicamentos... */}

      {/* Botões finais */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📥 Baixar Relatório</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>📤 Enviar no E-mail</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
