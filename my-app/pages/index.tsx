import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import NavigationBar from '@/components/NavigationBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="container">
      <NavigationBar></NavigationBar>
     <h1>Home page!</h1>
     <Link href="/goals"><h1>Goals page!</h1></Link>
     <Link href="/notes"><h1>Notes page!</h1></Link>
    </section>
  )
}
