import { Link } from "react-router-dom";

const PolitiqueConfidentialite = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair mb-8 text-center">Politique de confidentialité</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-playfair mb-4">1. Responsable du traitement</h2>
              <p className="text-muted-foreground text-justify">
                Le responsable du traitement des données personnelles est :<br />
                <strong>Alcarys – Cocoon&Co</strong><br />
                Neuilly-sur-Marne, 93330<br />
                Email : contact@alcarys.fr<br />
                Téléphone : 07 64 16 03 67
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">2. Collecte des données</h2>
              <p className="text-muted-foreground text-justify">
                Alcarys collecte les données personnelles que vous nous communiquez 
                volontairement via notre formulaire de contact : nom, prénom, téléphone, 
                email, code postal et informations relatives à votre demande d'aide à domicile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">3. Utilisation des données</h2>
              <p className="text-muted-foreground text-justify">
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Répondre à vos demandes de renseignements</li>
                <li>Organiser votre évaluation à domicile</li>
                <li>Vous proposer nos services d'aide à domicile</li>
                <li>Assurer le suivi de nos prestations</li>
                <li>Vous accompagner dans vos démarches APA/PCH/CESU</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">4. Base légale du traitement</h2>
              <p className="text-muted-foreground text-justify">
                Le traitement de vos données est fondé sur :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Votre consentement explicite lors de la soumission du formulaire</li>
                <li>L'exécution du contrat de prestation de services</li>
                <li>Nos obligations légales (facturation, déclarations sociales)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">5. Protection des données</h2>
              <p className="text-muted-foreground text-justify">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
                appropriées pour protéger vos données contre tout accès non autorisé, 
                modification, divulgation ou destruction. Vos données sont stockées 
                de manière sécurisée et ne sont jamais partagées à des fins commerciales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">6. Durée de conservation</h2>
              <p className="text-muted-foreground text-justify">
                Vos données sont conservées pendant la durée nécessaire aux finalités 
                pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Données de contact : 3 ans après le dernier contact</li>
                <li>Données contractuelles : 5 ans après la fin du contrat</li>
                <li>Données de facturation : 10 ans (obligation légale)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">7. Vos droits (RGPD)</h2>
              <p className="text-muted-foreground text-justify">
                Conformément au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger vos données</li>
                <li><strong>Droit à l'effacement</strong> : demander la suppression</li>
                <li><strong>Droit à la portabilité</strong> : récupérer vos données</li>
                <li><strong>Droit d'opposition</strong> : refuser certains traitements</li>
                <li><strong>Droit à la limitation</strong> : geler le traitement</li>
              </ul>
              <p className="text-muted-foreground mt-4 text-justify">
                Pour exercer ces droits, contactez-nous à : <strong>contact@alcarys.fr</strong>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">8. Cookies</h2>
              <p className="text-muted-foreground text-justify">
                Notre site utilise uniquement des cookies techniques nécessaires à son bon 
                fonctionnement. Aucun cookie publicitaire ou de suivi n'est utilisé.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">9. Réclamation</h2>
              <p className="text-muted-foreground text-justify">
                Si vous estimez que le traitement de vos données ne respecte pas la 
                réglementation, vous pouvez adresser une réclamation à la CNIL :<br />
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.cnil.fr
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-playfair mb-4">10. Contact</h2>
              <p className="text-muted-foreground text-justify">
                Pour toute question relative à cette politique de confidentialité, 
                vous pouvez nous contacter :<br /><br />
                Email : contact@alcarys.fr<br />
                Téléphone : 07 64 16 03 67<br />
                Adresse : Neuilly-sur-Marne, 93330
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-xl">
              <p className="text-sm text-muted-foreground text-justify">
                <strong>Dernière mise à jour :</strong> Février 2026
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
