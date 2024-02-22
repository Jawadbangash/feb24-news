import React from 'react';
import { NewsProvider } from '../context/NewsContext';
import ArticleList from './features/ArticleList';
import Layout from './layout/Layout';

const Home = () => (
  <NewsProvider>
    <Layout>
      <ArticleList />
    </Layout>
  </NewsProvider>
);

export default Home;