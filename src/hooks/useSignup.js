import { auth, firestore } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useSignup = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);
  const showToast = useShowToast();

  const signup = async (inputs) => {
    // show error if there are empty fields
    if (!inputs.fullname || !inputs.email || !inputs.password) {
      showToast("Error", "Please fill in the fields", "error");
      return;
    }

    /* checks for duplicate registerd emails  */
    const userRef = collection(firestore, "users");
    const q = query(userRef, where("email", "==", inputs.email));
    const querySnapshot = await getDocs(q);

    /* user name exists */
    if (!querySnapshot.empty) {
      showToast("Error", "Email already exists", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }

      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          fullname: inputs.fullname,
          email: inputs.email,
        };

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signup };
};

export default useSignup;
