import { auth } from "../firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  const logoutUser = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await signOut();
      console.log("User successfully logged out");
      logoutUser();
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { handleLogout, isLoggingOut, error };
};

export default useLogout;
