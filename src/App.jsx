import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="João Vanelli"
            content="Conteúdo maneiro"
          />
          <Post 
            author="João Vanelli"
            content="Conteúdo mais maneiro"
          />
        </main>
      </div>
    </div>
  )
}
