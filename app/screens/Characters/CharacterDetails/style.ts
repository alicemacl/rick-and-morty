import { StyleSheet, Platform, StatusBar } from 'react-native'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight || 0 : 0,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: colors.blue,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 30,
    marginBottom: 15,
  },
  image: {
    width: '50%',
    height: 50,
    alignSelf: 'center',
    flex: 1,
    borderRadius: 300,
    zIndex: 99,
    borderStyle: 'solid',
    borderWidth: 10,
    borderColor: colors.green,
    marginTop: 20,
  },
  infoBox: {
    backgroundColor: colors.white,
    flex: 3,
    width: '90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignSelf: 'center',
    marginTop: -20,
    padding: 20,
  },
})
