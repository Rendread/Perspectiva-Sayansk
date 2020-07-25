import React, { createContext, useEffect } from 'react';

import 'firebase/database';

// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null);
export { FirebaseContext };

export default ({ children }) => {
  let firebase = {
    app: null,
    database: null,
  };

  // check if firebase app has been initialized previously
  // if not, initialize with the config we saved earlier

  // function to query Todos from the database and
  // fire a Redux action to update the items in real-time

  return <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>;
};
