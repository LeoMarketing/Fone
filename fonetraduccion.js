/* Botones de traducción */
let espanol = document.getElementById("espanol");
let english = document.getElementById("english");

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

/* Eventos de click para cambiar idioma */
espanol.onclick = ()=>{
    setLanguage("espanol");
    localStorage.setItem("Lang","espanol");
};

english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("Lang","english");
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
  }
}
