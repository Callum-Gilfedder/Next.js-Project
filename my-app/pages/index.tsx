import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import NavigationBar from '@/components/NavigationBar'
import Button from '@/components/Button'
import { useState } from "react"
import NoteForm from '@/components/NoteForm'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [createNote, setCreateNote] = useState(false)

  console.log(createNote)
  function handleClickOn() { 
    setCreateNote(true)
  }
  function handleClickOff() { 
    setCreateNote(false)
  }
  

  return (
    <section className="container">
    <NavigationBar></NavigationBar>
    <div className="content-container">
     <h1>Notes</h1>
      {/* { createNote ? <CreateNoteFields></CreateNoteFields> : <Button text="Create new note"></Button> } */}
      { createNote ? <button onClick={handleClickOff}> Cancel</button> : <button onClick={handleClickOn}> Create a new note</button> } 
      { createNote ? <NoteForm></NoteForm> : null}  
    </div>
    </section>
  )
}
