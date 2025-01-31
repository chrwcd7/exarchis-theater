'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import { articles } from '../articles';
import ImageGallery from '@/app/components/ImageGallery';

const NewsDetails = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <h2 className="text-2xl mb-2 font-bold">{article.title}</h2>
      <p className="text-secondary-foreground mb-4 font-normal italic">{article.date}</p>
      <div
        className="text-lg leading-relaxed text-foreground font-normal mb-8"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
      <ImageGallery images={article.images} />
    </>
  );
};

export default NewsDetails;
