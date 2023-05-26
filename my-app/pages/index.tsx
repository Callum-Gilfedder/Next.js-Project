import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = { 
  prop1: string, 
  prop2: number
}

const Home: React.FC<Props> = () => {
  return (
    <h1>Hello world!</h1>
  )
}


export default Home;
