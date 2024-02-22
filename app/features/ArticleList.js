'use client';
import React from 'react';
import Article from './Article';
import { useNews } from '../context/NewsContext'; 
import styles from '../styles/ArticleList.module.css';

const ArticleList = () => {
  const { articles } = useNews(); // This uses the custom hook for context

  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;