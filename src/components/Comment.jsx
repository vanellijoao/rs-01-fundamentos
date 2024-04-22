import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/vanellijoao.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Vanelli</strong>
              <time title="11 de maio às 08:13h" dateTime="2024-05-08 08:14:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
