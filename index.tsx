import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service Worker Registration for Production
<<<<<<< HEAD
if ((import.meta as any).env?.PROD && 'serviceWorker' in navigator) {
=======
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
>>>>>>> f9c9ca0a7ba8a69214a1c68467ff8d4d1f99e180
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('FCM Service Worker registered:', registration.scope);
      })
      .catch((err) => {
        console.error('FCM Service Worker registration failed:', err);
      });
  });
}