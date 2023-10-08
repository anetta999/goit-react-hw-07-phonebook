import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  return state.contacts.items;
};

export const selectLoading = state => {
  return state.contacts.isLoading;
};

export const selectError = state => {
  return state.contacts.error;
};

export const selectFilter = state => {
  return state.filter;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
