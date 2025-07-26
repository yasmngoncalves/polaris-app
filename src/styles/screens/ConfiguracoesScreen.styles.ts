import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../styles/base';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    paddingTop: 80,
  },

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

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  optionText: {
    fontSize: typography.fontSizes.base,
    fontFamily: typography.fonts.default,
    color: colors.text,
  },
});
