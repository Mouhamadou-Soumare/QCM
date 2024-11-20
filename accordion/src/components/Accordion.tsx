import { useState, useEffect, useRef, ReactNode } from "react";

type AccordionProps = {
  children: (props: {
    openIndex: number | null;
    handleToggle: (index: number) => void;
  }) => ReactNode;
};

type AccordionItemProps = {
  children: (props: {
    index: number;
    openIndex: number | null;
    handleToggle: (index: number) => void;
  }) => ReactNode;
  index: number;
  openIndex: number | null;
  handleToggle: (index: number) => void;
};

type AccordionHeaderProps = {
  children: ReactNode;
  index: number;
  openIndex: number | null;
  handleToggle: (index: number) => void;
};

type AccordionPanelProps = {
  children: ReactNode;
  index: number;
  openIndex: number | null;
};

const Accordion = ({ children }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return <div>{children({ openIndex, handleToggle })}</div>;
};

const AccordionItem = ({ children, index, openIndex, handleToggle }: AccordionItemProps) => {
  return (
    <div className="accordion-item">
      {children({ index, openIndex, handleToggle })}
    </div>
  );
};

const AccordionHeader = ({ children, index, openIndex, handleToggle }: AccordionHeaderProps) => {
  const isOpen = openIndex === index;

  return (
    <button
      onClick={() => handleToggle(index)}
      aria-expanded={isOpen}
      aria-controls={`panel-${index}`}
      id={`header-${index}`}
      className={`accordion-header w-full text-left p-4 border-b-2 focus:outline-none transition-colors duration-300 ${isOpen ? "bg-blue-600 text-white" : "bg-gray-200"}`}
    >
      {children}
      <span className={`ml-2 transform transition-transform ${isOpen ? "rotate-180" : ""}`}>&#9660;</span>
    </button>
  );
};

