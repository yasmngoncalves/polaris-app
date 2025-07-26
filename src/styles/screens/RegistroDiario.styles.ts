import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../base';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingTop: 80,
    backgroundColor: colors.background,
  },

  // Header da página
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  headerTitle: {
    fontSize: typography.fontSizes.lg,
    fontFamily: typography.fonts.default,
    fontWeight: 'bold',
    color: colors.text,
  },

  // Botão "Novo Registro"
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 16,
    marginBottom: spacing.lg,
  },
  registerButtonText: {
    fontSize: typography.fontSizes.base,
    fontFamily: typography.fonts.default,
    color: colors.white,
    fontWeight: '500',
  },

  // Títulos das seções
  sectionTitle: {
    fontSize: typography.fontSizes.md,
    fontFamily: typography.fonts.default,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },

  // Grid dos cards de resumo
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },

  // Cartões de humor, movimento, etc.
  summaryCard: {
    width: '48%',
    borderRadius: 16,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  cardEmoji: {
    fontSize: 24,
    marginBottom: spacing.xs,
  },
  cardLabel: {
    fontSize: typography.fontSizes.sm,
    fontFamily: typography.fonts.default,
    color: colors.text,
    paddingTop: spacing.lg,
  },
  cardValue: {
    fontSize: typography.fontSizes.base,
    fontFamily: typography.fonts.default,
    fontWeight: 'bold',
    marginTop: 4,
    color: colors.text,
  },

  // Lista de atividades
  activityCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 1,
  },
  activityInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  activityLabel: {
    fontSize: typography.fontSizes.base,
    fontFamily: typography.fonts.default,
    color: colors.text,
    fontWeight: '500',
  },
  activityTime: {
    fontSize: typography.fontSizes.sm,
    fontFamily: typography.fonts.default,
    color: '#666',
  },
});
