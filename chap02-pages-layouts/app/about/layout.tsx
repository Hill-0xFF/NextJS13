import aboutstyles from './page.module.css'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={aboutstyles.navAbout}>About NavBar</nav>
      <main>{children}</main>
    </>
  );
};

export default layout;
