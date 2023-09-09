let fecha="Viernes, 8 de Sept. de 2023"
const signos = [
    {
        image: "https://th.bing.com/th/id/R.a5188638e7c233f7c01ad6a8c1a7362f?rik=aduiV1jQrOXxeQ&pid=ImgRaw&r=0",
        name: "Aries",
        message: `Hoy podrías experimentar éxito y felicidad, lo que te llenará de satisfacción. Sin embargo, espera para compartirlo, ya que algunas personas clave no estarán disponibles. Necesitarás su apoyo.`,

    },
    {
        image:"https://th.bing.com/th/id/R.ae65f587f51b8c9563f36a86ccbc871f?rik=em75ZwFcAwaQMg&pid=ImgRaw&r=0",
        name:"Tauro",
        message:"Hoy a pesar de los éxitos constantes, ten cuidado con excesos en celebraciones y comida que podrían causar malestar. A pesar de ello, tu ánimo sigue alto y tu motivación fuerte para seguir con lo que ha dado resultados positivos. Deja volar tu imaginación y sigue adelante."
    },
    {
        image:"https://th.bing.com/th/id/R.05a12ef232c67aef152a8fc4beb6df7e?rik=znXLvk%2fDRdjLCQ&pid=ImgRaw&r=0",
        name:"Geminis",
        message:"Hoy, problemas en tu grupo, posiblemente en un entorno profesional, podrían hacer que ajustes tus metas. Aunque puede parecer desconcertante, considera esto como una oportunidad para explorar nuevas esperanzas y sueños. Planifica con cuidado y lánzate a ello.",
    },
    {
        image:"https://th.bing.com/th/id/R.c7197b539080e4ad87026a746583449e?rik=AnkV4HUYGlYOSA&pid=ImgRaw&r=0",
        name:"Cancer",
        message:"Hoy, experimentarás un fuerte impulso en tu ego y confianza. Tienes una gran energía física y mental, sintiéndote capaz de lograr mucho. Aprovecha esta motivación para hacer avances significativos en tus metas. El apoyo de amigos y colegas será invaluable. ¡Ve con todo!",
    },
    {
        image:"https://www.pngmart.com/files/5/Leo-PNG-Pic.png",
        name:"Leo",
        message:"Hoy podría surgir la oportunidad de hacer un viaje largo, posiblemente a otro estado o país. Este viaje puede tener un propósito más allá de unas simples vacaciones, como relacionarse con tu carrera, educación o una relación. Sea cual sea el motivo, es probable que realices el viaje y que tenga un impacto sutil pero significativo en tu vida.",
    },
    {
        image:"https://th.bing.com/th/id/R.96a07e3ed2319eb85194da3575cdfdf7?rik=JgdXJ0C9A1GQmA&pid=ImgRaw&r=0",
        name:"Virgo",
        message:"Hoy pueden emerger traumas, fobias u obsesiones pasadas que te han estado limitando. Analizar tus sueños puede proporcionarte una perspectiva valiosa. La liberación puede ser intensa, y es posible que necesites tiempo a solas, tal vez fuera de casa, para comprenderlo completamente. Al final del día, sentirás euforia porque verás un camino para superar algunos de tus obstáculos.",
    },
    {
        image:"https://th.bing.com/th/id/R.9cc969194c0b5a03107bf99312d99fe0?rik=1OXW6IJPr8xtYA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flibra-transparent%2flibra-transparent-14.png&ehk=C2h5iECLzg%2fb8AWgvun2tPThKRfNocC%2fUvO%2bwsBo2ZI%3d&risl=&pid=ImgRaw&r=0",
        name:"Libra",
        message:"Las novelas y películas románticas han despertado una pasión en ti. Hoy deseas una velada romántica con tu pareja, pero compromisos sociales previos, posiblemente relacionados con el trabajo, podrían retrasarte. Es posible que debas esperar para reunirte con esa persona, pero valdrá la pena la espera.",
    },
    {
        image:"https://th.bing.com/th/id/R.8993d4a5093bc56837a5fb2365ed7a4a?rik=FnOVa9aLWXRS0g&riu=http%3a%2f%2fstock.wikimini.org%2fw%2fimages%2f1%2f1f%2fSigne_Scorpion.png&ehk=QEcaRmKzZh%2bEAr8oPJccYUgzpv2g7Mv2QNaltQytK0o%3d&risl=&pid=ImgRaw&r=0",
        name:"Escorpión",
        message:"Hoy, a pesar de días anteriores de mal humor, te sientes renovado y en excelente estado físico, mental y emocional. Esto te brinda la energía para avanzar hacia tus objetivos inmediatos y a largo plazo. Aprovecha esta motivación y comienza a trabajar en ellos sin postergar, ya que tu nivel de energía seguirá alto durante un tiempo.",
    },
    {
        image:"https://www.pinclipart.com/picdir/big/179-1792048_sagittarius-clipart-svg-sagittarius-zodiac-png-transparent-png.png",
        name:"Sagitario",
        message:"Hoy es probable que desees un descanso de la rutina y una noche a solas con tu pareja. Sientes sensualidad y pasión, pero también hay importantes conversaciones sobre nuevas oportunidades que podrían cambiar profundamente tu vida. Tu pareja también está involucrada, así que elige tus palabras con cuidado y comparte tu entusiasmo.",
    },
    {
        image:"https://th.bing.com/th/id/R.0648321e7aacd586f53ab83385dd3708?rik=vZQmwsibKHJtVg&pid=ImgRaw&r=0",
        name:"Capricornio",
        message:"Hoy pueden venir visitantes de lejos a tu casa, causando un caos temporal pero emocionante. Tienen buenas noticias e información interesante para ti y tu familia. Querrás presentarlos a otros amigos con intereses similares, lo que puede resultar en una noche socialmente animada y divertida. ¡Prepárate para una velada social!",
    },
    {
        image:"https://i0.wp.com/www.newsbugz.com/wp-content/uploads/2018/04/Aquarius-Symbol.png?resize=700%2C470&ssl=1",
        name:"Acuario",
        message:"Puedes recibir noticias sobre renovaciones en tu comunidad a través de revistas o periódicos. Estos cambios pueden generar controversia, con muchas opiniones a favor y en contra. Antes de formarte una opinión, considera investigar más a fondo los hechos. Esto puede ser muy esclarecedor.",
    },
    {
        image:"https://th.bing.com/th/id/R.596639adf6d41b5b715908d6e09df232?rik=%2bCm904CxDu6Tjg&pid=ImgRaw&r=0",
        name:"Piscis",
        message:"Hoy, si has tenido dificultades en escritura, habla o edición, puedes experimentar un avance real. Puedes recibir una gran suma de dinero o una gran oportunidad, posiblemente relacionada con documentos legales como contratos. Esto aumentará tu ego, estado de ánimo y motivación. Aprovecha esta oportunidad.",
    },
   {
        image: "prueba",
        name:"prueba",
        message: "prueba",
   },
]

export default signos;