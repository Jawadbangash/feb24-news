import React from 'react';
import { NewsProvider } from '../context/NewsContext';
import ArticleList from '../components/features/ArticleList';
import Layout from '../components/layout/Layout';

const Home = () => (
  <NewsProvider>
    <Layout>
      <ArticleList />
    </Layout>
  </NewsProvider>
);

export default Home;