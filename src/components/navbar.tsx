import React, { useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
    const router = useRouter();

    return (
        <nav>
            <Link href="/" passHref>
                <a>Home</a>
            </Link>
            <Link href="/cv" as="/cv" passHref>
                <a>CV</a>
            </Link>
            
        </nav>
    )
}

export default Navbar;