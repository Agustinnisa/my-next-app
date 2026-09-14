import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <form>
      <div>
        <label>Name</label>
        <input name="name" type="text" placeholder="Nama" />
      </div>

      <div>
        <label>Email</label>
        <input name="email" type="email" required />
      </div>

      <div>
        <label>Password</label>
        <input name="password" type="password" required />
      </div>

      <button formAction={login}>Login</button>

      <button formAction={signup}>Sign Up</button>
    </form>
  );
}
