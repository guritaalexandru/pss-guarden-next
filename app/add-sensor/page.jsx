import React from 'react';
import Nav from "@/js/components/Layout/Nav";
import Footer from "@/js/components/Layout/Footer";
import AddSensorPage from "@/js/components/Pages/AddSensorPage";
import ProtectedRoute from "@/js/components/Pages/ProtectedRoute";

export default function AddSensorIndex() {
  return (
      <main className="page-container relative">
          <Nav/>
          <ProtectedRoute>
              <div className={'content-container'}>
                  <h1 className={'text-5xl text-center mb-10 mt-10'}>
                      Add a sensor!
                  </h1>
              </div>
              <AddSensorPage/>
          </ProtectedRoute>
          <Footer/>
      </main>
  );
}
