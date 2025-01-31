'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';

export default function ImageGallery({ images = [] }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pathname = usePathname();

  const openSlider = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  }, []);

  const closeSlider = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        closeSlider();
      }
    },
    [closeSlider]
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeSlider();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, nextImage, prevImage, closeSlider]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} onClick={() => openSlider(index)} className="flex justify-center">
            <Image
              src={src}
              alt={`${pathname} image ${index + 1}`}
              width="300"
              height="300"
              className="max-h-60 self-center object-cover aspect-auto cursor-pointer transition-transform transform hover:scale-105"
              priority={pathname === '/archive'}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
          {...swipeHandlers}
        >
          <button onClick={closeSlider} className="absolute top-4 right-4 text-white text-6xl z-50">
            &times;
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-4xl flex items-center justify-center">
            <button onClick={prevImage} className="absolute left-0 text-white text-4xl p-4 z-50 sm:text-6xl">
              &lt;
            </button>
            <div className="relative w-full h-full">
              <Image
                src={images[currentImageIndex]}
                alt={`Exarchis image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            <button onClick={nextImage} className="absolute right-0 text-white text-4xl p-4 z-50 sm:text-6xl">
              &gt;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
