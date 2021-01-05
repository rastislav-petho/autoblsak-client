import React, { useContext } from 'react';
import { Context } from './../context/context';
import { decodeSorted, getFilterQueryUrl, scrollToTop } from '../helpers';
import { SORTED } from '../helpers/constants';
import { useRouter } from 'next/router';

export const AdListHeader = () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const { to, from, total } = state.ads;

  const handleChange = (event) => {
    dispatch({ type: 'HANDLE_LOADING', loading: true });
    dispatch({
      type: 'SET_FILTER',
      event: { name: event.target.name, value: event.target.value },
    });

    let [queryObject] = getFilterQueryUrl(state.filter, state.api);
    queryObject.sortBy = event.target.value;

    router.push({
      pathname: '/',
      query: queryObject,
    });
    scrollToTop();
  };

  return (
    <div className="row ad-list-header">
      <div>{/* {from}-{to} z {total} inzerátov */}</div>
      <div>
        <select
          className="form-control form-control-sm custom-select"
          name="sortBy"
          onChange={(event) => handleChange(event)}
        >
          {state.filter.sortBy ? (
            <option value={state.filter.sortBy}>
              {decodeSorted(state.filter.sortBy)}
            </option>
          ) : (
            <option value={undefined}>Zoradiť inzeráty</option>
          )}
          {SORTED.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
