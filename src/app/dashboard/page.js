import Link from "next/link";

// El ID de las facturas se compone de 'f + total de facturas + c + ID cliente - ID ultima factura'

export default function Page() {
  const userActive = {
    userName: "Juan",
  };
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-2xl">
        <h2>
          Gestfacts
        </h2>
      </div>

      <div className="mb-20">
        <span className="block text-xl pb-5">
          Bienvenido
        </span>
        <p>
          {userActive.userName} este es tu dashboard interactivo, para
          utilizar todo realiza tu primera accion completando tu perfil{" "}
          <Link href={"/customars/profile"} className="text-blue-600">
            Actualizar perfil.
          </Link>
        </p>
      </div>
    </div>
  );
}
