import React from 'react'

const INTITIAL_STATE = {
    user: null,
};

function userReducer(state= INTITIAL_STATE, action) {
  switch(action.type) {
    default:
        return state;
  }
};

export default userReducer;
