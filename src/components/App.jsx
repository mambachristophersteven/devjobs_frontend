import '../styles/App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home';
import Details from './Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/details',
    element: <Details/>,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  );
}
export default App;
