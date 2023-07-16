import { createSlice } from "@reduxjs/toolkit";
import { Projects, uniqueItems } from "./data/projectData";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    projects: Projects,
    uniqueItems: uniqueItems,
    currentValue: [],
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateUniqueItems: (state) => {
      const allTechno = [];
      const allOutils = [];
      const allMethodologies = [];

      state.projects.forEach((project) => {
        allTechno.push(...project.techno);
        allOutils.push(...project.outils);
        allMethodologies.push(...project.methodologies);
      });

      const uniqueTechno = [...new Set(allTechno)].map((item) =>
        item.split(" ").slice(0, -1).join(" ")
      );
      const uniqueOutils = [...new Set(allOutils)].map((item) =>
        item.split(" ").slice(0, -1).join(" ")
      );
      const uniqueMethodologies = [...new Set(allMethodologies)].map((item) =>
        item.split(" ").slice(0, -1).join(" ")
      );

      state.uniqueItems = {
        techno: uniqueTechno,
        outils: uniqueOutils,
        methodologies: uniqueMethodologies,
      };
    },
  },
});

export const { addProject, updateUniqueItems } = dataSlice.actions;
export default dataSlice.reducer;
