import RoutesApp from './routes/routes.js'
import FormTimes from '../components/FormTimes.js'
import React, {useReducer} from 'react';

function App() {

  const[times, dispatch] = useReducer(timesReducer,
    initialTimes /*valor inicial do estado*/);


  return (

    <Provider store={store}>

      <RoutesApp/>
    
    </Provider>
  );
}

export default App;
