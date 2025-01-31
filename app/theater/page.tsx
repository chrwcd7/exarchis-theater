import ImageGallery from '../components/ImageGallery';

export default function Theater() {
  const images = ['/exarchis1.jpg', '/exarchis2.jpg', '/exarchis3.jpg', '/exarchis4.jpeg'];

  return (
    <>
      <section className="text-center mb-8">
        <p className="text-lg">
          Καλώς ήρθατε στην επίσημη σελίδα του Θεάτρου Εξαρχής! Βρισκόμενο στην καρδιά της Αθήνας, το Θέατρο Εξαρχής είναι ένας
          ζωντανός και δυναμικός χώρος που αφιερώνεται στην παρουσίαση των καλύτερων σύγχρονων και κλασικών παραστάσεων στο
          κοινό μας.
        </p>
      </section>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Φωτογραφίες του θεάτρου</h2>
        <ImageGallery images={images} />
      </div>
    </>
  );
}
