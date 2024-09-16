const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
          min-h-screen flex items-center justify-center
          bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-600 to-neutral-900
        "
    >
      {children}
    </div>
  );
};

export default AuthLayout;
