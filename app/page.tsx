"use client";
import Home from "./(general)/home/page";
import Footer from "./shared/components/footer";
import Navbar from "./shared/components/navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}