const AccordionPanel = ({ children, index, openIndex }: AccordionPanelProps) => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const isOpen = openIndex === index;

  useEffect(() => {
    if (isOpen) {
      panelRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div
      id={`panel-${index}`}
      role="region"
      aria-labelledby={`header-${index}`}
      tabIndex={-1}
      ref={panelRef}
      className={`accordion-panel transition-all duration-300 ease-in-out ${isOpen ? "block p-4" : "hidden"}`}
    >
      {children}
    </div>
  );
};

export default function SpiderManAccordion() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tobey Maguire</h2>
      <Accordion>
  {({ openIndex, handleToggle }) => (
    <>
      <AccordionItem index={0} openIndex={openIndex} handleToggle={handleToggle}>
        {({ index, openIndex, handleToggle }) => (
          <>
            <AccordionHeader index={index} openIndex={openIndex} handleToggle={handleToggle}>
              Spider-Man (2002)
            </AccordionHeader>
            <AccordionPanel index={index} openIndex={openIndex}>
              <p>
                Peter Parker, un lycéen timide et introverti, est mordu par une araignée génétiquement modifiée lors
                d'une sortie scolaire. Il développe des pouvoirs incroyables : force surhumaine, agilité, et la capacité
                de s'accrocher aux murs. Tandis qu'il explore ses nouvelles capacités, il est confronté au Bouffon Vert,
                un ennemi redoutable incarné par Norman Osborn, le père de son meilleur ami Harry. Peter apprend que de
                grands pouvoirs impliquent de grandes responsabilités, mais ce chemin est parsemé de sacrifices.
              </p>
              <h3 className="font-semibold mt-4">Acteurs principaux :</h3>
              <ul className="list-disc ml-6">
                <li>Tobey Maguire (Peter Parker / Spider-Man)</li>
                <li>Kirsten Dunst (Mary Jane Watson)</li>
                <li>Willem Dafoe (Norman Osborn / Bouffon Vert)</li>
                <li>James Franco (Harry Osborn)</li>
              </ul>
              <h3 className="font-semibold mt-4">Réalisateur :</h3>
              <p>Sam Raimi</p>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem index={1} openIndex={openIndex} handleToggle={handleToggle}>
        {({ index, openIndex, handleToggle }) => (
          <>
            <AccordionHeader index={index} openIndex={openIndex} handleToggle={handleToggle}>
              Spider-Man 2 (2004)
            </AccordionHeader>
            <AccordionPanel index={index} openIndex={openIndex}>
              <p>
                Peter Parker lutte pour équilibrer sa vie de super-héros et ses responsabilités personnelles.
                Lorsqu'un accident transforme le brillant scientifique Otto Octavius en Docteur Octopus, un homme
                doté de bras mécaniques contrôlés mentalement, Peter doit affronter cet adversaire redoutable tout en
                essayant de préserver sa relation avec Mary Jane et sa carrière universitaire. C'est une histoire de
                sacrifice, de rédemption, et de résilience.
              </p>
              <h3 className="font-semibold mt-4">Acteurs principaux :</h3>
              <ul className="list-disc ml-6">
                <li>Tobey Maguire (Peter Parker / Spider-Man)</li>
                <li>Kirsten Dunst (Mary Jane Watson)</li>
                <li>Alfred Molina (Dr. Otto Octavius / Docteur Octopus)</li>
                <li>James Franco (Harry Osborn)</li>
              </ul>
              <h3 className="font-semibold mt-4">Réalisateur :</h3>
              <p>Sam Raimi</p>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem index={2} openIndex={openIndex} handleToggle={handleToggle}>
        {({ index, openIndex, handleToggle }) => (
          <>
            <AccordionHeader index={index} openIndex={openIndex} handleToggle={handleToggle}>
              Spider-Man 3 (2007)
            </AccordionHeader>
            <AccordionPanel index={index} openIndex={openIndex}>
              <p>
                Peter Parker est au sommet de sa gloire en tant que Spider-Man, mais sa vie est bouleversée lorsque
                son costume devient noir, amplifiant son pouvoir et révélant une partie plus sombre de sa personnalité.
                Pendant ce temps, il affronte de nouveaux ennemis : Flint Marko, l'Homme-Sable, qui a un lien tragique
                avec le passé de Peter, et Eddie Brock, qui devient Venom, un ennemi juré. Entre trahison, amour, et
                rédemption, Peter doit affronter ses démons intérieurs pour redevenir le héros que le monde admire.
              </p>
              <h3 className="font-semibold mt-4">Acteurs principaux :</h3>
              <ul className="list-disc ml-6">
                <li>Tobey Maguire (Peter Parker / Spider-Man)</li>
                <li>Kirsten Dunst (Mary Jane Watson)</li>
                <li>Thomas Haden Church (Flint Marko / Homme-Sable)</li>
                <li>Topher Grace (Eddie Brock / Venom)</li>
                <li>James Franco (Harry Osborn)</li>
              </ul>
              <h3 className="font-semibold mt-4">Réalisateur :</h3>
              <p>Sam Raimi</p>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  )}
</Accordion>


      <h2 className="text-2xl font-bold mt-8 mb-4">Andrew Garfield</h2>
      <Accordion>
  {({ openIndex, handleToggle }) => (
    <>
      <AccordionItem index={3} openIndex={openIndex} handleToggle={handleToggle}>
        {({ index, openIndex, handleToggle }) => (
          <>
            <AccordionHeader index={index} openIndex={openIndex} handleToggle={handleToggle}>
              The Amazing Spider-Man (2012)
            </AccordionHeader>
            <AccordionPanel index={index} openIndex={openIndex}>
              <p>
                Peter Parker, un adolescent brillant mais marginal, découvre des indices sur la disparition de ses
                parents. En enquêtant, il rencontre le Dr Curt Connors, ancien collègue de son père, qui mène des
                recherches génétiques révolutionnaires. Lorsque Connors se transforme en Lézard, un prédateur reptilien
                surpuissant, Peter doit embrasser son destin de Spider-Man pour sauver la ville. Parallèlement, il
                développe une relation complexe avec Gwen Stacy, sa camarade de classe et premier amour.
              </p>
              <h3 className="font-semibold mt-4">Acteurs principaux :</h3>
              <ul className="list-disc ml-6">
                <li>Andrew Garfield (Peter Parker / Spider-Man)</li>
                <li>Emma Stone (Gwen Stacy)</li>
                <li>Rhys Ifans (Dr. Curt Connors / Lézard)</li>
                <li>Denis Leary (Capitaine George Stacy)</li>
              </ul>
              <h3 className="font-semibold mt-4">Réalisateur :</h3>
              <p>Marc Webb</p>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem index={4} openIndex={openIndex} handleToggle={handleToggle}>
        {({ index, openIndex, handleToggle }) => (
          <>
            <AccordionHeader index={index} openIndex={openIndex} handleToggle={handleToggle}>
              The Amazing Spider-Man 2 (2014)
            </AccordionHeader>
            <AccordionPanel index={index} openIndex={openIndex}>
              <p>
                Peter Parker continue de jongler entre sa double vie de Spider-Man et ses sentiments pour Gwen Stacy,
                alors qu'il cherche des réponses sur ses parents disparus. Les défis montent d'un cran lorsque Max Dillon,
                un fan devenu l'électrisant Electro, menace New York. Peter fait également face à Harry Osborn, son
                ami d'enfance, qui sombre dans les ténèbres en raison d'une maladie génétique. Entre amour, amitié, et
                devoir, Spider-Man devra affronter des ennemis toujours plus puissants et des choix de vie déchirants.
              </p>
              <h3 className="font-semibold mt-4">Acteurs principaux :</h3>
              <ul className="list-disc ml-6">
                <li>Andrew Garfield (Peter Parker / Spider-Man)</li>
                <li>Emma Stone (Gwen Stacy)</li>
                <li>Jamie Foxx (Max Dillon / Electro)</li>
                <li>Dane DeHaan (Harry Osborn / Bouffon Vert)</li>
                <li>Sally Field (May Parker)</li>
              </ul>
              <h3 className="font-semibold mt-4">Réalisateur :</h3>
              <p>Marc Webb</p>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  )}
</Accordion>


      <h2 className="text-2xl font-bold mt-8 mb-4">Tom Holland</h2>
      <Accordion>
  {({ openIndex, handleToggle }) => (
    <>
      <AccordionItem index={5} openIndex={openIndex} handleToggle={handleToggle}>
        {({ index, openIndex, handleToggle }) => (
          <>
            <AccordionHeader index={index} openIndex={openIndex} handleToggle={handleToggle}>
              Spider-Man: Homecoming (2017)
            </AccordionHeader>
            <AccordionPanel index={index} openIndex={openIndex}>
              <p>
                Après les événements de *Captain America: Civil War*, Peter Parker retourne à sa vie d'adolescent
                à New York. Sous la tutelle de Tony Stark, il apprend à maîtriser ses nouvelles responsabilités
                en tant que Spider-Man tout en tentant de mener une vie normale au lycée. Mais lorsqu'Adrian Toomes,
                alias le Vautour, utilise une technologie alien pour mener des activités criminelles, Peter doit
                prouver qu'il est bien plus qu'un simple "héros de quartier".
              </p>
              <h3 className="font-semibold mt-4">Acteurs principaux :</h3>
              <ul className="list-disc ml-6">
                <li>Tom Holland (Peter Parker / Spider-Man)</li>
                <li>Michael Keaton (Adrian Toomes / Vautour)</li>
                <li>Robert Downey Jr. (Tony Stark / Iron Man)</li>
                <li>Zendaya (Michelle "MJ" Jones)</li>
                <li>Marisa Tomei (May Parker)</li>
              </ul>
              <h3 className="font-semibold mt-4">Réalisateur :</h3>
              <p>Jon Watts</p>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem index={6} openIndex={openIndex} handleToggle={handleToggle}>
        {({ index, openIndex, handleToggle }) => (
          <>
            <AccordionHeader index={index} openIndex={openIndex} handleToggle={handleToggle}>
              Spider-Man: Far From Home (2019)
            </AccordionHeader>
            <AccordionPanel index={index} openIndex={openIndex}>
              <p>
                Après la mort de Tony Stark dans *Avengers: Endgame*, Peter Parker part en voyage scolaire en Europe
                pour tenter de retrouver une vie normale. Mais lorsque des créatures appelées "élémentaux" attaquent,
                il est recruté par Nick Fury et un mystérieux héros, Quentin Beck, alias Mysterio, pour les affronter.
                Alors que la menace s'intensifie, Peter découvre que tout n'est pas ce qu'il semble être.
              </p>
              <h3 className="font-semibold mt-4">Acteurs principaux :</h3>
              <ul className="list-disc ml-6">
                <li>Tom Holland (Peter Parker / Spider-Man)</li>
                <li>Jake Gyllenhaal (Quentin Beck / Mysterio)</li>
                <li>Zendaya (Michelle "MJ" Jones)</li>
                <li>Samuel L. Jackson (Nick Fury)</li>
                <li>Marisa Tomei (May Parker)</li>
              </ul>
              <h3 className="font-semibold mt-4">Réalisateur :</h3>
              <p>Jon Watts</p>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
           <AccordionItem index={7} openIndex={openIndex} handleToggle={handleToggle}>
        {({ index, openIndex, handleToggle }) => (
          <>
            <AccordionHeader index={index} openIndex={openIndex} handleToggle={handleToggle}>
              Spider-Man: No Way Home (2021)
            </AccordionHeader>
            <AccordionPanel index={index} openIndex={openIndex}>
              <p>
                Après que son identité a été révélée au monde entier, Peter Parker se retrouve dans une situation
                chaotique. Désespéré de rétablir la normalité, il demande à Doctor Strange d'utiliser un sort pour que
                tout le monde oublie qu'il est Spider-Man. Cependant, la magie tourne mal, provoquant l'ouverture
                de portails vers d'autres dimensions. Cela amène des ennemis emblématiques de Spider-Man, mais également
                deux autres versions de Spider-Man incarnées par Tobey Maguire et Andrew Garfield. Ensemble, ils doivent
                réparer les brèches du multivers et affronter leurs ennemis les plus redoutables dans un affrontement
                spectaculaire.
              </p>
              <h3 className="font-semibold mt-4">Acteurs principaux :</h3>
              <ul className="list-disc ml-6">
                <li>Tom Holland (Peter Parker / Spider-Man)</li>
                <li>Andrew Garfield (Peter Parker / Spider-Man, univers The Amazing Spider-Man)</li>
                <li>Tobey Maguire (Peter Parker / Spider-Man, univers Sam Raimi)</li>
                <li>Benedict Cumberbatch (Doctor Strange)</li>
                <li>Zendaya (Michelle "MJ" Jones)</li>
                <li>Marisa Tomei (May Parker)</li>
                <li>Willem Dafoe (Norman Osborn / Bouffon Vert)</li>
                <li>Alfred Molina (Dr. Otto Octavius / Docteur Octopus)</li>
                <li>Jamie Foxx (Max Dillon / Electro)</li>
              </ul>
              <h3 className="font-semibold mt-4">Réalisateur :</h3>
              <p>Jon Watts</p>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

    </>
  )}
</Accordion>


    </div>
  );
}
