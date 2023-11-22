import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'components/redux/ContactsSlice';
import filterReducer from 'components/redux/FilterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
