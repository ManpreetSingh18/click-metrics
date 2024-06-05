/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import Template from "./components/navbar/template"
import { Home, Links, QrCodes, LinkInBio, Analytics, Campaigns, CustomLinks, Settings, Help,NotFoundPage } from "./components/pages/index"
import Loader from "./components/ui/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />} >
          <Route index element={<Home />} />
          <Route path="links" element={<Links />} />
          <Route path="qr" element={<QrCodes url="www.google.com" />} />
          <Route path="link/in/bio" element={<LinkInBio />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="custom/links" element={<CustomLinks />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
