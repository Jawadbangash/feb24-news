'use client';

import React, { createContext } from 'react';

const NewsContext = createContext({
  articles: [],
  setArticles: () => {},
});

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = React.useState([
    // Synthetic data
    { id: 1, title: 'Article Title 1', summary: 'Summary of the first article.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Article Title 2', summary: 'Summary of the second article.', imageUrl: 'https://via.placeholder.com/150' },
    // Add more articles as needed
  ]);

  return (
    <NewsContext.Provider value={{ articles, setArticles }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = React.useContext(NewsContext);
  if (!context) {
    throw new Error(`useNews must be used within a NewsProvider`);
  }
  return context;
};

export default NewsContext;
