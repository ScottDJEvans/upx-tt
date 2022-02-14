import EditComponentPage from "./pages/edit_component_page";
import PageNavigation from "./components/page_navigation";
import React from "react";

function App() {
  return (
      <>
        <PageNavigation
            currentPageTitle='Button'
            currentHomePage='MaterialUI'
        />
        <EditComponentPage />
      </>
  );
}

export default App;
