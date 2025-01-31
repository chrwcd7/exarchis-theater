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
          className="mb-8 bg-card p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 last:mb-0"
        >
          <Link href={`/news/${article.id}`} className="!no-underline dark:text-teal-500">
            <h2 className="text-2xl mb-2">{article.title}</h2>
            <p className="text-secondary-foreground mb-4 font-normal italic">{article.date}</p>
            <div
              className="text-lg leading-relaxed text-foreground font-normal line-clamp-3"
              dangerouslySetInnerHTML={{ __html: article.content }}
            >
            </div>
          </Link>
        </article>
      ))}
    </>
  );
};

export default News;
