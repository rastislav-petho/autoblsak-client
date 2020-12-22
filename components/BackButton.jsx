import React, { useContext } from 'react';
import Link from 'next/link';
import { Context } from '../context/context';
import { getFilterQueryUrl } from '../helpers';

export const BackButton = (props) => {
  const { children } = props;
  const { state } = useContext(Context);
  const [queryObject] = getFilterQueryUrl(state.filter, state.api);
  queryObject.page = state.ads.current_page;
  return (
    <Link
      href={{
        pathname: '/',
        query: queryObject,
      }}
    >
      {children}
    </Link>
  );
};
