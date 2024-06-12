import { useEffect } from "react";
import { socketClient } from "../lib";
import { useAuthStore } from "../store";

export function Home() {
  const auth = useAuthStore((state) => state.auth);

  useEffect(() => {
    socketClient.on("connect", () => {
      console.log("connected");
    });

    console.log(auth);
  }, [auth]);

  return (
    <section>
      <h1>Home page</h1>
    </section>
  );
}
