import React, { FC, useContext } from 'react';
import Link from 'next/link';
import { Context } from '../context/context';
import { getFilterQueryUrl } from '../helpers';
import { ParsedUrlQueryInput } from 'querystring';

export const BackButton: FC = (props) => {
  const { children } = props;
  const { state } = useContext(Context);
  const [queryObject] = getFilterQueryUrl(state.filter, state.api);
  queryObject.page = state.ads ? state.ads.current_page : 1;
  return (
    <Link
      href={{
        pathname: '/',
        query: queryObject as ParsedUrlQueryInput,
      }}
    >
      {children}
    </Link>
  );
};
