import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useEffect, useState } from "react";
import useReportStore from "../store/reportStore";
import useShowToast from "./useShowToast";

const useGetBugReports = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setReport } = useReportStore();
  const showToast = useShowToast();
  const [reports, setReports] = useState([]); 

  const getBugReports = async () => {
    setIsLoading(true);

    try {
      const q = query(collection(firestore, "reports"));
      const querySnapshot = await getDocs(q);
      const fetchedReports = [];

      querySnapshot.forEach((doc) => {
        fetchedReports.push({ id: doc.id, ...doc.data() });
      });

      fetchedReports.sort((a, b) => b.createdAt - a.createdAt); // newest reports first

      setReports(fetchedReports); 
    } catch (error) {
      console.error("Error fetching bug reports: ", error);
      showToast("Error", "Failed to fetch bug reports", "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBugReports();
  }, [showToast, setReport]);

  const refreshBugReports = () => {
    setIsLoading(true);
    getBugReports();
  };

  return { isLoading, reports, refreshBugReports };
};

export default useGetBugReports;
