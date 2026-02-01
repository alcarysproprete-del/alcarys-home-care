import { Link } from "react-router-dom";

const MentionsLegales = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair mb-8 text-center">Mentions légales</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-playfair mb-4">1. Éditeur du site</h2>
              <p className="text-muted-foreground text-justify">
                Le site alcarys.fr est édité par :<br />
                <strong>Alcarys – Cocoon&Co</strong><br />
                Services d'aide à domicile<br />
                Neuilly-sur-Marne, 93330<br />
                Seine-Saint-Denis, France<br /><br />
                Téléphone : 07 64 16 03 67<br />
                Email : contact@alcarys.fr<br />
                Site : www.alcarys.fr
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">2. Activité</h2>
              <p className="text-muted-foreground text-justify">
                Alcarys est une entreprise de services à la personne (SAP) agréée, 
                proposant des prestations d'aide à domicile conformément à la réglementation 
                française en vigueur (Code du travail, articles L.7231-1 et suivants).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">3. Directeur de la publication</h2>
              <p className="text-muted-foreground text-justify">
                Le directeur de la publication est le représentant légal de la société Alcarys.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">4. Hébergement</h2>
              <p className="text-muted-foreground text-justify">
                Ce site est hébergé par :<br />
                Lovable / Netlify<br />
                Hébergement cloud sécurisé
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">5. Propriété intellectuelle</h2>
              <p className="text-muted-foreground text-justify">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) 
                est protégé par le droit d'auteur. Toute reproduction ou représentation, 
                totale ou partielle, est interdite sans autorisation préalable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">6. Données personnelles</h2>
              <p className="text-muted-foreground text-justify">
                Pour plus d'informations sur la collecte et le traitement de vos données 
                personnelles, veuillez consulter notre{" "}
                <Link to="/politique-confidentialite" className="text-primary hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">7. Cookies</h2>
              <p className="text-muted-foreground text-justify">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément 
                à notre politique de confidentialité.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">8. Agrément Services à la Personne</h2>
              <p className="text-muted-foreground text-justify">
                Alcarys est une entreprise agréée pour les services à la personne, 
                permettant à ses clients de bénéficier des avantages fiscaux prévus 
                par la loi (crédit d'impôt de 50%, CESU, APA, PCH).
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

export default MentionsLegales;
