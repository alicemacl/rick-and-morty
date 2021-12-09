import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native'

export interface Props {
  previous: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
  next: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
  disabledNext: boolean | undefined
  disabledPrev: boolean | undefined
}
