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

        // state.config

        case 'TOGGLE_FAVORITES': 
        return {
            ...state,
            config: {
                ...state.config, toggleFavorites: action.toggle
            }
        }

        case 'TOGGLE_FILTER': 
        return {
            ...state,
            config: {
                ...state.config, toggleFilter: action.toggle
            }
        }

        default:
            return state;
    }
}