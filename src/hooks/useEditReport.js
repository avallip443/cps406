import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useState } from "react";
import useShowToast from "./useShowToast";

const useEditReport = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const showToast = useShowToast();

  const editReport = async (reportId, newReportData) => {
    if (isUpdating) {
      return;
    }
    setIsUpdating(true);
    const reportRef = doc(firestore, "reports", reportId);

    try {
      const updatedReportData = {
        ...newReportData,
      };

      await updateDoc(reportRef, updatedReportData);
      setIsUpdating(false);
      showToast("Success", "Bug report updated successfully", "success");
    } catch (error) {
      showToast("Error", "Failed to edit bug report", "error");
      setIsUpdating(false);
    }
  };

  return { editReport };
};

export default useEditReport;
