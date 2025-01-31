'use client';

import React from 'react';
import Link from 'next/link';

import { articles } from './articles';

const News = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Νέα</h1>
      {articles.map((article) => (
        <article
          key={article.id}
          className="mb-8 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <Link href={`/news/${article.id}`}>
            <h2 className="text-2xl font-bold mb-2 text-blue-500">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.date}</p>
            <p className="text-lg leading-relaxed">{article.content}</p>
          </Link>
        </article>
      ))}
    </>
  );
};

export default News;
