import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    alert(`Submitted`);
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: "Email is required" })}
              style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">
            Password
            <input
              id="password"
              type="password"
              placeholder="********"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password minimum 6 characters",
                },
              })}
              style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
