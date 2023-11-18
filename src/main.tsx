import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store';
import { generateUsers } from './utils/generateData';
import { setUsers } from './slices/userSlice';
import App from './App.tsx'

const generatedUsers = generateUsers(10);

console.log('Generated Users:', generatedUsers);

store.dispatch(setUsers(generatedUsers));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
