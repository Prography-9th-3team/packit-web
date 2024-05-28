'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Function to get the token from URL
      const getTokenFromURL = () => {
        const urlParams = new URLSearchParams(window.location.search);

        return urlParams.get('token');
      };

      // Save the token to a cookie and send a message to the parent window
      const saveTokenAndRedirect = () => {
        const token = getTokenFromURL();

        if (token) {
          document.cookie = `accessToken=${token}; path=/;`;
          // Send message to the parent window

          // Close the popup
          window.close();
          window.opener.postMessage({ tokenSaved: true }, window.location.origin);
        }
      };

      saveTokenAndRedirect();
    }
  }, [router]);

  return <div>Redirecting...</div>;
};

export default Redirect;
