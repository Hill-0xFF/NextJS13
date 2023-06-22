import styles from './page.module.css'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.navAbout}>About NavBar</nav>
      <main>{children}</main>
    </>
  );
};

export default layout;
