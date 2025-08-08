import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
    return (
        <header>
            <Link href="/"><Image src="/icon.png" alt="NextLevel Food" width={50} height={50} />NextLevel Food</Link>
            <nav>
                <ul>
                    <li><Link href="/meals">Meals</Link></li>
                    <li><Link href="/community">Community</Link></li>
                </ul>
            </nav>
        </header>
    );
}