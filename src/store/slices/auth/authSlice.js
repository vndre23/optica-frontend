import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    token:null,
    user: {
        _id:null,
        email:null,
        firstName:null,
        lastName:null,
        numberDocument:null, 
        phone:null,
        address:null,
        typeDocument:null,
        gender:null,
    },
    status: 'checking', //checking, not-authentication, authenticated
    errorMessage:null,
  },
  reducers: {
    onLogin: (state, { payload }) => {
      //tranformed data
      const transformedData = payload?.user?.accesses.reduce((result, item) => {
        const existingItem = result.find((element) => element.path === item.path);
        if (existingItem) {
            existingItem.permisos.push(item.permiso);
        } else {
            result.push({
                name: item.name,
                icon: item.icon,
                path: item.path,
                permisos: [item.permiso],
            });
        }
        return result;
    }, []);
    //inicia el payload normal
      state.token=payload.token;
      state.user = {
        _id:payload.user._id,
        email:payload.user.email,
        firstName:payload.user.firstName,
        lastName:payload.user.lastName,
        numberDocument: payload.user?.numberDocument,
        phone:payload.user?.phone,
        address: payload.user?.address,
        typeDocument: payload?.user?.typeDocument,
        gender: payload.user?.gender,
        accesses: transformedData,
      };
      
      state.status= 'authenticated';
      state.errorMessage=null;
    },
    onLogout: (state, {payload}) => {
      state.token=null;
      state.user= {
        _id:null,
        email:null,
        firstName:null,
        lastName:null
      };
      state.status= 'not-authenticated';
      state.errorMessage=payload;
      
    },
    onChecking: (state) => {
      state.status = 'checking'
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const { 
  onLogin, onLogout, onChecking
} = authSlice.actions

// export default counterSlice.reducer