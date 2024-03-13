import React from 'react';
import Nav from "@/js/components/Layout/Nav";
import Footer from "@/js/components/Layout/Footer";
import ProtectedRoute from "@/js/components/Pages/ProtectedRoute";
import RemindersListingPage from "@/js/components/Pages/RemindersListingPage";

export default function RemindersIndex() {
  return (
      <main className="page-container relative">
          <Nav/>
          <ProtectedRoute>
              <div className={'content-container'}>
                  <h1 className={'text-5xl text-center mb-10 mt-10'}>
                      Your reminders
                  </h1>
              </div>
              <RemindersListingPage/>
          </ProtectedRoute>
          <Footer/>
      </main>
  );
}
