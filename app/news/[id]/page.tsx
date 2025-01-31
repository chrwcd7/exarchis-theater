'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import { articles } from '../articles';

const NewsDetails = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <p className="text-gray-600 mb-4">{article.date}</p>
      <p className="text-lg leading-relaxed">{article.content}</p>
    </>
  );
};

export default NewsDetails;
