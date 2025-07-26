import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/screens/HomeScreen.styles';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const humores = [
  { icon: 'grin-beam', color: '#B8F2DC' },
  { icon: 'grin', color: '#F5E983' },
  { icon: 'meh', color: '#BEE3F8' },
  { icon: 'frown', color: '#F3B3A6' },
  { icon: 'sad-tear', color: '#FCA5B3' },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topHeader}>
        <Image source={require('../assets/logo/urso.png')} style={styles.logo} />
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="#2B1A42" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Oi Yasmin!</Text>
      <Text style={styles.subtitle}>Como você está se sentindo hoje?</Text>

      <View style={styles.moodRow}>
        {humores.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.moodButton, { backgroundColor: item.color }]}
          >
            <FontAwesome5 name={item.icon} size={35} color="#2B1A42" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Status</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Histórico</Text>
        </TouchableOpacity>
      </View>

     <View style={styles.statusRow}>
      <View style={[styles.statusCard, { backgroundColor: '#FCD5D5' }]}>
        <FontAwesome5 name="running" size={24} color="#2B1A42" />
        <Text style={styles.cardLabel}>Movimento</Text>
        <Text style={styles.value}>632</Text>
      </View>

      <View style={[styles.statusCard, { backgroundColor: '#D5F4F2' }]}>
        <FontAwesome5 name="tint" size={24} color="#2B1A42" />
        <Text style={styles.cardLabel}>Hidratação</Text>
        <Text style={styles.value}>1200ml</Text>
      </View>

      <View style={[styles.statusCard, { backgroundColor: '#E6E4F9' }]}>
        <FontAwesome5 name="bed" size={24} color="#2B1A42" />
        <Text style={styles.cardLabel}>Sono</Text>
        <Text style={styles.value}>7h42min</Text>
      </View>
    </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Medicação</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>+ Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.medicationCard}>
        <Text style={styles.cardLabel}>💊 Vitamin D</Text>
        <Text style={styles.cardNote}>1 comprimido após o almoço</Text>
      </View>
    </ScrollView>
  );
}
