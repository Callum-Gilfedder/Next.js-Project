import Link from "next/link"

export default function Notes() {
    return (
        <section className="container">
        <h1>Notes page!</h1>
        <Link href="/goals"> <h2>Click here for the goals page</h2> </Link>
        </section>
    )
}