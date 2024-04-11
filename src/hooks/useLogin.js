import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useLogin = () => {
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);
  const showToast = useShowToast();

  const login = async (inputs) => {
    /* shows error if email or password is empty */
    if (!inputs.email || !inputs.password) {
      showToast("Error", "Please fill in the fields", "error");
    }

    try {
      /* checks if email & password is correct login */
      const userCredential = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (userCredential) {
        const docRef = doc(firestore, "users", userCredential.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, login };
};

export default useLogin;
