import { useContext } from 'react';
import { Context } from '../context/context';
import Cookies from 'js-cookie';

export const useTheme = () => {
  const { state, dispatch } = useContext(Context);

  const handleChangeTheme = () => {
    let theme = '';
    if (state.theme === 'dark') {
      theme = 'light';
    }

    if (state.theme === 'light') {
      theme = 'dark';
    }

    dispatch({
      type: 'CHANGE_THEME',
      theme: theme,
    });
    Cookies.set('theme', theme, { expires: 365 });
  };

  return {
    handleChangeTheme,
  };
};
