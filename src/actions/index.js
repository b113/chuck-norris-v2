export const getCategories = () => ({
    type: 'GET_CATEGORIES',
});

export const getJoke = (jokeId) => ({
    type: 'GET_JOKE',
    jokeId
});