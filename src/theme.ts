export const theme: ThemeType = {
  colors: {
    background: '#000000',
    backgroundSecondary: '#24a7d0',
    text: '#ffffff',
    textHover: '#ff30d8',
  },
}

export interface ThemeType {
  colors: {
    background: string
    backgroundSecondary: string
    text: string
    textHover: string
  }
}
