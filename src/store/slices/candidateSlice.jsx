import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, increment, setDoc, updateDoc } from "firebase/firestore";
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


export const addVote = createAsyncThunk(
  "collections/addVote",
  async (userData, { rejectWithValue }) => {
    try {
      console.log("Voter Info:", userData);

      const voterRef = doc(db, "cnic", "data"); // Reference to the document "data"
      const voterSnap = await getDoc(voterRef);
      console.log("data",voterSnap);
      

      if (voterSnap.exists()) {
        const existingData = voterSnap.data();
        const existingCNICs = existingData.cnic || [];

        // Check if user CNIC already exists
        const randomCnic = Math.floor(1000000000000 + Math.random() * 9000000000000); // 13-digit number
console.log(randomCnic);

        if (existingCNICs.includes(randomCnic)) {
          return rejectWithValue("You have already voted.");
        }

        // Append new CNIC to the array
        await updateDoc(voterRef, {
          cnic: arrayUnion(randomCnic), // Firebase method to add unique values to an array
        });
      } else {
        // Create the "data" document if it doesn't exist
        await setDoc(voterRef, { cnic: [randomCnic] });
      }

      // Increment the vote count for the candidate
      const candidateRef = doc(db, "candidate", userData.candidate);
      const candidateSnap = await getDoc(candidateRef);
      console.log("candidateSnap",candidateSnap);
      

      if (candidateSnap.exists()) {
        console.log("in the increment block");
        
        await updateDoc(candidateRef, {
          vote: increment(1), // Increment vote count by 1
        });
      } else {
        return rejectWithValue("Candidate does not exist.");
      }

      return "Vote submitted successfully!"; // ✅ Return success message
    } catch (error) {
      return rejectWithValue(error.message); // ✅ Return error message
    }
  }
);

  
const candidateSlice = createSlice({
    name: 'candidate',
    initialState: { face : null,candidate: [], status: null },
    reducers: {
      
      setFace:(state,action)=>{
        console.log("face detection",action.payload);
        
        state.face = action.payload
        console.log("face in slice",state.face.features);
        
    }
    },
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
export const { setFace } = candidateSlice.actions;