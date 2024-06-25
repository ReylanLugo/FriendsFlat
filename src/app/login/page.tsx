import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center bg-slate-50 px-16 py-12"
      }
    >
      <form
        className={
          "flex flex-col gap-2 rounded-lg bg-white px-4 py-6 shadow shadow-slate-300 md:w-1/3"
        }
      >
        <label htmlFor="email">Email:</label>
        <input
          className={"w-full rounded-full bg-slate-100 px-4 py-2"}
          id="email"
          name="email"
          type="email"
          placeholder={'"XJpjI@example.com"'}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className={"w-full rounded-full bg-slate-100 px-4 py-2"}
          id="password"
          name="password"
          type="password"
          placeholder={"********"}
          required
        />
        <div className={"mt-3 flex gap-3"}>
          <button
            className={
              "w-6/12 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            }
            formAction={login}
          >
            Log in
          </button>
          <button
            className={
              "w-6/12 rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            }
            formAction={signup}
          >
            Sign up
          </button>
        </div>
      </form>
    </main>
  );
}
