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
          className="mb-8 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 last:mb-0"
        >
          <Link href={`/news/${article.id}`} className="!no-underline">
            <h2 className="text-2xl mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4 font-normal">{article.date}</p>
            <p className="text-lg leading-relaxed text-black font-normal">{article.content}</p>
          </Link>
        </article>
      ))}
    </>
  );
};

export default News;
