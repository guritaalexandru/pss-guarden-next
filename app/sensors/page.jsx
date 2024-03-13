import React from 'react';
import Nav from "@/js/components/Layout/Nav";
import Footer from "@/js/components/Layout/Footer";
import ProtectedRoute from "@/js/components/Pages/ProtectedRoute";
import SensorsListingPage from "@/js/components/Pages/SensorsListingPage";

export default function SensorsIndex() {
  return (
      <main className="page-container relative">
          <Nav/>
          <ProtectedRoute>
              <div className={'content-container'}>
                  <h1 className={'text-5xl text-center mb-10 mt-10'}>
                      Your sensors
                  </h1>
              </div>
              <SensorsListingPage/>
          </ProtectedRoute>
          <Footer/>
      </main>
  );
}
