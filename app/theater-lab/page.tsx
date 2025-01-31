import { promises as fs } from 'fs';
import path from 'path';

import ImageGallery from '../components/ImageGallery';

export default async function TheaterLab() {
  // Retrieve all image filenames from the theater-lab directory
  const imageDirectory = path.join(process.cwd(), '/public/theater-lab');
  const imageFilenames = (await fs.readdir(imageDirectory)).map((filename) => `/theater-lab/${filename}`);

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">Εργαστήρι Θεάτρου στο «Θέατρο Εξ Αρχής»</h1>
      <section className="mb-8">
        <p className="mb-4">
          Το Θέατρο Εξ Αρχής προσφέρει ένα εργαστήρι θεάτρου που λειτουργεί με επιτυχία από το 2004, με μαθήματα σχεδιασμένα για
          διαφορετικές ανάγκες:
        </p>
        <ul className="list-disc list-inside">
          <li className="font-bold">Προετοιμασία για ανώτερες δραματικές σχολές.</li>
          <li>
            <span className="font-bold">Ανάπτυξη δεξιοτήτων υποκριτικής τέχνης,</span> τόσο για επαγγελματική όσο και προσωπική
            εξέλιξη.
          </li>
          <li>
            <span className="font-bold">Εκπαίδευση για ειδικούς επαγγελματίες</span> όπως είναι οι καθηγητές, δικηγόροι και
            δημόσιοι ομιλητές, εστιάζοντας σε τεχνικές ορθοφωνίας και παρουσίασης.
          </li>
          <li>
            <span className="font-bold">Θεατρική εκπαίδευση για οποιονδήποτε</span> ενδιαφέρεται να γνωρίσει τον κόσμο του
            θεάτρου.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Διεύθυνση Σπουδών</h2>
        <p className="mb-4">Ελένη Τσακάλου (Θεατρολόγος, Ηθοποιός)</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Μαθήματα</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Υποκριτική</li>
          <li>Αυτοσχεδιασμός</li>
          <li>Ιστορία Θεάτρου</li>
          <li>Δραματολογία</li>
          <li>Ποίηση</li>
          <li>Χορός-Κίνηση</li>
          <li>Ορθοφωνία</li>
          <li>Ψυχοτεχνική</li>
          <li>Σκηνογραφία</li>
          <li>Ένδυμα</li>
          <li>Σκηνοθετικές προσεγγίσεις</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Διάρκεια και Φοίτηση</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Το πρόγραμμα είναι τριετές, με βεβαίωση φοίτησης μετά την ολοκλήρωση των απαιτούμενων ωρών.</li>
          <li>
            Η τριετής φοίτηση δεν είναι υποχρεωτική. Οι σπουδαστές μπορούν να αφιερώσουν το χρόνο που επιθυμεί ο καθένας
            προκειμένου να έρθουν σε επαφή με το θέατρο.
          </li>
          <li>Υπάρχει δυνατότητα ευέλικτου ωραρίου σε ομαδικά ή ιδιαίτερα μαθήματα.</li>
          <li>Παρέχεται επίσης η δυνατότητα online μαθημάτων.</li>
        </ul>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Επικοινωνία</h2>
        <p className="mb-4">
          Για περισσότερες πληροφορίες, καλέστε στο{' '}
          <a href="tel:+306977023168" className="text-teal-500 hover:underline">
            (+30) 697 702 3168
          </a>
          .
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">Φωτογραφικό αρχείο από το εργαστήρι μας</h2>
        <ImageGallery images={imageFilenames} />
      </section>
    </>
  );
}
