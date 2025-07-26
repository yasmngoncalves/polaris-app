import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../styles/base';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    paddingBottom: 100,
    paddingTop: 80,
  },

  // Header com título e seta
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  headerTitle: {
    fontSize: typography.fontSizes.lg,
    fontWeight: '600',
    fontFamily: typography.fonts.default,
    color: colors.text,
  },

  // Seletor de semanas
  weekSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  weekOption: {
    fontSize: typography.fontSizes.sm,
    color: '#999',
    fontFamily: typography.fonts.default,
  },
  weekSelected: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  weekSelectedText: {
    color: colors.white,
    fontWeight: '600',
    fontFamily: typography.fonts.default,
  },

  // Card base
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.md,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },

  // Cabeçalho do card com ícone + título + seta
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  cardIconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  cardIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: typography.fontSizes.base,
    fontWeight: '600',
    fontFamily: typography.fonts.default,
    color: colors.text,
  },

  // Botões finais
  button: {
    marginTop: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonSecondary: {
    marginTop: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: typography.fonts.default,
    fontSize: typography.fontSizes.base,
    color: colors.primary,
    fontWeight: '500',
  },
});
