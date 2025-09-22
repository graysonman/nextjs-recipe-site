import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
    const meals = await getMeals();
    return (
        <>
        <header className={styles.header}>
            <h1 >Meals <span className={styles.highlight}>Browse</span></h1>
            <p> Choose your favorite and cook it.</p>
            <p className={styles.cta}><Link href="/meals/share">Share Your Meal</Link></p>
        </header>
        <main className={styles.main}>
            <MealsGrid meals={meals}/>
        </main>
        </>
    );
}