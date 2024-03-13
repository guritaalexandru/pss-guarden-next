import React from 'react';
import Nav from "@/js/components/Layout/Nav";
import Footer from "@/js/components/Layout/Footer";
import RegisterPage from "@/js/components/Pages/RegisterPage";

export default function Register() {
  return (
      <main className="page-container relative">
          <Nav/>
          <div className={'content-container'}>
              <h1 className={'text-5xl text-center mb-10 mt-10'}>
                  Register!
              </h1>
          </div>
          <RegisterPage/>
          <Footer/>
      </main>
  );
}
