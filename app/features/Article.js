import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Article.module.css';

const Article = ({ title, excerpt, imageUrl }) => (
  <article className={styles.article}>
    {imageUrl && (
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={`Image for ${title}`}
          width={500}
          height={300}
          layout='responsive'
          objectFit='cover'
          loading='lazy'
        />
      </div>
    )}
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.excerpt}>{excerpt}</p>
  </article>
);

export default Article;
