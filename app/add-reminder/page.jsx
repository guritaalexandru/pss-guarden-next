import React from 'react';
import Nav from "@/js/components/Layout/Nav";
import Footer from "@/js/components/Layout/Footer";
import AddReminderPage from "@/js/components/Pages/AddReminderPage";
import ProtectedRoute from "@/js/components/Pages/ProtectedRoute";

export default function AddReminderIndex() {
  return (
      <main className="page-container relative">
          <Nav/>
          <ProtectedRoute>
              <div className={'content-container'}>
                  <h1 className={'text-5xl text-center mb-10 mt-10'}>
                      Add a reminder!
                  </h1>
              </div>
              <AddReminderPage/>
          </ProtectedRoute>
          <Footer/>
      </main>
  );
}
