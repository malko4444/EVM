import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../config/config";
export const addCand = createAsyncThunk(
    "collections/addCollection",
    async (newCandidate, { rejectWithValue }) => {
      try {
        // Reference to the dynamically created collection
        const collectionRef = doc(db, "candidate", newCandidate.name); 
console.log("data",collectionRef);

        // Set initial data with vote = 0
        await setDoc(collectionRef, { vote: 0,work:newCandidate.work });
        // console.log("collection name ",collectionName);
        
        return  newCandidate ;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
export const deleteCand = createAsyncThunk(
  "collections/deletedoc",
  async (docName)=>{
    try {
      console.log("delele");
      
      const docRef = doc(db, "candidate", docName);
       await deleteDoc(docRef);
       return docName ;
      
    } catch (error) {
      
    }
  }
)
  export const getCand = createAsyncThunk(
    "collections/getCollection",
    async()=>{
        try {
          
            const collectionRef = collection(db, "candidate");
            const querySnapshot = await getDocs(collectionRef);
            const candidates = querySnapshot.docs.map((doc) => ({
              id: doc.id, // Document ID
              ...doc.data(), // Document Data (vote, work, etc.)
            }));
      
            console.log("datat fetch",candidates);
            return candidates;
        }catch (error){
            console.log("error",error);
            
        }
            
    }
  )
const candidateSlice = createSlice({
    name: 'candidate',
    initialState: { candidate: [], status: null },
    extraReducers : (builder) => {builder
        .addCase (addCand.fulfilled, (state, action) => {
            state.candidate = [... state.candidate,action.payload]
            console.log('the state ',state.candidate);
            
        })
        .addCase (getCand.fulfilled, (state, action) => {
          state.candidate = action.payload;
          console.log("candidate ",state.candidate);
          
        })
        .addCase( deleteCand.fulfilled, (state, action) => {
          state.candidate = state.candidate.filter((item) => item.id !== action.payload);
        })
        
    }
})
export default candidateSlice.reducer;