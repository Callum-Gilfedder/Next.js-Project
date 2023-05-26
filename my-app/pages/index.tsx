import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

type Props = { 
  prop1: string, 
  prop2: number
}

const Home: React.FC<Props> = () => {
  return (
    <>

      <Link href="/notes"><h1>Click for notes</h1></Link>
      <Link href="/goals"><h1>Click for goals</h1></Link>
    </>
  )
}


export default Home;
