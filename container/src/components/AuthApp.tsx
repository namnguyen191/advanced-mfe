import React, { useEffect } from 'react';
import { mount } from 'authApp/AuthApp';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'auth-root': any;
    }
  }
}

const AuthApp: React.FC = () => {
  useEffect(() => {
    mount();
  }, []);

  return (
    <>
      <auth-root></auth-root>
    </>
  );
};

export default AuthApp;
