import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const {state} = useNavigation()
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-4">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-4 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky -top-7 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky -top-35 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
