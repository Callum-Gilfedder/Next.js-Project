
import Link from "next/link"

type Props = {
    age: number; 
    name: string;
}

function Goals(props: Props) {
    return (
        <>        
        <h1>Goals page!</h1>
        <Link href="/notes"><h2>Switch to notes page</h2></Link>
        </>

    )
}

export default Goals;