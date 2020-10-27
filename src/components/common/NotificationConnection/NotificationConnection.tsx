import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Toastify__toast Toastify__toast--default
const NotificationConnection = () => {
  const notify = () => toast(<div>Offline</div>, {
    // className: 'notify-offline',
  });

  const offline = () => notify();
  
  const online = () => {};

  useEffect(() => {
    window.addEventListener('offline', offline);
    window.addEventListener('online', online); 
    return (() => {
      window.removeEventListener('offline', offline);
      window.removeEventListener('online', online);
    })
    // eslint-disable-next-line
  }, []);

  return (
    <ToastContainer position="bottom-right" autoClose={false} closeOnClick={false} />
  )
}


export default NotificationConnection;