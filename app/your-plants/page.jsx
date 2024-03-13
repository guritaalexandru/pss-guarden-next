import React from 'react';
import PlantsListingPage from "@/js/components/Pages/PlantsListingPage";
import Nav from "@/js/components/Layout/Nav";
import Footer from "@/js/components/Layout/Footer";
import ProtectedRoute from "@/js/components/Pages/ProtectedRoute";

export default function Home() {
  return (
      <main className="page-container relative">
          <Nav/>
          <ProtectedRoute>
            <PlantsListingPage/>
          </ProtectedRoute>
          <Footer/>
      </main>
  );
}
