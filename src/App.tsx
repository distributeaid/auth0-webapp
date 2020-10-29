import React, { useState } from 'react';
import { LoginButton } from './LoginButton';

import { useAuth0, IdToken } from '@auth0/auth0-react';
import { LogoutButton } from './LogoutButton';

export const App = () => {
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0();
  const [idToken, setIdToken] = useState<IdToken>();

  if (isAuthenticated) {
    getIdTokenClaims().then(setIdToken);
  }
  return (
    <main>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {isAuthenticated && (
        <>
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {idToken && <pre>{JSON.stringify(idToken, null, 2)}</pre>}
          </div>
        </>
      )}
    </main>
  );
};
