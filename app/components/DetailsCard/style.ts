import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 5,
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.blue,
    marginBottom: 5,
  },
})
