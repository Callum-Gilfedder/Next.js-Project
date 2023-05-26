import Link from "next/link"

type Props = {
    age: number; 
    name: string;
}

function Notes(props: Props) {
    return (
        <>        
        <h1>Notes page!</h1>
        <Link href="/goals"><h2>Switch to goals page</h2></Link>
        </>

    )
}

export default Notes;