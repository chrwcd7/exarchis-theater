import Image from 'next/image';

import eleniTsakalou from '../../public/eleni-tsakalou.jpeg';
import dinosSpyropoulos from '../../public/dinos-spyropoulos.jpg';

export default function AboutUs() {
  return (
    <div className="container mx-auto py-8 px-4">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Ελένη Τσακάλου</h1>
        <Image src={eleniTsakalou} alt="Ελένη Τσακάλου" width={200} height={200} className="mb-4 rounded-full" />
        <p className="text-lg">
          Η Ελένη Τσακάλου είναι μια εξαιρετικά ταλαντούχα ηθοποιός και σκηνοθέτης με πολυετή εμπειρία στο θέατρο. Με σπουδές
          στην υποκριτική και τη σκηνοθεσία, η Ελένη έχει συμμετάσχει σε πολλές επιτυχημένες παραγωγές, κερδίζοντας την
          αναγνώριση και τον σεβασμό του κοινού και των συναδέλφων της. Η αφοσίωσή της στην τέχνη και η αγάπη της για το θέατρο
          είναι εμφανής σε κάθε παράσταση που παρουσιάζει, προσφέροντας αξέχαστες εμπειρίες στους θεατές.
        </p>
      </section>
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Ντίνος Σπυρόπουλος</h1>
        <Image
          src={dinosSpyropoulos}
          alt="Ντίνος Σπυρόπουλος"
          width={200}
          height={200}
          className="mb-4 rounded-full object-cover"
        />
        <p className="text-lg">
          Ο Ντίνος Σπυρόπουλος είναι ένας εξαιρετικά ταλαντούχος ηθοποιός και σκηνοθέτης με πολυετή εμπειρία στο θέατρο. Με
          σπουδές στην υποκριτική και τη σκηνοθεσία, ο Ντίνος έχει συμμετάσχει σε πολλές επιτυχημένες παραγωγές, κερδίζοντας την
          αναγνώριση και τον σεβασμό του κοινού και των συναδέλφων του. Η αφοσίωσή του στην τέχνη και η αγάπη του για το θέατρο
          είναι εμφανής σε κάθε παράσταση που παρουσιάζει, προσφέροντας αξέχαστες εμπειρίες στους θεατές.
        </p>
      </section>
    </div>
  );
}
