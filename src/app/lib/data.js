"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

const invoiceCountPromise = sql.query("SELECT COUNT(*) FROM Invoices");
const customersCountPromise = sql.query("SELECT COUNT(*) FROM Customers");

async function read(typeTable) {
  try {
    const data = await sql.query(`SELECT * FROM ${typeTable};`);
    return {
      message: "Data reded",
      code: 204,
      data,
    };
  } catch (error) {
    console.log(error);
  }
}

async function login(user) {
  const resultQuery = await sql.query(
    "SELECT * FROM Users WHERE email_user = ($1)",
    [user.email],
  );

  const userFounded = resultQuery.find(
    (userQuery) => userQuery.email_user === user.email,
  );

  if (!userFounded) {
    return {
      message: "user not found",
      code: 301,
    };
  }

  if (user.password === "" && user.email === "") {
    return {
      message: "entries empty",
      code: 302,
    };
  }

  if (userFounded.password_user !== user.password) {
    return {
      message: "invalid credentials",
      code: 303,
    };
  }

  return {
    message: "Success",
    code: 200,
    userFounded: userFounded,
  };
}

export { read, login };
