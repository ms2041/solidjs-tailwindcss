import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          <code>src/App.jsx</code> it the main file. Edit and save to reload and see your changes.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <div class="bg-blue-500 text-black p-4">Hello, Tailwind!</div>
      </header>
    </div>
  );
}

export default App;
