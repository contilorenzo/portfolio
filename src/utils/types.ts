export interface Route {
  path: string
  label: string
  component: JSX.Element
  icon: JSX.Element
}

export interface Image {
  src: string
  alt: string
}

export interface File {
  src: string
  label: string
  format: string
}

export interface Project {
  title: string
  description: string
  image: Image
  files: File[]
}
