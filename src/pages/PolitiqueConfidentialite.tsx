import { Link } from "react-router-dom";

const PolitiqueConfidentialite = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair mb-8">Politique de confidentialité</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-playfair mb-4">1. Collecte des données</h2>
              <p className="text-muted-foreground">
                Alcarys collecte les données personnelles que vous nous communiquez 
                volontairement via notre formulaire de contact : nom, prénom, téléphone, 
                email, adresse et informations relatives à votre demande.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">2. Utilisation des données</h2>
              <p className="text-muted-foreground">
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Répondre à vos demandes de renseignements</li>
                <li>Organiser votre évaluation à domicile</li>
                <li>Vous proposer nos services d'aide à domicile</li>
                <li>Assurer le suivi de nos prestations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">3. Protection des données</h2>
              <p className="text-muted-foreground">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
                appropriées pour protéger vos données contre tout accès non autorisé, 
                modification, divulgation ou destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">4. Durée de conservation</h2>
              <p className="text-muted-foreground">
                Vos données sont conservées pendant la durée nécessaire aux finalités 
                pour lesquelles elles ont été collectées, et conformément aux 
                obligations légales applicables.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">5. Vos droits</h2>
              <p className="text-muted-foreground">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Pour exercer ces droits, contactez-nous à : contact@alcarys.fr
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">6. Cookies</h2>
              <p className="text-muted-foreground">
                Notre site utilise des cookies techniques nécessaires à son bon 
                fonctionnement. Aucun cookie publicitaire n'est utilisé.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">7. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question relative à cette politique de confidentialité, 
                vous pouvez nous contacter :<br /><br />
                Email : contact@alcarys.fr<br />
                Téléphone : 01 00 00 00 00<br />
                Adresse : Neuilly-sur-Marne, 93330
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/" className="text-primary hover:underline">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolitiqueConfidentialite;
