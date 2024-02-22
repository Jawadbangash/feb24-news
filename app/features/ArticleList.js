import React, { useContext } from 'react';
import Article from './Article';
import { NewsContext } from '../context/NewsContext';

const ArticleList = () => {
  const { articles } = useContext(NewsContext);

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;
