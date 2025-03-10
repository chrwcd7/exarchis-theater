import Image from 'next/image';

import eleniTsakalouImg from '../../public/eleni-tsakalou.jpg';
import dinosSpyropoulosImg from '../../public/dinos-spyropoulos.jpg';

export default function AboutUs() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">Οι Θεατρικοί Ορίζοντες</h1>
      <section className="mb-8">
        <p className="mb-4">
          Οι Θεατρικοί Ορίζοντες ιδρύθηκαν το 1991 και από τότε έως σήμερα παρουσιάζουν κλασικά θεατρικά έργα του παγκόσμιου
          ρεπερτορίου, όμως ταυτόχρονα αναδεικνύουν και Έλληνες θεατρικούς συγγραφείς. Σε μια δύσκολη περιοχή όπως είναι τα
          Εξάρχεια, το Θέατρο «Εξ Αρχής», στο οποίο στεγάζονται οι «Θεατρικοί Ορίζοντες», δημιούργησαν μια εστία πολιτισμού.
          Μέσα από την εστία αυτή, επιδιώκεται η προβολή θεατρικών παραστάσεων με καλλιτεχνικό και εκπαιδευτικό χαρακτήρα. Το
          κοινό των Θεατρικών Οριζόντων αποτελούν παιδιά, νέοι και ενήλικες κάθε ηλικίας. Διαχρονικά, η ΑΜΚΕ αποδεικνύει μέσω
          της ποικιλίας των παραγωγών και των έργων με τα οποία καταπιάνεται, πως ενδιαφέρεται για την τέχνη του θεάτρου
          ολιστικά.
        </p>
        <p>
          Βασικοί σταθμοί στην πορεία της εταιρείας (χρονολογικά) αποτελούν αρχικά οι παραστάσεις για παιδιά και εφήβους του
          Ντίνου Σπυρόπουλου, στη συνέχεια τα τρία έργα του Ευγένιου Ιονέσκο (Το μάθημα, Η φαλακρή τραγουδίστρια, Οι καρέκλες),
          το Δωμάτιο της Βερόνικας του Άιρα Λέβιν και η νέα εποχή έργων για παιδιά με τις διασκευές της Ελένης Τσακάλου στα
          κλασικά παραμύθια (Η Κοκκινοσκουφίτσα, Η Χιονάτη, Ο Κοντορεβιθούλης). Στη συνέχεια, τα Αυγά της Στρουθοκαμήλου του
          Χρήστου Ναούμ, η Κυρία με το σκυλάκι του Άντον Τσέχωφ, Τα Παντρολογήματα του Νικολάι Γκόγκολ, Η παρέλαση και ο Ουρανός
          κατακόκκινος της Λούλας Αναγνωστάκη, έδωσαν μία άλλη πνοή στο σύνολο των έργων που ανέβηκαν από τους Θεατρικούς
          Ορίζοντες.
        </p>
      </section>
      <div className="flex flex-col gap-4">
        <section className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center sm:items-start">
          <h1 className="text-4xl font-bold mb-4 text-center">Ελένη Τσακάλου</h1>
          <Image
            src={eleniTsakalouImg}
            alt="Ελένη Τσακάλου"
            className="w-40 h-40 mb-4 rounded-full object-cover object-top bg-accent"
          />
          <div className="line-clamp-5 hover:line-clamp-none lg:line-clamp-none">
            <p className="mb-4">
              Γεννήθηκε στη Στυλίδα Φθιώτιδας και μεγάλωσε στον Πειραιά. Μετά το λύκειο συνέχισε τις σπουδές της στην Ανώτερη
              Δραματική Σχολή Αθηνών του Βασίλη Ρίτσου και στο τμήμα Θεατρικών Σπουδών του Πανεπιστημίου Πατρών, απ&apos; όπου
              και αποφοίτησε το 2001. Έχει συνεργαστεί με τους: Αλίκη Βουγιουκλάκη (Καμπαρέ σκηνοθεσία Δημήτρης Ποταμίτης).
              Θανάση Βέγγο, Νίκο Ρίζο, Κώστα Βουτσά, Χάρρυ Κλυνν, Σωτήρη Μουστάκα, Μάρω Κοντού, Μάρθα Καραγιάννη, Ντίνο
              Ηλιόπουλο, (σε επιθεωρήσεις).
            </p>
            <p className="mb-4">
              Είναι ιδρυτικό στέλεχος του ΔΗ.ΠΕ.ΘΕ. Αγρινίου με συμμετοχές στα έργα: Κουραμπίδες του Γιώργου Χασάπογλου
              (Σκηνοθεσία. Ραΐα Μουζενίδου), Έχω στόχο Κύριε Πρόεδρε του Γιώργου Χαραλαμπίδη (Σκηνοθεσία: Γιώργος Χαραλαμπίδης),
              Η Αυλή των Θαυμάτων του Ιάκωβου Καμπανέλλη (Σκηνοθεσία: Νίκος Παπακωνσταντίνου), Χοηφόροι του Αισχύλου
              (Σκηνοθεσία: Κωνσταντίνος Μάριος). το Στραβόξυλο του Δημήτρη Ψαθά (Σκηνοθεσία: Πάνος Παπαϊωάννου).{' '}
            </p>
            <p className="mb-4">
              Συνεργάστηκε με το Θέατρο Κύβος στο έργο του Εντουάρντο ντε Φιλίππο Αχ αυτά τα Φαντάσματα! (Σκηνοθεσία: Γ.
              Γεωργιάδης), με το Θέατρο Μινώα στο έργο του Ντίνου Σπυρόπουλου Γιάφκα Πορτοκάλι (Σκηνοθεσία: Χάρρυ Κλύνν), με το
              Θέατρο Σταθμός στο έργο των Μιχάλη Άνθη και Ντίνου Σπυρόπουλου Δεν το Πιστεύω (σε σκηνοθεσία των συγγραφέων), με
              το Θέατρο Εξ Αρχής στα έργα του Ντίνου Σπυρόπουλου Λυσιστράτη Live, Γκόλφω Forever, και Είμαι Χάλια (σε σκηνοθεσία
              του συγγραφέα) και Ευγένιου Ιονέσκο, Το Μάθημα (Σκηνοθεσία: Σταύρος Καλός) και στην Αντιθεατρική Κωμωδία του
              Ευγένιου Ιονέσκο, Η Φαλακρή Τραγουδίστρια (Σκηνοθεσία: Ντίνος Σπυρόπουλος).
            </p>
            <p className="mb-4">
              Επιπλέον, έχει παίξει στα έργα Το δωμάτιο της Βερόνικα του Άιρα Λέβιν, τα αυγά της στρουθοκαμήλου του Χρήστου
              Ναούμ, τα Παντρολογήματα του Νικολάι Γκόγκολ, το έργο Ο ουρανός κατακόκκινος της Λούλας Αναγνωστάκη και τις
              συνθέσεις έργων του Αλέξανδρου Παπαδιαμάντη Άνθος του Γιαλού και Έρως Θάνατος. Τέλος, έχει πάρει μέρος στη
              θεατρική παράσταση Η κυρία με το σκυλάκι του Άντον Τσέχωφ.
            </p>
            <p>
              Στον τομέα του θεάτρου για παιδιά έχει εργαστεί ως ηθοποιός αλλά και σκηνοθέτρια στις παραστάσεις: Πες μου ένα
              παραμύθι, Παίζοντας με τον Αριστοφάνη, Η Χιονάτη, Ο Κοντορεβιθούλης, Η Κοκκινοσκουφίτσα. Είναι Διευθύντρια Σπουδών
              του Θεατρικού Εργαστηρίου Εξ Αρχής και είναι καθηγήτρια στην πρωτοβάθμια και δευτεροβάθμια εκπαίδευση στο μάθημα
              της Θεατρικής Αγωγής. Τηλεοπτικά, μία από τις τελευταίες δουλειές της ήταν το “Milky Way” του σκηνοθέτη Βασίλη
              Κεκάτου.
            </p>
          </div>
        </section>
        <section className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center sm:items-start">
          <h1 className="text-4xl font-bold mb-4 text-center">Ντίνος Σπυρόπουλος</h1>
          <Image
            src={dinosSpyropoulosImg}
            alt="Ντίνος Σπυρόπουλος"
            className="w-40 h-40 mb-4 rounded-full object-cover bg-accent"
          />
          <div className="line-clamp-5 hover:line-clamp-none lg:line-clamp-none">
            <p className="mb-4">
              Ο Ντίνος Σπυρόπουλος γεννήθηκε στo Καγκάδι Αχαΐας. Τελείωσε τη δραματική σχολή Βασίλη Ρίτσου. Έχει παίξει μεταξύ
              άλλων στο ΔΗ.ΠΕ.ΘΕ. Αγρινίου στα Έργα «Δύσκολος του Μένανδρου», «Ειρήνη» του Αριστοφάνη, «Ματωμένος Γάμος» του
              Λόρκα, «Σπασμένη στάμνα» του Κλάιστ, «Το Στραβόξυλο», του Ψαθά, «Η Ντέαντρη των θλίψεων» του Σινγκ. Στο ΔΗ.ΠΕ.ΘΕ.
              Σερρών στα έργα, «Τα καινούρια ρούχα του Βασιλιά» του Χ.Κ.Άντερσεν, «Οι Γερμανοί ξανάρχονται»,των Σακελάριου-
              Γιαννακόπουλου. Στο θίασο της Αλίκης Βουγιουκλάκη στο «Καμπαρέ». Θέατρο Αθηνά «Ιουλιέτα XL» (Πανοπούλου) Θέατρο
              Διάνα «Οι Γερμανοί ξανάρχονται» (Μουστάκας) Θέατρο Ζήνα «Το Σώσε», «Παράξενο ζευγάρι» (Κυριακίδης) Θέατρο
              προσκήνιο «Υπάρχει και φιλότιμο» (Μπέζος) Θεατρο Βέμπο. «Η δασκάλα με τα χρυσά μάτια» Θέατρο Βεάκη. «Κάποτε στο
              Βόσπορο» Θέατρο Αυλαία Θεσσαλονίκη.
            </p>
            <p>
              Τη θεατρική σεζόν 2024-25 εμφανίζεται στο Θέατρο Κάτια Δανδουλάκη στο έργο «Ο Αόρατος επισκέπτης». Συμμετείχε ως
              ηθοποιός σε πάνω από 40 επιθεωρήσεις σε όλα τα μεγάλα μουσικά θέατρα της Αθήνας γράφοντας παράλληλα και τα
              κείμενα. Υπήρξε συγγραφικό ντουέτο με το Χάρρυ Κλυνν από το 1998 έως το 2008. Έχει γράψει τα θεατρικά έργα:
              «Γκόλφω forever», «Αμοίρου Οδύσσεια», «Είμαι χάλια» (Έχουν εκδοθεί από τις εκδόσεις ΚΨΜ). «Κυρία Μπέμπα», «η
              Γιαγιά», «Λύκοι», «Ταλέντα για σκότωμα». «Η Κυρία με τας σαρδελίας» (Εκδόσεις Αιγόκερος) και το μυθιστόρημα
              «Φαρμακωμένη» (Εκδόσεις πρώτη ύλη).
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
