
import Link from "next/link"

export default function Goals() {
    return (
        <section className="container">

        <h1>Goals page!</h1>
        <Link href="/notes"> <h2>Click here for the notes page</h2> </Link>
        </section>

    )
}