import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addVote, getCand } from "../../store/slices/candidateSlice";
import cartoonAnimation from "../../asset/ani.json"; // Lottie file

export default function Vote() {
  const candidates = useSelector((state) => state.candidateSlice.candidate);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    dispatch(getCand());
  }, [dispatch]);

  // **Yup Validation Schema**
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed")
      .required("Full Name is required"),
    fatherName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed")
      .required("Father's Name is required"),
    cnic: Yup.string()
      .matches(/^\d{5}-\d{7}-\d{1}$/, "CNIC must be in XXXXX-XXXXXXX-X format")
      .required("CNIC is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.date().required("Date of Birth is required"),
    address: Yup.string().min(5, "Address is too short").required("Address is required"),
    selectedCandidate: Yup.string().required("Please select a candidate"),
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <motion.div
        className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animation */}
        <motion.div
          className="flex justify-center items-center mb-4"
          initial={{ y: -10 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Lottie animationData={cartoonAnimation} className="w-40 h-40" />
        </motion.div>

        {/* Alert Message */}
        {alert && (
          <motion.div
            className={`p-3 rounded-lg text-white text-center font-semibold ${
              alert.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {alert.message}
          </motion.div>
        )}

        {/* Formik Form */}
        <Formik
          initialValues={{
            fullName: "",
            fatherName: "",
            cnic: "",
            gender: "",
            dob: "",
            address: "",
            selectedCandidate: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(addVote(values))
              .unwrap()
              .then(() => {
                setAlert({ type: "success", message: "Vote successfully submitted!" });
                resetForm();
              })
              .catch(() => {
                setAlert({ type: "error", message: "Failed to submit vote. Try again." });
              })
              .finally(() => {
                setSubmitting(false);
                setTimeout(() => setAlert(null), 3000);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 mt-4">
              {/* Full Name */}
              <div>
                <label className="block font-medium">Full Name</label>
                <Field type="text" name="fullName" className="w-full p-2 border rounded-lg" placeholder="Enter your full name" />
                <ErrorMessage name="fullName" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Father's Name */}
              <div>
                <label className="block font-medium">Father's Name</label>
                <Field type="text" name="fatherName" className="w-full p-2 border rounded-lg" placeholder="Enter your father's name" />
                <ErrorMessage name="fatherName" component="p" className="text-red-500 text-sm" />
              </div>

              {/* CNIC */}
              <div>
                <label className="block font-medium">CNIC</label>
                <Field type="text" name="cnic" className="w-full p-2 border rounded-lg" placeholder="XXXXX-XXXXXXX-X" />
                <ErrorMessage name="cnic" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Gender */}
              <div>
                <label className="block font-medium">Gender</label>
                <Field as="select" name="gender" className="w-full p-2 border rounded-lg">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="gender" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block font-medium">Date of Birth</label>
                <Field type="date" name="dob" className="w-full p-2 border rounded-lg" />
                <ErrorMessage name="dob" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Address */}
              <div>
                <label className="block font-medium">Address</label>
                <Field type="text" name="address" className="w-full p-2 border rounded-lg" placeholder="Enter your address" />
                <ErrorMessage name="address" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Select Candidate */}
              <div>
                <label className="block font-medium">Select Your Candidate</label>
                <Field as="select" name="selectedCandidate" className="w-full p-2 border rounded-lg">
                  <option value="">Select a Candidate</option>
                  {candidates.length > 0 ? (
                    candidates.map((candidate) => (
                      <option key={candidate.id} value={candidate.id}>
                        {candidate.id}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No candidates available
                    </option>
                  )}
                </Field>
                <ErrorMessage name="selectedCandidate" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Submit Button */}
              <motion.button type="submit" className="w-full bg-green-700 text-white p-2 rounded-lg hover:bg-green-900" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={isSubmitting}>
                {isSubmitting ? "Voting..." : "Submit Vote"}
              </motion.button>
            </Form>
          )}
        </Formik>
      </motion.div>

      <Footer />
    </div>
  );
}
