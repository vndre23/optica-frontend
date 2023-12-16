import { createSlice } from '@reduxjs/toolkit'


export const loadingSlice = createSlice({
  name: 'loading',
  initialState:{
    isLoading:false
  },
  reducers: {
    toggleLoading: (state,{payload}) => {
      
      // state = payload;
      state.isLoading = payload;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { 
  toggleLoading
} = loadingSlice.actions

// export default counterSlice.reducer