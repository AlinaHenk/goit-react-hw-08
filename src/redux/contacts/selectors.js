import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => {
  return state.contacts.items;
};
export const selectIsLoading = (state) => {
  return state.contacts.loading;
};
export const selectError = (state) => {
  return state.contacts.error;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterText) => {
    return contacts.filter(
      (contact) =>
        contact.name
          .toLowerCase()
          .trim()
          .indexOf(filterText.toLowerCase().trim(), 0) >= 0 || filterText === ""
    );
  }
);
