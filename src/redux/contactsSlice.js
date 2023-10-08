import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: { id: nanoid(), ...newContact },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        return {
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          ),
        };
      },
      prepare(contactId) {
        return {
          payload: contactId,
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return { contacts: [...state.contacts, action.payload] };
//     }

//     case 'contacts/deleteContact': {
//       return {
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const addContact = newContact => {
//   return {
//     type: 'contacts/addContact',
//     payload: { id: nanoid(), ...newContact },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
