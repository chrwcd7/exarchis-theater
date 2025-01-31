import ImageGallery from '../components/ImageGallery';

export default function Theater() {
  return (
    <>
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Θέατρο Εξαρχής</h1>
        <p className="text-lg">
          Καλώς ήρθατε στην επίσημη σελίδα του Θεάτρου Εξαρχής! Βρισκόμενο στην καρδιά της Αθήνας, το Θέατρο Εξαρχής είναι ένας
          ζωντανός και δυναμικός χώρος που αφιερώνεται στην παρουσίαση των καλύτερων σύγχρονων και κλασικών παραστάσεων στο
          κοινό μας.
        </p>
      </section>
      <ImageGallery />
    </>
  );
}
