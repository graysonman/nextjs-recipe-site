"use client";
import Link from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";

// Main point of this is to allow for just this element to be rendered by the client 
// so the whole main-header component doesn't need to be client side

export default function NavLink({href, children}) {
    const path = usePathname();
    return(
        <Link href={href} className={path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link}>{children}</Link>
    );  
}