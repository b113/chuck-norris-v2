const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return { ...state, loading: true };
        case 'CATEGORIES_RECEIVED':
            return { ...state, categories: action.json, loading: false };
        case 'GET_JOKE':
            return { ...state, loadingJoke: true };
        case 'JOKE_RECEIVED':
            return { ...state, joke: action.json, loadingJoke: false };
        default:
            return state;
    }
};
export default reducer;