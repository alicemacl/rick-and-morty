import { StyleSheet, Platform, StatusBar } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight || 0 : 0,
  },
  list: {
    flex: 13,
  }
})