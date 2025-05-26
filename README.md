# Short description

Princess Kaguya is een artistiek en interactief webproject gebaseerd op het klassieke Japanse sprookje “The Tale of the Princess Kaguya”. Het vertelt het poëtische verhaal van een meisje dat wordt gevonden in een bamboestengel en op magische wijze opgroeit tot een prachtige jonge vrouw met een hemelse afkomst.

Via een parallax scroll-ervaring volg je haar reis door verschillende fases van haar leven: haar ontdekking, haar snelle groei, haar verdrietige geheim en het hartverscheurende afscheid.

## Libraries used

- **Framer Motion** – voor animaties zoals fades, parallax-effecten en overgangen (zoals de maan en bladeren).
- **react-just-parallax** – voor muis-gebaseerde parallax effecten (zoals de trofee in de grot).
- **Motion One** – voor geavanceerde tekstanimaties ([bron](https://ui.indie-starter.dev/docs/text-animation))

## Up & running

npm install
npm run dev

## Sources

[https://react.dev/learn/managing-state] - Managing State - gebruikt om de zoekterm, het genre en de sprookjeslijst dynamisch bij te houden en zo de interface automatisch te laten reageren op gebruikersinput
[https://www.shecodes.io/athena/52759-explaining-useeffect-and-fetch-in-react#:~:text=useEffect%20is%20a%20hook%20in,component%20with%20the%20new%20data.] - UseEffect en fetch - gebruikt om gegevens automatisch op te halen wanneer de component laadt, zodat de sprookjes één keer geladen worden bij het opstarten van de pagina.
[https://chatgpt.com/share/6800f1fa-db58-8008-acff-798d8a0f6914] - dynamisch filtersysteem gemaakt dat sprookjes filtert op basis van de zoekterm en het geselecteerde genre. - (Sprookjes.jsx)

[https://motion.dev/docs/react-use-scroll] - Motion Documentation — useScroll & useTransform gebruikt in (Scene5.jsx)
[https://youtu.be/jQaU9BQUXvk?si=mSKPnffrEhbCVJz0] - Hoe een animatie bouwen met useInView in een React-project met Framer Motion.
[https://motion.dev/docs/react-use-in-view] - Ik gebruik de useInView hook van Framer Motion om te detecteren wanneer een element in beeld komt en zo vloeiende animaties te activeren. ( Scene6.jsx)

[https://youtu.be/GOuwOI-WSkE?si=8LaDZK7SimQ4aTbc] - Animations In React - Framer-Motion Tutorial - begrijpen van verschillende animaties die bestaan in Framer motion
[https://motion.dev/docs/react-animation] - basic animations

[https://react-just-parallax.michalzalobny.com/] - Mouse / Touch Parallax parallax gebruikt om objecten te bewegen ( Scene4.jsx)
[https://chatgpt.com/share/6832f62a-679c-8008-80b9-3ae7941447ee] - De legendarische objecten (trofee en staf) mochten pas verschijnen wanneer de muis beweegt binnen de scène. Probleem opgelost waarbij ze te vroeg zichtbaar waren (al vanaf de vorige scène) door een systeem toe te voegen dat scroll detecteert (useInView) én muisbewegingen (onMouseMove).

[https://medium.com/@otooker/embedding-a-youtube-video-in-react-9be0040b050d] - Embedding a YouTube video in React - (Makingof.jsx)


## Auteur

Gemaakt door Manal Boulahya als eindproject voor het vak Frontend – MCT Erasmushogeschool Brussel (2024-2025).