import { create } from "zustand";

const useReportStore = create((set) => ({
  Reports: [],
  createReport: (Report) =>
    set((state) => ({
      Reports: [Report, ...state.Reports],
    })),
  setReport: (Reports) => set({ Reports }),
  deleteReport: (id) =>
    set((state) => ({
      Reports: state.Reports.filter((Report) => Report.id !== id),
    })),
}));

export default useReportStore;
