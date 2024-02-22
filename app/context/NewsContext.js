import React, { createContext, useState, useEffect } from 'react';
import { fetchArticles } from '../utils/api';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => setArticles(data));
  }, []);

  return (
    <NewsContext.Provider value={{ articles }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;