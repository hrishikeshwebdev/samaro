"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "@/components/Topbar/Topbar";
import { useEffect } from "react";
import "./globals.css";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Design from "@/components/Design/Design";
import Spclvt from "@/components/SPCLVT/Spclvt";
import Benefits from "@/components/Benefits/Benefits";


export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main>
      <Topbar></Topbar>
      <Header></Header>
      <Banner></Banner>
      <Spclvt></Spclvt>
      <Design></Design>
      <Benefits></Benefits>
    </main>
  );
}
