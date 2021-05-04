const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@sideBar": path.resolve(__dirname, "src/components/SideBar"),
      "@main": path.resolve(__dirname, "src/components/Main"),
      "@grid": path.resolve(__dirname, "src/components/Grid"),
      "@avatar": path.resolve(__dirname, "src/components/Avatar"),
      "@summary": path.resolve(__dirname, "src/components/Summary"),
      "@contact": path.resolve(__dirname, "src/components/Contact"),
      "@education": path.resolve(__dirname, "src/components/Education"),
      "@workExperience": path.resolve(
        __dirname,
        "src/components/WorkExperience"
      ),
      "@coreCompetencies": path.resolve(
        __dirname,
        "src/components/CoreCompetencies"
      ),
      "@concept": path.resolve(
        __dirname,
        "src/components/CoreCompetencies/Concept"
      ),
      "@tech": path.resolve(__dirname, "src/components/CoreCompetencies/Tech"),
      "@frameworkOrLibrary": path.resolve(
        __dirname,
        "src/components/CoreCompetencies/FrameworkOrLibrary"
      ),
      "@tool": path.resolve(__dirname, "src/components/CoreCompetencies/Tool"),
    },
  },
};
