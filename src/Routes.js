import React from "react";
import BlogDetails from "pages/BlogDetails";
import Error from "pages/Error";
import License from "pages/License";
import Listing from "pages/Listing";
import ContactPage from "pages/ContactPage";
import PropertyDetails from "pages/PropertyDetails";
import LandingPage from "pages/LandingPage";
import FAQ from "pages/FAQ";
import BlogPage from "pages/BlogPage";
import AgentProfile from "pages/AgentProfile";
import PrivacyPolicy from "pages/PrivacyPolicy";
import ListingMapView from "pages/ListingMapView";
import AgentList from "pages/AgentList";
import AboutUs from "pages/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/agentlist" element={<AgentList />} />
        <Route path="/listingmapview" element={<ListingMapView />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/agentprofile" element={<AgentProfile />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/license" element={<License />} />
        <Route path="/error" element={<Error />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
