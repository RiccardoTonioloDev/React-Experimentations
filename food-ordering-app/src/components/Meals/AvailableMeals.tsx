import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
    const [meals, setMeals] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState('');

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('INSERT_FIREBASE_KEY_HERE');

            if (!response.ok) {
                throw new Error('Something went wrong.');
            }

            const responseData = await response.json();
            console.log(responseData);
            const loadedMeals: Array<Item> = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    title: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };
        fetchMeals().catch((error) => {
            let message = 'Unknown message.';
            if (error instanceof Error) message = error.message;
            setIsLoading(false);
            setHttpError(message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }
    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }

    const mealsList = meals.map((meal) => (
        <MealItem
            title={meal.title}
            description={meal.description}
            price={meal.price}
            key={meal.id}
            id={meal.id}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};
export default AvailableMeals;
