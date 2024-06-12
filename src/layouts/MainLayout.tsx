import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <section className="bg-gray-950 h-screen">
        <Outlet />
      </section>
    </>
  );
}
