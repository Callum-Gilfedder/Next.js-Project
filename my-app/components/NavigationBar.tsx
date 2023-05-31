
import Button from "@/components/Button"
import Link from "next/link"

export default function NavigationBar() {
    


    return (
        <nav>
            <ul>
                <li> 
                    <Link href="/"> <Button text="NOTES"> 
                    </Button> 
                    </Link>
                </li>
                <li> 
                    <Link href="/goals">
                    <Button text="GOALS"> 
                    </Button> 
                    </Link>
                </li>
            </ul>
        </nav>
    )
}