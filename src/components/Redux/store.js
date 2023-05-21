import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contacts';
import filterReducer from './Filter/Filter';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
