/* Botones de traducción */
let espanol = document.getElementById("espanol");
let english = document.getElementById("english");
let italiano = document.getElementById("italiano");
let francais = document.getElementById("francais");
let russian = document.getElementById("russian");
let german = document.getElementById("german");

/* Elementos a traducir */
let Herobulb = document.getElementById("Herobulb");
let explore = document.getElementById("explore");
let cta1 = document.getElementById("cta1");
let shop = document.getElementById("shop");
let cta2 = document.getElementById("cta2");
let h2_1 = document.getElementById("h2-1");
let t1 = document.getElementById("t1");
let cta3 = document.getElementById("cta3");
let t2 = document.getElementById("t2");
let h2_2 = document.getElementById("h2-2");
let t3 = document.getElementById("t3");
let h2_3 = document.getElementById("h2-3");
let t4 = document.getElementById("t4");
let h3_1 = document.getElementById("h3-1");
let t5 = document.getElementById("t5");
let h3_2 = document.getElementById("h3-2");
let t6 = document.getElementById("t6");
let h3_4 = document.getElementById("h3-4");
let t7 = document.getElementById("t7");
let h3_5 = document.getElementById("h3-5");
let t8 = document.getElementById("t8");
let h2_4 = document.getElementById("h2-4");
let t9 = document.getElementById("t9");
let cta4 = document.getElementById("cta4");
let t10 = document.getElementById("t10");
let t11 = document.getElementById("t11");
let t12 = document.getElementById("t12");
let h2_5 = document.getElementById("h2-5");
let t13 = document.getElementById("t13");
let cta5 = document.getElementById("cta5");
let t14 = document.getElementById("t14");
let t15 = document.getElementById("t15");
let t16 = document.getElementById("t16");
let t17 = document.getElementById("t17");
let t18 = document.getElementById("t18");
let t19 = document.getElementById("t19");
let t20 = document.getElementById("t20");
let t21 = document.getElementById("t21");
let t22 = document.getElementById("t22");
let h1 = document.getElementById("h1");
let about_us = document.getElementById("about-us");
let services = document.getElementById("services");
let blog = document.getElementById("blog");
let contact = document.getElementById("contact");
let h1_1 = document.getElementById("h1-1");
let h2_6 = document.getElementById("h2-6");
let t23 = document.getElementById("t23");
let account = document.getElementById("account");
let sign_up = document.getElementById("sign-up");
let log_in = document.getElementById("log-in");
let reset = document.getElementById("reset");
let legal1 = document.getElementById("legal1");
let legal2 = document.getElementById("legal2");
let cta6 = document.getElementById("cta6");

/* Eventos de click para cambiar idioma */
espanol.onclick = ()=>{
    setLanguage("espanol");
    localStorage.setItem("Lang","espanol");
};

english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("Lang","english");
};

italiano.onclick = ()=>{
    setLanguage("italiano");
    localStorage.setItem("Lang","italiano");
};

francais.onclick = ()=>{
    setLanguage("francais");
    localStorage.setItem("Lang","francais");
};

russian.onclick = ()=>{
    setLanguage("russian");
    localStorage.setItem("Lang","russian");
};

german.onclick = ()=>{
    setLanguage("german");
    localStorage.setItem("Lang","german");
};

onload = ()=>{
    setLanguage(localStorage.getItem("Lang"));
};


