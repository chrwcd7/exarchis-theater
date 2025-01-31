import Image from 'next/image';

export default function ImageGallery() {
  const images = ['/exarchis1.jpg', '/exarchis2.jpg', '/exarchis3.jpg', '/exarchis4.jpg'];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Φωτογραφίες του θεάτρου</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Exarchis image ${index + 1}`}
              width="300"
              height="300"
              className="object-cover aspect-auto cursor-pointer transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
