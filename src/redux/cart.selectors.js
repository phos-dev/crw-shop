import { createSelector } from 'reselect';

const selectCart = state => state.store;

export const selectCartItems = createSelector([selectCart], s => s.cart);

export const toggleHidden = createSelector([selectCart], toggle => toggle.hidden);

export const selectTotal = createSelector([selectCart], total => total.total);
export const countCartItems = createSelector([selectCartItems], cart =>
  cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0)
);
