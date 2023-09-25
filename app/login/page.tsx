import Login from "../components/users/login"; // Capitalize the component name

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Please Login</h1>
      <Login /> {/* Use capitalized component name */}
    </div>
  );
};

export default LoginPage;
