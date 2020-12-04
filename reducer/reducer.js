export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_ADS':
      return {
        ...state,
        ads: action.ads,
      };

    case 'SET_AD':
      return {
        ...state,
        ad: action.ad,
      };

    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favoriteAds: [...state.favoriteAds, action.ad],
      };

    case 'REMOVE_ITEM_FROM_FAVORITES':
      return {
        ...state,
        favoriteAds: state.favoriteAds.filter((item) => item.id !== action.id),
      };

    // state.config

    case 'TOGGLE_FAVORITES':
      return {
        ...state,
        config: {
          ...state.config,
          toggleFavorites: action.toggle,
        },
      };

    case 'TOGGLE_FILTER':
      return {
        ...state,
        config: {
          ...state.config,
          toggleFilter: action.toggle,
        },
      };

    case 'HANDLE_LOADING':
      return {
        ...state,
        config: {
          ...state.config,
          loading: action.loading,
        },
      };
    // AUTHENTIFIKACIA

    case 'LOGIN':
      return {
        ...state,
        user: action.user,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };

    // MESSAGES

    case 'SET_MESSAGE':
      return {
        ...state,
        message: {
          type: action.message.type,
          message: action.message.message,
        },
      };

    // FILTER

    case 'SET_FILTER':
      if (action.event.name === 'category') {
        return {
          ...state,
          filter: {
            category: action.event.value,
            brand: '',
            model: '',
            fuel: '',
            transmision: '',
            color: '',
            yearFrom: '',
            yearTo: '',
            priceFrom: '',
            priceTo: '',
            kmFrom: '',
            kmTo: '',
            powerFrom: '',
            powerTo: '',
          },
        };
      }

      return {
        ...state,
        filter: {
          ...state.filter,
          [action.event.name]: action.event.value,
        },
      };

    case 'SET_BRANDS':
      return {
        ...state,
        brands: action.brands,
      };

    case 'SET_MODELS':
      return {
        ...state,
        models: action.models,
      };

    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
}
