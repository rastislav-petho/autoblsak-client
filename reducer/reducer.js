export default function reducer(state, action) {
    switch (action.type) {
        case 'SET_ADS':
            return {
                ...state,
                ads: action.ads
            }

        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favoriteAds: [...state.favoriteAds, action.ad],
            }

        case 'REMOVE_ITEM_FROM_FAVORITES':
            return {
                ...state,
                favoriteAds: state.favoriteAds.filter(item => item.id !== action.id)
            }

        default:
            return state;
    }
}