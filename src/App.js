import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css"; 
import { Button } from 'primereact/button';
import Sidebar from "./Shared/Components/Sidebar";
import Sidebar2 from "./Shared/Components/Sidebar2";
import Index from './Citas';
import RouterMain from "./Router/RouterMain";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import LandingPage from './LandingPage';
import { RouterPublic } from "./Router/RouterPublic";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "./Shared/Components/CheckingAuth";
import { useEffect } from "react";
import { login, logout } from "./store/slices/auth/authSlice";
import { useCheckAuth } from "./Shared/hooks/useCheckAuth";

function App() {
  
   const {status, checkAuthToken}=useCheckAuth();
   
  // const status = 'checking';

  useEffect(() => {
    checkAuthToken();
  }, [])


  if(status==='checking'){
    return <CheckingAuth/>
  }

  
  return (
    <>

      <Routes>
        {
          (status==='not-authenticated')
          ? (
            <>
              <Route path='/*' element={<RouterPublic/>}/>
              <Route path='/*' element={<Navigate to='/login'/>}/>
            </>
          )
          : (
            <>
              <Route path='/*' element={<RouterMain/>}/>
              {/* <Route path='/*' element={<Navigate to='/main/customers'/>}/> */}
            </>

          )

        }
        {/* <Route path='/*' element={<Navigate to='/login'/>} /> */}
        
      </Routes>
      
    
    
      
    </>
  );
}

export default App;
