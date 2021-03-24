import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

import './App.css';

function App() {

  // const [userData, setUserData] = useState([]);
  // const [error, setError] = useState({active: false, type: ''});

  // const getUserData = () => {
  //   fetch(`https://api.github.com/users/sirdarthvader`)
  //   .then(response => {
  //     if (response.status === 404) {
  //       return setError({ active: true, type: 404 });
  //     }
  //     if (response.status === 403) {

  //       return setError({ active: true, type: 403 });
  //     }
  //     return response.json();
  //   })
  //   .then(json => setUserData(json))
  //   .catch(error => {
  //     setError({ active: true, type: 400 });
  //     console.error('Error:', error);
  //   });
  // }


  //   //fetch current rate limit, currently set at 60
  //   useEffect(() => {
  //   fetch(`https://api.github.com/rate_limit`)
  //     .then(response => response.json())
  //     .then(json => {
  //       if (json.resources.core.remaining < 1) {
  //         setError({ active: true, type: 403 });
  //       }
  //     });

  //     getUserData();
  // }, []);


  return (
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
