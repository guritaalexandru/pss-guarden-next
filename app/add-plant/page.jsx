import React from 'react';
import Nav from "@/js/components/Layout/Nav";
import Footer from "@/js/components/Layout/Footer";
import AddPlantPage from "@/js/components/Pages/AddPlantPage";
import ProtectedRoute from "@/js/components/Pages/ProtectedRoute";

export default function AddPlantIndex() {
  return (
      <main className="page-container relative">
          <Nav/>
          <ProtectedRoute>
              <div className={'content-container'}>
                  <h1 className={'text-5xl text-center mb-10 mt-10'}>
                      Add a plant to your garden!
                  </h1>
              </div>
              <AddPlantPage/>
          </ProtectedRoute>
          <Footer/>
      </main>
  );
}
