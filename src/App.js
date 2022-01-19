import { Fragment } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals'; // Importing Meals.js into Meals folder (2nd to last)

function App() {
  return (
    <Fragment>
      <Header>
        <main>
          <Meals /> {/* Render this here as a self closing component */} 
        </main>
      </Header>
    </Fragment>
  );
}

export default App;
