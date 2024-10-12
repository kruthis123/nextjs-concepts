import { Metadata } from 'next'

// This is used to modify <head> HTML elements such as title and meta tags
export const metadata: Metadata = {
  title: 'Nextjs',
}
 
export default function Page() {
  return <h1>Welcome to the home page!</h1>
}