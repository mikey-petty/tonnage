import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.div__header}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tonnages</h1>
      </header>
    </div>
  );
}
