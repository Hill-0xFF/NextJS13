import '../globals.css';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>About NavBar</nav>
      <main>{children}</main>
    </>
  );
};

export default layout;
