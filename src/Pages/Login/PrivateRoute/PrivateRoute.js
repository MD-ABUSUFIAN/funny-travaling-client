import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
    Route,
    Redirect,
  } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
  

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    console.log(isLoading);
    if (isLoading) {
        return (<>
          <Button variant="primary">
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>{' '}
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </>)
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;




// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';



// const PrivateRoute = ({ children, ...rest}) => {
//     const {user, isLoading} = useAuth();
//     console.log(isLoading);
//     if (isLoading) {
//         return <p>lodding</p>
//     }
 
//     return (
//         <Route
//       {...rest}
//       render={({ location }) =>
//         user.email? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//     );
// };

// export default PrivateRoute;