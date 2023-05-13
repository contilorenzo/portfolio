export const theme: ThemeType = {
  colors: {
    background: '#000000',
    text: '#ffffff',
    textHover: '#ff30d8',
  },
}

export interface ThemeType {
  colors: {
    background: string
    text: string
    textHover: string
  }
}
