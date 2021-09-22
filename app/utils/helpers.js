import { Alert } from 'react-native'
import { STRIPE_API_URL } from '../configs/apiEndpoints'

export const getAllCartFoods = (items) => {
    let allFoods = []
    const foodsData = items.map(x => x.foods)
    foodsData.map(food => {
        food.map(x => {
            allFoods = [...allFoods, x]
        })
    })
    return allFoods
}

export const getTotalCartItemPrice = (items) => {
    let allFoods = []
    const foodsData = items.map(x => x.foods)
    foodsData.map(food => {
        food.map(x => {
            allFoods = [...allFoods, x]
        })
    })
    return allFoods.reduce((total, item) => total + item.price, 0).toFixed(1)
}


export const fetchPublishableKey = async () => {
    try {
        const response = await fetch(
            `${STRIPE_API_URL}/stripe-key`
        );

        const { publishableKey } = await response.json();

        return publishableKey;
    } catch (e) {
        console.warn('Unable to fetch publishable key. Is your server running?');
        Alert.alert(
            'Error',
            'Unable to fetch publishable key. Is your server running?'
        );
        return null;
    }
}
