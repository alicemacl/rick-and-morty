import { StyleSheet } from "react-native"
import colors from "../../../config/colors"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  subTitle: {
    textTransform: 'uppercase'
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.darkBlue,
    marginBottom: 10,
  }
})