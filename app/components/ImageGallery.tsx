import Image from 'next/image';

export default function ImageGallery() {
  const images = ['/exarchis1.jpg', '/exarchis2.jpg', '/exarchis3.jpg', '/exarchis4.jpg'];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Φωτογραφίες του θεάτρου</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={src}
              alt={`Exarchis image ${index + 1}`}
              width="300"
              height="300"
              className="object-cover aspect-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
