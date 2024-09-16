const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
          min-h-screen flex items-center justify-center
          bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-100 bg-green-300 to-orange-200
        "
    >
      {children}
    </div>
  );
};

export default AuthLayout;
