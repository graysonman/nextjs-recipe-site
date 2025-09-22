import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    const stmt = db.prepare('SELECT * FROM meals');
    const meals = stmt.all();
    return meals;
}
