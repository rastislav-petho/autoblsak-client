import React, { useContext } from 'react';
import { Context } from '../context/context';
import {
  decodeSorted,
  getFilterQueryUrl,
  scrollToTop,
  decodeDirection,
} from '../helpers';
import { SORTED, DIRECTION } from '../helpers/constants';
import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';

export const AdListHeader = () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();

  const handleOrderByChange = (event) => {
    dispatch({ type: 'HANDLE_LOADING', loading: true });
    dispatch({
      type: 'SET_FILTER',
      event: { name: event.target.name, value: event.target.value },
    });

    let [queryObject] = getFilterQueryUrl(state.filter, state.api);
    queryObject.sortBy = event.target.value;

    if (event.target.value === 'created') {
      dispatch({
        type: 'SET_FILTER',
        event: { name: 'direction', value: undefined },
      });

      queryObject.direction = undefined;
    }

    router.push({
      pathname: '/',
      query: queryObject as ParsedUrlQueryInput,
    });
    scrollToTop();
  };

  const handleDirectionChange = (event) => {
    dispatch({ type: 'HANDLE_LOADING', loading: true });
    dispatch({
      type: 'SET_FILTER',
      event: { name: event.target.name, value: event.target.value },
    });

    let [queryObject] = getFilterQueryUrl(state.filter, state.api);
    queryObject.direction = event.target.value;

    router.push({
      pathname: '/',
      query: queryObject as ParsedUrlQueryInput,
    });
    scrollToTop();
  };

  return (
    <div className="row ad-list-header">
      <div>{/* {from}-{to} z {total} inzerátov */}</div>
      <div className="header-filter">
        <select
          className="form-control form-control-sm custom-select"
          name="sortBy"
          onChange={(event) => handleOrderByChange(event)}
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

        {state.filter.sortBy && state.filter.sortBy !== 'created' && (
          <select
            className="form-control form-control-sm custom-select"
            name="direction"
            onChange={(event) => handleDirectionChange(event)}
          >
            {state.filter.direction && (
              <option value={state.filter.direction}>
                {decodeDirection(state.filter.direction)}
              </option>
            )}
            {DIRECTION.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};
