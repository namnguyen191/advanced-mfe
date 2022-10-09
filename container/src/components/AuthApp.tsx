import React, { useEffect } from 'react';
import { mount } from 'authApp/AuthApp';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'auth-root': any;
    }
  }
}

export const AuthApp: React.FC = () => {
  useEffect(() => {
    mount();
  }, []);

  return (
    <>
      <auth-root></auth-root>
    </>
  );
};
