import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className='lg:px-32 px-3'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
