import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
 
import logo from '../logo.svg';
import { routes } from './routes'

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map( ({ path, name }) => (
                  <li key={ path }>
                    <NavLink
                      activeClassName="nav-active"
                      to={ path }
                    >
                      { name }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map( ({ path, component: Component }) => (
                <Route 
                  key={path} 
                  path={path} 
                  render={ () => {
                    return <Component />
                  } }
                />
              ))
            }
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>

    </Suspense>
  );
}