
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import UserCreate from './components/UserCreate'; 
import UserList from './components/UserList';
import UserUpdate from './components/UserUpdate';


function App() {
  return (
   
 <Router>
      <div>
        <Navbar />
        <>
          <Route exact path='/' component={UserList} />
          <Route exact path='/create' component={UserCreate} />
          <Route exact path='/update/:id' component={UserUpdate} />
        </>
      </div>
    </Router>
  );
}

export default App;
