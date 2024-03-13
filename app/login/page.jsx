import React from 'react';
import Nav from "@/js/components/Layout/Nav";
import Footer from "@/js/components/Layout/Footer";
import LoginPage from "@/js/components/Pages/LoginPage";

export default function Login() {
  return (
      <main className="page-container relative">
          <Nav/>
          <div className={'content-container'}>
              <h1 className={'text-5xl text-center mb-10 mt-10'}>
                  Login!
              </h1>
          </div>
          <LoginPage/>
          <Footer/>
      </main>
  );
}
