import './App.css'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './utils/userSlice'
import { clearGPTSearchResults, setGPTToggleState } from './utils/gptSlice'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {

        const displayName = user.displayName;
        const email = user.email;
        dispatch(addUser({ displayName, email }));
        navigate('/browse');

      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
        dispatch(clearGPTSearchResults());
        dispatch(setGPTToggleState(false));
      }
    });
    return ()=>unsubscribe();
  }, []);

  return (
    <>

      <div className="App">
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default App
