"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { login } from "./lib/data";
import { useState } from "react";
import { useRouter } from "next/navigation";

config.autoAddCss = false;

export default function HomePage() {
  const [user, setUser] = useState([]);
  const [stateLogin, setStateLogin] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const route = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStateLogin(true);

    const result = await login(user);

    if (result.code === 302) {
      setErrorState(true)
      return 
    }

    if (result.code !== 200) {
      setStateLogin(false);
      setErrorState(true);

      e.target.reset();
      return;
    }

    setErrorState(false)
    setStateLogin(true);
    route.push("/dashboard");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="flex flex-col h-dvh justify-center bg-[url('/bakgroundform.jpg')] bg-no-repeat bg-center bg-cover">
      {errorState && (
        <div className="px-3 py-4 bg-red-100 w-full max-w-[18rem] mx-auto">
          <p>Usuario o Contraseña invalidos!</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-[18rem] mx-auto p-5 bg-white/50 rounded-sm `}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="emxample@mail.com"
            name="email"
            className={`block px-2 py-3 border rounded-lg w-full mb-5 ${errorState ? "border-red-600" : ""}`}
            autoComplete="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="*******"
            name="password"
            className={`block px-2 py-3 border rounded-lg w-full mb-5 ${errorState ? "border-red-600" : ""}`}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <button className=" w-full px-3 py-2 rounded-lg bg-[#1db78c] text-white">
          {stateLogin ? "loading" : "Enviar"}
        </button>
      </form>
    </div>
  );
}
