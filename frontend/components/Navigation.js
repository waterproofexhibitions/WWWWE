import Link from 'next/link'
import { Flex, Box } from "reflexbox";

function Navigation() {
    return (
        <Box variant="navContainer" className="nav-container bg-blue-400">
            <ul className="flex font-bold space-between">
                <li>
                    <Link href="/">
                        <a>HOME</a>
                    </Link>
                </li>
                <li> 
                    <Link href="/products">
                        <a>PRODUCTS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>CONTACT</a>
                    </Link>
                </li>
            </ul>
        </Box>
    )
}

export default Navigation