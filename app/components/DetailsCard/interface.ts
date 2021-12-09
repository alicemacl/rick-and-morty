import { ImageSourcePropType } from "react-native";

export interface DetailsCardProps {
  title: string
  text: number | undefined
  buttonTitle: string
  screenLink: () => void
  imageUri: ImageSourcePropType
}