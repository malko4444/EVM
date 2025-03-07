import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";
import { db,auth } from "../../config/config";
export const getCurrentUser = createAsyncThunk(
    "auth/currentUser",
    async (store)=>{
        try {
            // setLoading(true)
            onAuthStateChanged(auth,async(user) => {
                if (user) {
                  const uid = user.uid;
                  const docSnap = await getDoc(doc(db, "users",uid))
                    const dbUser = docSnap?.data()
                   console.log("dbuser in curent yser",dbUser)
                  store.dispatch(setUser(dbUser))
                  console.log("dbUser",dbUser);
                //   setLoading(false)
                } else{
                    // setLoading(false)
                }
              });
              return 
        } catch (error) {
            setLoading(false)
            console.log(error);
            
        }
         
    }
)



export const userLogin = createAsyncThunk(
    "auth/login",
    async (user) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
            const dbSnap = await getDoc(doc(db, "users", userCredential.user.uid)); // Corrected line
            const dbUser = dbSnap?.data();
            console.log("userLogin",userCredential);
            
            console.log("dbUser",dbSnap.data());
            
            return dbUser;
        } catch (error) {
            console.log("error", error);
        }
        
    }
);
export const signup = createAsyncThunk(
    "auth/signup",
    async (user) => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
            console.log("user credential",userCredential.user.uid);
            
            const userData = {
                email: user?.email,
                fullName: user?.fullName,
                password: user?.password,
                phone : user?.phone,
                uid:userCredential.user.uid
            }    
            await setDoc(doc(db, "users",userCredential.user.uid), userData);
        //     console.log("in login action",userCredential.uid);
            
        //     return null;
        console.log("user in slice", user);
        
        }
        catch(error){
            console.log("sinup error",error);
        }
    }
)

export const userLogout  = createAsyncThunk(
    'auth/logout',
    async ()=>{
        try {
            await  signOut(auth);
            return true;

            
        } catch (error) {
            
        }
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, status: null },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
            console.log("UserData that user signup",state.user)
        },
        
        
    },
    extraReducers : (builder) => {
        builder
        .addCase(userLogin.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = "logged in";
            console.log("user login with detail ", state.user);
            
        })
        .addCase(userLogout.fulfilled, (state, action) => {
            state.user = null;
        }
    )
}

})


export default authSlice.reducer;
export const {setUser} = authSlice.actions;