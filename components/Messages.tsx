import React, { FC, useContext } from 'react';
import { Context } from '../context/context';

export const Messages: FC = () => {
  const { state, dispatch } = useContext(Context);
  const message = state.message;

  return (
    <div className="messages">
      <div className={`alert alert-${message.type} text-center`} role="alert">
        <h4 className="alert-heading">
          {message.type === 'success' ? (
            <i aria-hidden className="fas fa-check"></i>
          ) : message.type === 'danger' ? (
            <i aria-hidden className="fas fa-times"></i>
          ) : (
            message.type === 'warning' && (
              <i aria-hidden className="fas fa-exclamation"></i>
            )
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
