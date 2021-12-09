import React from 'react'
import { View, Button } from 'react-native'
import colors from '../../config/colors'
import { Props } from './interface'
import { styles } from './style'

export default function NavigationButtons({ previous, next, disabledNext, disabledPrev }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Previous"
        onPress={previous}
        color={colors.blue}
        disabled={disabledPrev}
      />
      <Button
        title="Next"
        onPress={next}
        color={colors.blue}
        disabled={disabledNext}
      />
    </View>
  )
}
