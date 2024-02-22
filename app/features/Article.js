import React from 'react';
import Image from 'next/image';
import styles from '../styles/Article.module.css'; // Ensure this path is correct

const Article = ({ title, summary, imageUrl }) => (
  <div className={styles.card}>
    {imageUrl && (
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={title} width={150} height={150} layout="responsive" />
      </div>
    )}
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
    </div>
  </div>
);

export default Article;
