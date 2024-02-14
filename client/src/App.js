import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import User from './components/getUser/User';
import AddUser from './components/addUser/AddUser';
import EditUser from './components/updateUser/EditUser';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <User/>
    },
    {
      path:"/add",
      element: <AddUser/>
    },
    {
      path:"/edit/:id",
      element: <EditUser/>
    },
    
  ])

  return (
    <div className="App">
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
