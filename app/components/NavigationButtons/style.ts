import { StyleSheet } from "react-native"
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderTopColor: colors.black,
    borderTopWidth: 1,
    backgroundColor: colors.darkBlue,
    padding: 10,
    flex: 1,
  },
})