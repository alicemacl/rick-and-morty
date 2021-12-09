import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 20,
  },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
})
