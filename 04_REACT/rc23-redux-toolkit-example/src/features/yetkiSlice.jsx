import { createSlice } from "@reduxjs/toolkit";


const yetkiSlice = createSlice({

  name:"yetkiSlice",
  initialState:{
    email:"",
    password:""
  },

  reducers:{
    createUser:(state, {payload}) => {
      state.email = payload.email;
      state.password = payload.password;
      // console.log(payload); email:dyg.@gmail.com, password:123456 olarak gördüm payloadu. yani dispatch ile gönderdiğim objeyi gördüm.

      //axios.post(URL, state.email, state.password) --- IGNORE --- bu şekilde backend'e de gönderebilirim. yani state'i backend'e gönderebilirim.
      //axios.post(URL, payload) --- IGNORE --- bu şekilde de gönderebilirim. yani payload'u da backend'e gönderebilirim.

    },

    removeUser:(state) => {
      state.email="";
      state.password="";
    }

  }



})

export const {createUser,removeUser} = yetkiSlice.actions
export default yetkiSlice.reducer