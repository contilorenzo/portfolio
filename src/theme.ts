export const theme: ThemeType = {
  colors: {
    background: '#000000',
    backgroundSecondary: '#24a7d0',
    gradient:
      'linear-gradient(45deg, rgba(120,38,122,1) 0%, rgba(255,48,208,1) 27%, rgba(245,137,204,1) 56%, rgba(217,84,206,1) 73%, rgba(230,30,214,1) 91%, rgba(144,43,144,1) 100%)',
    neon: '#ce0000',
    text: '#ffffff',
    textHover: '#ff30d8',
  },
}

export interface ThemeType {
  colors: {
    background: string
    backgroundSecondary: string
    gradient: string
    neon: string
    text: string
    textHover: string
  }
}
