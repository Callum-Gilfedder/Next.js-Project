import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import NavigationBar from '@/components/NavigationBar'

const inter = Inter({ subsets: ['latin'] })

export default function Goals() {
  return (
    <section className="container">
    <NavigationBar></NavigationBar>
    <div className="content-container">
     <h1>Goals</h1>
    </div>
    </section>
  )
}
