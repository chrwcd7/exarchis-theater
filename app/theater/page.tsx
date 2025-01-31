import ImageGallery from '../components/ImageGallery';

export default function Theater() {
  const images = ['/exarchis1.jpg', '/exarchis2.jpg', '/exarchis3.jpg', '/exarchis4.jpeg'];

  return (
    <>
      <section className="text-lg mb-8">
        <p className="mb-4">
          Το Θέατρο Εξ Αρχής, στην καρδιά των Εξαρχείων, στην οδό Σπύρου Τρικούπη 44, αποτελεί έναν ζωντανό χώρο πολιτισμού και
          δημιουργίας. Στη σκηνή του έχουν παρουσιαστεί παραστάσεις από το παγκόσμιο ρεπερτόριο, καλύπτοντας ένα ευρύ φάσμα
          θεατρικών ειδών, ενώ παράλληλα δίνεται ιδιαίτερη έμφαση και στο θέατρο για παιδιά και νέους θεατές.
        </p>
        <p>
          Επιπλέον, το θέατρο προσφέρει τη δυνατότητα ενοικίασης του χώρου για πρόβες, καθώς και για πολιτιστικές εκδηλώσεις με
          κεντρικό άξονα την τέχνη, δημιουργώντας έναν ανοιχτό χώρο έκφρασης και συνεργασίας.
        </p>
      </section>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Φωτογραφίες του θεάτρου</h2>
        <ImageGallery images={images} />
      </div>
    </>
  );
}
