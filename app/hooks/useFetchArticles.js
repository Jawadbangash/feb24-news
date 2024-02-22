'use client';
import { useNews } from '../context/NewsContext';
import { useEffect } from 'react';

const useFetchArticles = () => {
  const { setArticles } = useNews();

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, [setArticles]);
};

export default useFetchArticles;
