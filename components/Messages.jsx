import React, { useContext } from 'react';
import { Context } from './../context/context';
import { Check, Exclamation, Times } from './Icons';

export const Messages = (props) => {
  const { state, dispatch } = useContext(Context);
  const message = state.message;

  return (
    <div className="messages">
      <div className={`alert alert-${message.type} text-center`} role="alert">
        <h4 className="alert-heading">
          {message.type === 'success' ? (
            <Check />
          ) : message.type === 'danger' ? (
            <Times />
          ) : (
            message.type === 'warning' && <Exclamation />
          )}
        </h4>
        <p>{message.message}</p>
        <hr />
        <p className="mb-0">
          <button
            onClick={() =>
              dispatch({
                type: 'SET_MESSAGE',
                message: { type: null, message: null },
              })
            }
            className={`btn btn-outline-${message.type}`}
          >
            OK
          </button>
        </p>
      </div>
    </div>
  );
};
