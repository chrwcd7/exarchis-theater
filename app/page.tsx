import Image from 'next/image';

import exarchisCoverImg from '../public/exarchis_cover.jpeg';

export default function Home() {
  return (
    <>
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Θέατρο Εξ Αρχής</h1>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <Image src={exarchisCoverImg} alt="Exarchis cover image" className="object-cover w-full h-auto" priority />
        </div>
        <div>
          <section className="mb-8">
            <p className="mb-4">Καλώς ορίσατε στην επίσημη ιστοσελίδα του θεάτρου ΕΞ ΑΡΧΗΣ.</p>
            <p className="mb-4">
              Εδώ θα βρείτε πληροφορίες για νέες και προηγούμενες παραστάσεις, εισιτήρια, μαθήματα θεάτρου και ό,τι αφορά την
              εμπειρία της υποκριτικής τέχνης.
            </p>
            <p className="mb-4">
              Το Εξ Αρχής ιδρύθηκε το 2004 από την ομάδα «Θεατρικοί Ορίζοντες» στα Εξάρχεια, όπου βρίσκεται μέχρι σήμερα. Στο
              χώρο στεγάζονται θέατρο και εργαστήρι θεάτρου. Επιπλέον, φιλοξενούνται πολιτιστικές εκδηλώσεις θεατρικού,
              μουσικού, αλλά και εικαστικού ενδιαφέροντος. Για όσους αγαπούν την τέχνη και αναζητούν μια ευκαιρία να συνδεθούν
              με τον μαγικό κόσμο του θεάτρου, το Εξ Αρχής και το δημιουργικό του εργαστήρι ανοίγουν τις πόρτες τους. Εκεί, η
              φαντασία συναντά την έκφραση, και οι ιστορίες ζωντανεύουν μέσα από την κίνηση, τη φωνή και την ψυχή.
            </p>
            <p>Είτε είστε έμπειροι θεατές, είτε νέοι στο χώρο, σας περιμένουμε στο Θέατρο Εξ Αρχής.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Μείνετε Συνδεδεμένοι</h2>
            <p>
              Ακολουθήστε μας στο{' '}
              <a href="https://www.facebook.com/ExArchesTheatro" target="_blank">
                Facebook
              </a>{' '}
              και το{' '}
              <a href="https://www.instagram.com/exarchis.theatre/" target="_blank">
                Instagram
              </a>{' '}
              για να λαμβάνετε τις τελευταίες ενημερώσεις σχετικά με τις επερχόμενες παραστάσεις, εκδηλώσεις, αλλά και
              παρασκηνιακές ματιές στις παραγωγές μας. Γίνετε μέλος της ομάδας μας και των όσων συμβαίνουν εντός και εκτός
              σκηνής.
            </p>
          </section>
          <section className="text-center">
            <p>Σας ευχαριστούμε που υποστηρίζετε το Θέατρο Εξ Αρχής. Ανυπομονούμε να σας δούμε από κοντά!</p>
          </section>
        </div>
      </div>
    </>
  );
}
