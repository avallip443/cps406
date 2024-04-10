import useAuthStore from "../store/authStore";
import useReportStore from "../store/reportStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useEffect, useState } from "react";

const useGetBugReports = () => {
  const [isLoading, setIsLoading] = useState(true);
  const authUser = useAuthStore((state) => state.user);
  const { reports, setReport } = useReportStore();
  const showToast = useShowToast();

  useEffect(() => {
    const getBugReports = async () => {
        setIsLoading(true);
    }
    
  })

};