/* Traducciones */
function setLanguage(getLanguage){
  if(getLanguage === "espanol"){
      Herobulb.innerHTML = "Disfrute de un acceso en línea fluido, entregas rápidas y soporte personalizado desde cualquier parte del mundo. ¡Tu próxima aventura te espera, a solo un clic de distancia!";
      explore.innerHTML = "explorar";
      cta1.innerHTML = "¡Alquile radios hoy!";
      shop.innerHTML = "tienda";
      cta2.innerHTML = "Regístrate y recibe: ¡30% de descuento en todo!";
      h2_1.innerHTML = "Alquiler y venta de receptores de audio para visitas guiadas";
      t1.innerHTML = "Calidad superior, audio cristalino, fácil de usar, confiable, con hasta 10 días de autonomía. Nuestro sistema permite una experiencia de visita enriquecedora, libre de ruido y respetuosa con el medio ambiente.";
      cta3.innerHTML = "Reservar servicio";
      t2.innerHTML = "Alquiler de audio guías y creación de itinerarios multilingües para diversos destinos turísticos con oradores y expertos calificados.";
      h2_2.innerHTML = "Soluciones de Traducción";
      t3.innerHTML = "Alquile nuestros sistemas de audio para eventos globales, conferencias y reuniones internacionales. Calidad premium y soporte técnico completo, dedicado y personalizado.";
      h2_3.innerHTML = "Plataforma de Reserva Online";
      t4.innerHTML = "Ahora puede acceder rápidamente a cualquiera de nuestros servicios desde cualquier parte del mundo con nuestra Plataforma de Reserva Online. Con solo un clic, puede alquilar o comprar receptores de audio para visitas guiadas, reservar tours con guías multilingües o contratar soluciones de traducción para eventos globales. Disfrute de entregas puntuales y asistencia personalizada, todo desde la comodidad de su hogar o dispositivo móvil.";
      h3_1.innerHTML = "Comunicación Mejorada";
      t5.innerHTML = "Las soluciones innovadoras de Foné facilitan la comunicación fluida a través de barreras idiomáticas, garantizando una interacción clara y efectiva en cualquier entorno.";
      h3_2.innerHTML = "Experiencia Inigualable";
      t6.innerHTML = "Con un equipo de profesionales altamente capacitados, Foné ofrece una experiencia y soporte incomparables para satisfacer sus necesidades únicas de comunicación.";
      h3_4.innerHTML = "Accesibilidad Global";
      t7.innerHTML = "Ya sea que esté organizando una conferencia internacional o haciendo negocios en el extranjero, los servicios de Foné están disponibles en todo el mundo, garantizando accesibilidad dondequiera que vaya.";
      h3_5.innerHTML = "Soluciones Personalizadas";
      t8.innerHTML = "Foné comprende que cada cliente es único, por eso ofrecen soluciones personalizables para satisfacer sus requisitos específicos, garantizando una experiencia de comunicación personalizada y efectiva.";
      h2_4.innerHTML = "Explora el Mundo con Nuestros Tours Inolvidables";
      t9.innerHTML = "Embárcate en un viaje inolvidable con nuestra selección curada de tours. Desde lugares históricos hasta joyas escondidas, descubre las maravillas del mundo con guías expertos y experiencias inmersivas adaptadas al gusto de cada viajero.";
      cta4.innerHTML = "Explorar Tours";
      t10.innerHTML = "Agencias han obtenido beneficios al alquilar y comprar nuestros radios.";
      t11.innerHTML = "Conferencias internacionales asistidas";
      t12.innerHTML = "Individuos han disfrutado de nuestros tours.";
      h2_5.innerHTML = "¿Ya tienes algunas preguntas?";
      t13.innerHTML = "¡No dudes en ponerte en contacto con nosotros! Nuestro equipo dedicado está aquí para proporcionarte respuestas, orientación y soporte. Ya sea sobre nuestros productos, servicios o cualquier otra cosa, estamos comprometidos a garantizar que tu experiencia con nosotros sea fluida y sin problemas. Ponte en contacto y permítenos ayudarte en cada paso del camino.";
      cta5.innerHTML = "leer más";
      t14.innerHTML = "¿Qué es Foné Firenze y qué servicios ofrece?";
      t15.innerHTML = "Foné Firenze es una empresa que ofrece servicios de alquiler y venta de radios para visitas guiadas, así como organización de tours y soluciones de traducción para eventos globales.";
      t16.innerHTML = "¿Cómo funciona el alquiler de radios para visitas guiadas?";
      t17.innerHTML = "Alquilar radios para visitas guiadas es simple: solo tienes que seleccionar el número de dispositivos que necesitas, las fechas de alquiler y hacer tu reserva en línea.";
      t18.innerHTML = "¿Ofrecen tours guiados en diferentes idiomas?";
      t19.innerHTML = "Sí, ofrecemos tours guiados en una amplia variedad de idiomas para satisfacer las necesidades de nuestros clientes.";
      t20.innerHTML = "¿Cómo puedo reservar un tour o alquilar equipo?";
      t21.innerHTML = "Puedes reservar un tour o alquilar equipo directamente a través de nuestro sitio web, o también puedes ponerte en contacto con nuestro equipo de servicio al cliente para obtener ayuda adicional.";
      t22.innerHTML = "Estamos aquí para brindar soporte y aclarar cualquier duda que puedas tener sobre nuestros servicios.";
      h1.innerHTML = "¿Necesitas ayuda o tienes alguna pregunta?";
      about_us.innerHTML = "sobre nosotros";
      services.innerHTML = "servicios";
      blog.innerHTML = "blog";
      contact.innerHTML = "contacto";
      h1_1.innerHTML = "Tour Agency Owners Share Their Awesome Experience with Foné";
      h2_6.innerHTML = "Stay in the Loop";
      t23.innerHTML = "Subscribe to Our Mailing List for Exclusive Promos, Products, Services, and News Updates!";
      account.innerHTML = "cuenta";
      sign_up.innerHTML = "registrarse";
      log_in.innerHTML = "iniciar sesión";
      reset.innerHTML = "restablecer contraseña";
      legal1.innerHTML = "términos y condiciones";
      legal2.innerHTML = "política de privacidad";
      cta6.innerHTML = "Alquile radios aquí";
  } else if(getLanguage === "english"){
      Herobulb.innerHTML = "Enjoy seamless online access, prompt deliveries, and personalized support from anywhere in the world. Your next adventure awaits, just a click away!";
      explore.innerHTML = "explore";
      cta1.innerHTML = "Rent radios today!";
      shop.innerHTML = "shop";
      cta2.innerHTML = "Sign Up And Receive: 30% Off Everything!";
      h2_1.innerHTML = "Rental and sale of audio receivers for guided tours";
      t1.innerHTML = "Superior quality, crystal-clear audio, easy to use, reliable, with up to 10 days of autonomy. Our system enables an enriching visit experience, free from noise and respectful of the environment.";
      cta3.innerHTML = "Book service";
      t2.innerHTML = "Audio guide rental and creation of multilingual itineraries for diverse tourist destinations with qualified speakers and experts.";
      h2_2.innerHTML = "Translation Solutions";
      t3.innerHTML = "Rent our audio systems for global events, conferences, and international meetings. Premium quality and comprehensive, dedicated, and personalized technical support.";
      h2_3.innerHTML = "Online Booking Hub";
      t4.innerHTML = "Now you can access any of our services quickly and easily from anywhere in the world with our Online Booking Hub. With just one click, you can rent or purchase audio receivers for guided tours, book tours with multilingual guides, or hire translation solutions for global events. Enjoy punctual deliveries and personalized assistance, all from the comfort of your home or mobile device.";
      h3_1.innerHTML = "Enhanced Communication";
      t5.innerHTML = "Foné's innovative solutions facilitate seamless communication across language barriers, ensuring clear and effective interaction in any setting.";
      h3_2.innerHTML = "Unmatched Expertise";
      t6.innerHTML = "With a team of highly skilled professionals, Foné provides unparalleled expertise and support to meet your unique communication needs.";
      h3_4.innerHTML = "Global Accessibility";
      t7.innerHTML = "Whether you're hosting an international conference or conducting business abroad, Foné's services are readily available worldwide, ensuring accessibility wherever you go.";
      h3_5.innerHTML = "Tailored Solutions";
      t8.innerHTML = "Foné understands that every client is unique, which is why they offer customizable solutions to fit your specific requirements, ensuring a personalized and effective communication experience.";
      h2_4.innerHTML = "Explore the World with Our Unforgettable Tours";
      t9.innerHTML = "Embark on an unforgettable journey with our curated selection of tours. From historic landmarks to hidden gems, discover the world's wonders with expert guides and immersive experiences tailored to every traveler's taste.";
      cta4.innerHTML = "Explore Tours";
      t10.innerHTML = "Agencies have benefited from renting and purchasing our radios";
      t11.innerHTML = "Attended international conferences";
      t12.innerHTML = "Individuals have enjoyed our tours";
      h2_5.innerHTML = "Already have some questions?";
      t13.innerHTML = "Don't hesitate to get in touch with us! Our dedicated team is here to provide you with answers, guidance, and support. Whether it's about our products, services, or anything else, we're committed to ensuring your experience with us is smooth and hassle-free. Reach out and let us assist you every step of the way!";
      cta5.innerHTML = "read more";
      t14.innerHTML = "What is Foné Firenze and what services does it offer?";
      t15.innerHTML = "Foné Firenze is a company that offers rental and sales services for radios for guided tours, as well as tour organization and translation solutions for global events.";
      t16.innerHTML = "How does the rental of radios for guided tours work?";
      t17.innerHTML = "Renting radios for guided tours is simple: you just have to select the number of devices you need, the rental dates, and make your reservation online.";
      t18.innerHTML = "Do you offer guided tours in different languages?";
      t19.innerHTML = "Yes, we offer guided tours in a wide variety of languages to suit the needs of our clients";
      t20.innerHTML = "How can I book a tour or rent equipment?";
      t21.innerHTML = "You can book a tour or rent equipment directly through our website, or you can also contact our customer service team for additional assistance.";
      t22.innerHTML = "We're here to provide support and clarify any doubts you may have about our services.";
      h1.innerHTML = "Need assistance or have a question?";
      about_us.innerHTML = "about us";
      services.innerHTML = "services";
      blog.innerHTML = "blog";
      contact.innerHTML = "contact";
      h1_1.innerHTML = "Tour Agency Owners Share Their Awesome Experience with Foné";
      h2_6.innerHTML = "Stay in the Loop";
      t23.innerHTML = "Subscribe to Our Mailing List for Exclusive Promos, Products, Services, and News Updates!";
      account.innerHTML = "account";
      sign_up.innerHTML = "sign up";
      log_in.innerHTML = "log in";
      reset.innerHTML = "reset password";
      legal1.innerHTML = "terms & conditions";
      legal2.innerHTML = "privacy-policy";
      cta6.innerHTML = "Rent Radio Here";
  } else if(getLanguage === "italiano"){
      Herobulb.innerHTML = "Goditi un accesso online senza interruzioni, consegne rapide e supporto personalizzato ovunque nel mondo. La tua prossima avventura ti aspetta, a un solo clic di distanza!";
      explore.innerHTML = "esplora";
      cta1.innerHTML = "Noleggia radio oggi!";
      shop.innerHTML = "negozio";
      cta2.innerHTML = "Iscriviti e ricevi: 30% di sconto su tutto!";
      h2_1.innerHTML = "Noleggio e vendita di ricevitori audio per visite guidate";
      t1.innerHTML = "Qualità superiore, audio cristallino, facile da usare, affidabile, con autonomia fino a 10 giorni. Il nostro sistema consente un'esperienza di visita arricchente, libera da rumore e rispettosa dell'ambiente.";
      cta3.innerHTML = "Prenota servizio";
      t2.innerHTML = "Noleggio di guide audio e creazione di itinerari multilingue per diverse destinazioni turistiche con oratori ed esperti qualificati.";
      h2_2.innerHTML = "Soluzioni di Traduzione";
      t3.innerHTML = "Noleggia i nostri sistemi audio per eventi globali, conferenze e riunioni internazionali. Qualità premium e supporto tecnico completo, dedicato e personalizzato.";
      h2_3.innerHTML = "Piattaforma di Prenotazione Online";
      t4.innerHTML = "Ora puoi accedere rapidamente a qualsiasi dei nostri servizi da qualsiasi parte del mondo con la nostra Piattaforma di Prenotazione Online. Con un solo clic, puoi noleggiare o acquistare ricevitori audio per visite guidate, prenotare tour con guide multilingue o assumere soluzioni di traduzione per eventi globali. Goditi consegne puntuali e assistenza personalizzata, tutto dalla comodità della tua casa o dispositivo mobile.";
      h3_1.innerHTML = "Comunicazione Migliorata";
      t5.innerHTML = "Le soluzioni innovative di Foné facilitano la comunicazione senza problemi attraverso le barriere linguistiche, garantendo un'interazione chiara ed efficace in qualsiasi contesto.";
      h3_2.innerHTML = "Esperienza Senza Paragoni";
      t6.innerHTML = "Con un team di professionisti altamente qualificati, Foné offre esperienza e supporto senza pari per soddisfare le tue esigenze uniche di comunicazione.";
      h3_4.innerHTML = "Accessibilità Globale";
      t7.innerHTML = "Che tu stia organizzando una conferenza internazionale o facendo affari all'estero, i servizi di Foné sono disponibili in tutto il mondo, garantendo accessibilità ovunque tu vada.";
      h3_5.innerHTML = "Soluzioni Su Misura";
      t8.innerHTML = "Foné comprende che ogni cliente è unico, per questo offrono soluzioni personalizzabili per soddisfare i tuoi requisiti specifici, garantendo un'esperienza di comunicazione personalizzata ed efficace.";
      h2_4.innerHTML = "Esplora il Mondo con i Nostri Tour Indimenticabili";
      t9.innerHTML = "Imbarcati in un viaggio indimenticabile con la nostra selezione di tour. Dai luoghi storici alle gemme nascoste, scopri le meraviglie del mondo con guide esperte ed esperienze coinvolgenti adatte al gusto di ogni viaggiatore.";
      cta4.innerHTML = "Esplora i Tour";
      t10.innerHTML = "Le agenzie hanno beneficiato dal noleggio e dall'acquisto delle nostre radio";
      t11.innerHTML = "Conferenze internazionali partecipate";
      t12.innerHTML = "Individui hanno apprezzato i nostri tour";
      h2_5.innerHTML = "Hai delle domande?";
      t13.innerHTML = "Non esitare a contattarci! Il nostro team dedicato è qui per fornirti risposte, orientamento e supporto. Che si tratti dei nostri prodotti, servizi o di qualsiasi altra cosa, siamo impegnati a garantire che la tua esperienza con noi sia fluida e senza problemi. Contattaci e lasciaci aiutare in ogni passo del percorso.";
      cta5.innerHTML = "leggi di più";
      t14.innerHTML = "Cos'è Foné Firenze e quali servizi offre?";
      t15.innerHTML = "Foné Firenze è un'azienda che offre servizi di noleggio e vendita di radio per visite guidate, nonché organizzazione di tour e soluzioni di traduzione per eventi globali.";
      t16.innerHTML = "Come funziona il noleggio di radio per visite guidate?";
      t17.innerHTML = "Noleggiare radio per visite guidate è semplice: devi solo selezionare il numero di dispositivi di cui hai bisogno, le date di noleggio e fare la prenotazione online.";
      t18.innerHTML = "Offrite tour guidati in diverse lingue?";
      t19.innerHTML = "Sì, offriamo tour guidati in una vasta gamma di lingue per soddisfare le esigenze dei nostri clienti.";
      t20.innerHTML = "Come posso prenotare un tour o noleggiare attrezzature?";
      t21.innerHTML = "Puoi prenotare un tour o noleggiare attrezzature direttamente tramite il nostro sito web, o puoi anche contattare il nostro team di assistenza clienti per ulteriori assistenza.";
      t22.innerHTML = "Siamo qui per fornire supporto e chiarire qualsiasi dubbio tu possa avere sui nostri servizi.";
      h1.innerHTML = "Hai bisogno di assistenza o hai una domanda?";
      about_us.innerHTML = "chi siamo";
      services.innerHTML = "servizi";
      blog.innerHTML = "blog";
      contact.innerHTML = "contatto";
      h1_1.innerHTML = "I Proprietari di Agenzie di Tour Condividono la Loro Straordinaria Esperienza con Foné";
      h2_6.innerHTML = "Resta Aggiornato";
      t23.innerHTML = "Iscriviti alla nostra Mailing List per Promozioni Esclusive, Prodotti, Servizi e Aggiornamenti!";
      account.innerHTML = "account";
      sign_up.innerHTML = "registrati";
      log_in.innerHTML = "accedi";
      reset.innerHTML = "resetta password";
      legal1.innerHTML = "termini e condizioni";
      legal2.innerHTML = "informativa sulla privacy";
      cta6.innerHTML = "Noleggia Radio Qui";
  } else if(getLanguage === "francais"){
      Herobulb.innerHTML = "Profitez d'un accès en ligne fluide, de livraisons rapides et d'un support personnalisé de n'importe où dans le monde. Votre prochaine aventure vous attend, à un clic de distance!";
      explore.innerHTML = "explorer";
      cta1.innerHTML = "Louez des radios aujourd'hui!";
      shop.innerHTML = "boutique";
      cta2.innerHTML = "Inscrivez-vous et recevez: 30% de réduction sur tout!";
      h2_1.innerHTML = "Location et vente de récepteurs audio pour visites guidées";
      t1.innerHTML = "Qualité supérieure, audio cristallin, facile à utiliser, fiable, avec jusqu'à 10 jours d'autonomie. Notre système permet une expérience de visite enrichissante, sans bruit et respectueuse de l'environnement.";
      cta3.innerHTML = "Réserver le service";
      t2.innerHTML = "Location de guides audio et création d'itinéraires multilingues pour différentes destinations touristiques avec des orateurs et des experts qualifiés.";
      h2_2.innerHTML = "Solutions de Traduction";
      t3.innerHTML = "Louez nos systèmes audio pour des événements mondiaux, des conférences et des réunions internationales. Qualité premium et support technique complet, dédié et personnalisé.";
      h2_3.innerHTML = "Plateforme de Réservation en Ligne";
      t4.innerHTML = "Maintenant, vous pouvez accéder rapidement à n'importe lequel de nos services de n'importe où dans le monde avec notre Plateforme de Réservation en Ligne. Avec un simple clic, vous pouvez louer ou acheter des récepteurs audio pour des visites guidées, réserver des circuits avec des guides multilingues ou embaucher des solutions de traduction pour des événements mondiaux. Profitez de livraisons ponctuelles et d'une assistance personnalisée, le tout depuis le confort de votre maison ou de votre appareil mobile.";
      h3_1.innerHTML = "Communication Améliorée";
      t5.innerHTML = "Les solutions innovantes de Foné facilitent la communication sans faille à travers les barrières linguistiques, garantissant une interaction claire et efficace dans n'importe quel contexte.";
      h3_2.innerHTML = "Expertise Inégalée";
      t6.innerHTML = "Avec une équipe de professionnels hautement qualifiés, Foné offre une expertise et un support inégalés pour répondre à vos besoins uniques en matière de communication.";
      h3_4.innerHTML = "Accessibilité Mondiale";
      t7.innerHTML = "Que vous organisiez une conférence internationale ou fassiez des affaires à l'étranger, les services de Foné sont disponibles dans le monde entier, garantissant une accessibilité où que vous soyez.";
      h3_5.innerHTML = "Solutions Sur Mesure";
      t8.innerHTML = "Foné comprend que chaque client est unique, c'est pourquoi ils offrent des solutions personnalisables pour répondre à vos besoins spécifiques, garantissant une expérience de communication personnalisée et efficace.";
      h2_4.innerHTML = "Explorez le Monde avec Nos Circuits Inoubliables";
      t9.innerHTML = "Embarquez pour un voyage inoubliable avec notre sélection de circuits. Des sites historiques aux joyaux cachés, découvrez les merveilles du monde avec des guides experts et des expériences immersives adaptées à tous les goûts de voyageurs.";
      cta4.innerHTML = "Explorer les Circuits";
      t10.innerHTML = "Les agences ont bénéficié de la location et de l'achat de nos radios";
      t11.innerHTML = "Conférences internationales assistées";
      t12.innerHTML = "Les individus ont apprécié nos circuits";
      h2_5.innerHTML = "Vous avez des questions?";
      t13.innerHTML = "N'hésitez pas à nous contacter! Notre équipe dévouée est là pour vous fournir des réponses, des conseils et un soutien. Que ce soit pour nos produits, nos services ou toute autre chose, nous nous engageons à garantir que votre expérience avec nous soit fluide et sans tracas. Contactez-nous et laissez-nous vous aider à chaque étape.";
      cta5.innerHTML = "en savoir plus";
      t14.innerHTML = "Qu'est-ce que Foné Firenze et quels services offre-t-il?";
      t15.innerHTML = "Foné Firenze est une société qui propose des services de location et de vente de radios pour des visites guidées, ainsi que l'organisation de circuits et des solutions de traduction pour des événements mondiaux.";
      t16.innerHTML = "Comment fonctionne la location de radios pour des visites guidées?";
      t17.innerHTML = "Louer des radios pour des visites guidées est simple: il vous suffit de sélectionner le nombre de dispositifs dont vous avez besoin, les dates de location et de faire votre réservation en ligne.";
      t18.innerHTML = "Offrez-vous des visites guidées dans différentes langues?";
      t19.innerHTML = "Oui, nous proposons des visites guidées dans une grande variété de langues pour répondre aux besoins de nos clients.";
      t20.innerHTML = "Comment puis-je réserver un circuit ou louer du matériel?";
      t21.innerHTML = "Vous pouvez réserver un circuit ou louer du matériel directement via notre site Web, ou vous pouvez également contacter notre équipe de service clientèle pour obtenir une assistance supplémentaire.";
      t22.innerHTML = "Nous sommes là pour fournir un soutien et clarifier tout doute que vous pourriez avoir sur nos services.";
      h1.innerHTML = "Besoin d'aide ou avez-vous une question?";
      about_us.innerHTML = "à propos de nous";
      services.innerHTML = "services";
      blog.innerHTML = "blog";
      contact.innerHTML = "contact";
      h1_1.innerHTML = "Les Propriétaires d'Agences de Voyages Partagent Leur Expérience Incroyable avec Foné";
      h2_6.innerHTML = "Restez Informé";
      t23.innerHTML = "Abonnez-vous à Notre Liste de Diffusion pour des Promotions Exclusives, des Produits, des Services et des Mises à Jour!";
      account.innerHTML = "compte";
      sign_up.innerHTML = "s'inscrire";
      log_in.innerHTML = "se connecter";
      reset.innerHTML = "réinitialiser le mot de passe";
      legal1.innerHTML = "conditions d'utilisation";
      legal2.innerHTML = "politique de confidentialité";
      cta6.innerHTML = "Louez une Radio Ici";
  } else if(getLanguage === "russian"){
      Herobulb.innerHTML = "Наслаждайтесь бесперебойным онлайн-доступом, быстрой доставкой и персонализированной поддержкой откуда угодно в мире. Ваше следующее приключение ждет вас всего в одном клике!";
      explore.innerHTML = "исследовать";
      cta1.innerHTML = "Арендуйте радио сегодня!";
      shop.innerHTML = "магазин";
      cta2.innerHTML = "Зарегистрируйтесь и получите: 30% скидка на все!";
      h2_1.innerHTML = "Аренда и продажа аудиоприемников для экскурсий";
      t1.innerHTML = "Превосходное качество, чистый звук, легкость использования, надежность, с до 10 дней автономной работы. Наша система обеспечивает насыщенный опыт посещения, свободный от шума и уважительный к окружающей среде.";
      cta3.innerHTML = "Забронировать сервис";
      t2.innerHTML = "Аренда аудиогидов и создание многоязычных маршрутов для различных туристических направлений с квалифицированными спикерами и экспертами.";
      h2_2.innerHTML = "Решения в области Перевода";
      t3.innerHTML = "Арендуйте наши аудиосистемы для глобальных мероприятий, конференций и международных встреч. Премиальное качество и полная, индивидуальная и персонализированная техническая поддержка.";
      h2_3.innerHTML = "Онлайн-Бронирование";
      t4.innerHTML = "Теперь вы можете получить доступ к любому из наших сервисов быстро и легко из любой точки мира с помощью нашей Онлайн-Бронирования. Всего одним кликом вы можете арендовать или приобрести аудиоприемники для экскурсий, заказать туры с многоязычными гидами или нанять решения в области перевода для глобальных событий. Наслаждайтесь своевременной доставкой и индивидуальной помощью, все это из комфорта вашего дома или мобильного устройства.";
      h3_1.innerHTML = "Улучшенное Общение";
      t5.innerHTML = "Инновационные решения Foné обеспечивают беспрепятственное общение без языковых барьеров, обеспечивая четкое и эффективное взаимодействие в любой ситуации.";
      h3_2.innerHTML = "Безупречная Экспертиза";
      t6.innerHTML = "С командой высококвалифицированных специалистов Foné предоставляет непревзойденную экспертизу и поддержку для удовлетворения ваших уникальных потребностей в области коммуникации.";
      h3_4.innerHTML = "Глобальная Доступность";
      t7.innerHTML = "Независимо от того, организуете ли вы международную конференцию или ведете бизнес за рубежом, услуги Foné доступны во всем мире, обеспечивая доступность где бы вы ни находились.";
      h3_5.innerHTML = "Индивидуальные Решения";
      t8.innerHTML = "Foné понимает, что каждый клиент уникален, поэтому они предлагают настраиваемые решения, соответствующие вашим конкретным требованиям, гарантируя персонализированный и эффективный опыт коммуникации.";
      h2_4.innerHTML = "Исследуйте Мир с Нашими Незабываемыми Экскурсиями";
      t9.innerHTML = "Отправьтесь в незабываемое путешествие с нашим отобранным выбором экскурсий. От исторических достопримечательностей до скрытых сокровищ, откройте для себя чудеса мира вместе с опытными гидами и захватывающими впечатлениями, подходящими для каждого вида путешественника.";
      cta4.innerHTML = "Исследуйте Экскурсии";
      t10.innerHTML = "Агентства выиграли от аренды и покупки наших радиостанций";
      t11.innerHTML = "Международные конференции, в которых участвовали";
      t12.innerHTML = "Частные лица наслаждались нашими экскурсиями";
      h2_5.innerHTML = "Есть вопросы?";
      t13.innerHTML = "Не стесняйтесь связаться с нами! Наша преданная команда здесь, чтобы предоставить вам ответы, руководство и поддержку. Будь то о наших продуктах, услугах или чем-то еще, мы гарантируем, что ваш опыт с нами будет гладким и без проблем. Обращайтесь и позвольте нам помочь вам на каждом этапе.";
      cta5.innerHTML = "читать дальше";
      t14.innerHTML = "Что такое Foné Firenze и какие услуги он предлагает?";
      t15.innerHTML = "Foné Firenze - это компания, предлагающая услуги по аренде и продаже радиостанций для экскурсий, а также организацию экскурсий и решения в области перевода для мировых событий.";
      t16.innerHTML = "Как работает аренда радиостанций для экскурсий?";
      t17.innerHTML = "Аренда радиостанций для экскурсий проста: вам просто нужно выбрать количество устройств, необходимое вам, даты аренды и сделать вашу бронь онлайн.";
      t18.innerHTML = "Предлагаете ли вы экскурсии на разных языках?";
      t19.innerHTML = "Да, мы предлагаем экскурсии на различных языках, чтобы удовлетворить потребности наших клиентов.";
      t20.innerHTML = "Как я могу забронировать экскурсию или арендовать оборудование?";
      t21.innerHTML = "Вы можете забронировать экскурсию или арендовать оборудование напрямую через наш веб-сайт, или вы также можете связаться с нашей службой поддержки клиентов для получения дополнительной помощи.";
      t22.innerHTML = "Мы здесь, чтобы обеспечить поддержку и разъяснить любые вопросы, которые у вас могут возникнуть относительно наших услуг.";
      h1.innerHTML = "Нужна помощь или у вас есть вопрос?";
      about_us.innerHTML = "о нас";
      services.innerHTML = "услуги";
      blog.innerHTML = "блог";
      contact.innerHTML = "контакт";
      h1_1.innerHTML = "Владельцы Туристических Агентств Делятся Своим Замечательным Опытом с Foné";
      h2_6.innerHTML = "Оставайтесь в курсе";
      t23.innerHTML = "Подпишитесь на нашу рассылку для эксклюзивных акций, продуктов, услуг и новостей!";
      account.innerHTML = "учетная запись";
      sign_up.innerHTML = "зарегистрироваться";
      log_in.innerHTML = "войти";
      reset.innerHTML = "сбросить пароль";
      legal1.innerHTML = "условия использования";
      legal2.innerHTML = "политика конфиденциальности";
      cta6.innerHTML = "Арендовать Радио Здесь";
  } else if(getLanguage === "german"){ 
      Herobulb.innerHTML = "Genießen Sie nahtlosen Online-Zugang, schnelle Lieferungen und persönliche Unterstützung von überall auf der Welt. Ihr nächstes Abenteuer wartet nur einen Klick entfernt!";
      explore.innerHTML = "erkunden";
      cta1.innerHTML = "Mieten Sie heute Radios!";
      shop.innerHTML = "laden";
      cta2.innerHTML = "Melden Sie sich an und erhalten Sie: 30% Rabatt auf alles!";
      h2_1.innerHTML = "Verleih und Verkauf von Audiogeräten für Führungen";
      t1.innerHTML = "Hervorragende Qualität, kristallklarer Ton, einfach zu bedienen, zuverlässig, mit bis zu 10 Tagen Akkulaufzeit. Unser System ermöglicht ein bereicherndes Besuchererlebnis, frei von Lärm und umweltfreundlich.";
      cta3.innerHTML = "Dienstleistung buchen";
      t2.innerHTML = "Audio-Guide-Verleih und Erstellung mehrsprachiger Touren für verschiedene touristische Ziele mit qualifizierten Sprechern und Experten.";
      h2_2.innerHTML = "Übersetzungslösungen";
      t3.innerHTML = "Mieten Sie unsere Audiosysteme für globale Veranstaltungen, Konferenzen und internationale Treffen. Premium-Qualität und umfassender, engagierter und personalisierter technischer Support.";
      h2_3.innerHTML = "Online-Buchungszentrale";
      t4.innerHTML = "Jetzt können Sie schnell und einfach von überall auf der Welt auf einen unserer Services zugreifen mit unserer Online-Buchungszentrale. Mit nur einem Klick können Sie Audiogeräte für Führungen mieten oder kaufen, Touren mit mehrsprachigen Guides buchen oder Übersetzungslösungen für globale Veranstaltungen mieten. Genießen Sie pünktliche Lieferungen und persönliche Unterstützung, alles bequem von zu Hause oder unterwegs.";
      h3_1.innerHTML = "Verbesserte Kommunikation";
      t5.innerHTML = "Die innovativen Lösungen von Foné erleichtern eine nahtlose Kommunikation über Sprachbarrieren hinweg und gewährleisten klare und effektive Interaktion in jeder Situation.";
      h3_2.innerHTML = "Unübertroffene Expertise";
      t6.innerHTML = "Mit einem Team hochqualifizierter Fachleute bietet Foné unübertroffene Expertise und Unterstützung, um Ihren einzigartigen Kommunikationsbedarf zu erfüllen.";
      h3_4.innerHTML = "Weltweite Zugänglichkeit";
      t7.innerHTML = "Egal, ob Sie eine internationale Konferenz veranstalten oder im Ausland Geschäfte machen, die Dienstleistungen von Foné sind weltweit verfügbar und gewährleisten Zugänglichkeit, wo immer Sie sind.";
      h3_5.innerHTML = "Maßgeschneiderte Lösungen";
      t8.innerHTML = "Foné versteht, dass jeder Kunde einzigartig ist, daher bieten sie maßgeschneiderte Lösungen, um Ihren spezifischen Anforderungen gerecht zu werden und ein persönliches und effektives Kommunikationserlebnis zu gewährleisten.";
      h2_4.innerHTML = "Erkunden Sie die Welt mit Unseren Unvergesslichen Touren";
      t9.innerHTML = "Begeben Sie sich auf eine unvergessliche Reise mit unserer sorgfältig ausgewählten Auswahl an Touren. Von historischen Sehenswürdigkeiten bis hin zu versteckten Schätzen entdecken Sie die Wunder der Welt mit erfahrenen Guides und Erlebnissen, die auf den Geschmack jedes Reisenden zugeschnitten sind.";
      cta4.innerHTML = "Erkunden Sie Touren";
      t10.innerHTML = "Agenturen haben von der Vermietung und dem Kauf unserer Radios profitiert";
      t11.innerHTML = "Internationale Konferenzen besucht";
      t12.innerHTML = "Einzelne Personen haben unsere Touren genossen";
      h2_5.innerHTML = "Haben Sie Fragen?";
      t13.innerHTML = "Zögern Sie nicht, uns zu kontaktieren! Unser engagiertes Team steht Ihnen zur Verfügung, um Ihnen Antworten, Anleitung und Unterstützung zu bieten. Ob es um unsere Produkte, Dienstleistungen oder etwas anderes geht, wir setzen uns dafür ein, dass Ihre Erfahrung mit uns reibungslos und problemlos verläuft. Nehmen Sie Kontakt auf und lassen Sie uns Sie auf jedem Schritt unterstützen.";
      cta5.innerHTML = "mehr erfahren";
      t14.innerHTML = "Was ist Foné Firenze und welche Dienstleistungen bietet es an?";
      t15.innerHTML = "Foné Firenze ist ein Unternehmen, das Vermietungs- und Verkaufsdienstleistungen für Führungen sowie die Organisation von Touren und Übersetzungslösungen für globale Veranstaltungen anbietet.";
      t16.innerHTML = "Wie funktioniert die Vermietung von Radios für Führungen?";
      t17.innerHTML = "Die Vermietung von Radios für Führungen ist einfach: Sie müssen nur die Anzahl der benötigten Geräte, die Mietdaten auswählen und Ihre Reservierung online vornehmen.";
      t18.innerHTML = "Bieten Sie Führungen in verschiedenen Sprachen an?";
      t19.innerHTML = "Ja, wir bieten Führungen in einer Vielzahl von Sprachen an, um den Bedürfnissen unserer Kunden gerecht zu werden.";
      t20.innerHTML = "Wie kann ich eine Tour buchen oder Ausrüstung mieten?";
      t21.innerHTML = "Sie können eine Tour buchen oder Ausrüstung direkt über unsere Website mieten oder sich auch an unser Kundenservice-Team wenden, um zusätzliche Unterstützung zu erhalten.";
      t22.innerHTML = "Wir sind hier, um Unterstützung zu bieten und alle Fragen zu klären, die Sie möglicherweise zu unseren Dienstleistungen haben.";
      h1.innerHTML = "Brauchen Sie Hilfe oder haben Sie Fragen?";
      about_us.innerHTML = "über uns";
      services.innerHTML = "Dienstleistungen";
      blog.innerHTML = "Blog";
      contact.innerHTML = "Kontakt";
      h1_1.innerHTML = "Inhaber von Reisebüros teilen ihre großartige Erfahrung mit Foné";
      h2_6.innerHTML = "Bleiben Sie auf dem Laufenden";
      t23.innerHTML = "Abonnieren Sie unseren Newsletter für exklusive Aktionen, Produkte, Dienstleistungen und Neuigkeiten!";
      account.innerHTML = "Konto";
      sign_up.innerHTML = "Anmelden";
      log_in.innerHTML = "Einloggen";
      reset.innerHTML = "Passwort zurücksetzen";
      legal1.innerHTML = "Nutzungsbedingungen";
      legal2.innerHTML = "Datenschutzbestimmungen";
      cta6.innerHTML = "Mieten Sie hier ein Radio";
      
  }
}
