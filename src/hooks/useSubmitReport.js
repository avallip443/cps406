import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useState } from "react";
import useAuthStore from "../store/authStore";
import useReportStore from "../store/reportStoreStore";
import useShowToast from "./useShowToast";

const useSubmitReport = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);
  const createReport = useReportStore((state) => state.createReport);

  const handleSubmitReport = async (bugName, priorityLevel, bugDescription) => {
    if (isUpdating) return;

    setIsUpdating(true);


    const newReport = {
      bugName,
      priorityLevel,
      bugDescription,
      createdBy: authUser.uid,
      createdAt: Date.now(),
    };

    try {
      await updateDoc(doc(firestore, "reports", postID), {
        comments: arrayUnion(newReport),
      });

      createReport(newReport);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsCommenting(false);
    }
  };

  return { isCommenting, handlePostComment };
};

export default useSubmitReport;
