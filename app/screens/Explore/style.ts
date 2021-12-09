import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: 218,
    height: 92,
  },
  subTitle: {
    fontSize: 20,
    color: colors.green,
    fontWeight: '600',
    textAlign: 'center',
    margin: 20,
  },
})
