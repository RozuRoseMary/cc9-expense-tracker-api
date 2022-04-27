export const FETCH_TRANSACTION = "FETCH_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";

function transactionReducer(state, action) {
  switch (action.type) {
    case FETCH_TRANSACTION: {
      // dipatch ({type: FETCH_TRANSACTION }, value: {transaction: []})
      return action.value.transactions;
    }
    case DELETE_TRANSACTION: {
      // dipatch ({type: FETCH_TRANSACTION }, value: 'f912b5ca-4a36-42be-983e-c06df51b5792')
      const idx = state.findIndex((el) => el.id === action.value.id);
      if (idx !== -1) {
        const cloneState = [...state];
        cloneState.splice(idx, 1);
        return cloneState;
      } else return state;
    }
    default:
      return state;
  }
}

export { transactionReducer };
