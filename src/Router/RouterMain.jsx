import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Clientes from '../Clientes';


import Sidebar2 from '../Shared/Components/Sidebar2';
import Usuarios from '../Trabajador';
// import NotFound from '../NotFound';
import Recetas from '../Prescriptions';
import  CreateUpdatePrescription  from '../PrescriptionsCreateOrUpdate';
import CustomerPrescription from '../CustomerPrescription';
import Configurations from '../Configurations';
import { useSelector } from 'react-redux';
// import { CheckingAuth } from '../Shared/Components/CheckingAuth';
import { CheckingLoading } from '../Shared/Components/checkingLoading';
function RouterMain() {
  
  const {isLoading} = useSelector(state=>state.loading);

  if(isLoading){
    return <CheckingLoading/>
  }
  return (
    <>
        
{/*             
                <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                </Routes> */}
            <Sidebar2>
              
                  <Routes>
                    {/* <Route path='/main'> */}
                      <Route path={process.env.REACT_APP_ROUTE_CUSTOMERS} element={<Clientes/>}/>
                      <Route path={`${process.env.REACT_APP_CUSTOMERS_PRESCRIPTIONS}/:customerId`} element={<CustomerPrescription/>}/>
                      <Route path={process.env.REACT_APP_ROUTE_PRESCRIPTIONS} element={<Recetas/>}/>
                      <Route path={process.env.REACT_APP_ROUTE_PRESCRIPTIONS_FORM} element={<CreateUpdatePrescription/>}/>
                      <Route path={`${process.env.REACT_APP_ROUTE_PRESCRIPTIONS_FORM}/:_id`} element={<CreateUpdatePrescription/>}/>
                      <Route path={process.env.REACT_APP_ROUTE_USERS} element={<Usuarios/>}/>
                      <Route path={process.env.REACT_APP_CONFIGURATIONS} element={<Configurations/>}/>
                      {/* <Route path="/*" element={<NotFound/>}/> */}
                    {/* </Route> */}
                    
                </Routes>
              
                
            </Sidebar2>       
        
                
                
            
        
    </>
  )
}

export default RouterMain