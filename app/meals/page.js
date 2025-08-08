import Link from "next/link";

export default function MealsPage({ params }) {
    return (
        <div>
            <h1>Meals</h1>
            <h1> Dynamic Meals {params.slug} <Link href="/meals/dynamic-1">Dynamic Meal 1</Link></h1>
            <h1> Meals <Link href="/meals/share">Share Meal</Link></h1>
        </div>
    );
}