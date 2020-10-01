import { useContext } from 'react';
import { Context } from './../context/context';
import { setCookie } from './../helpers';

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
    setCookie('theme', theme, 100000000);
  };

  return {
    handleChangeTheme,
  };
};
