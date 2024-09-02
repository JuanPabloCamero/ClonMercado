//imagenes
import freidora from '../assets/freidora.png'
import licuadora from '../assets/licuadora.png'
import kitSoda from '../assets/kitSoda.png'
import exprimidora from '../assets/exprimidora.png'
import cafetera from '../assets/cafetera.png'
import camiseta from '../assets/camiseta.png'
import reloj from '../assets/reloj.png'
import gafas from '../assets/gafas.png'
import pantalon from '../assets/pantalon.png'
import sombrilla from '../assets/sombrilla.png'
import nissan from '../assets/nissan.png'
import mazda from '../assets/mazda.png'
import suzuki from '../assets/suzuki.png'
import toyota from '../assets/toyota.png'
import hyundai from '../assets/hyundai.png'
import televisor from '../assets/televisor.png'
import sillas from '../assets/sillas.png'
import silla from '../assets/silla.png'
import comedor from '../assets/comedor.png'
import escritorio from '../assets/escritorio.png'
import serum from '../assets/serum.png'
import aceite from '../assets/aceite.png'
import nivea from '../assets/nivea.png'
import kitMaquina from '../assets/kitMaquina.png'
import plancha from '../assets/plancha.png'

const productsData = [
  {
    id: 1,
    category: "appliances",
    name: "Freidora De Aire",
    image: freidora,
    description: "La Freidora de Aire IMUSA Easy Fry Deluxe 4,2L digital, te permite realizar recetas saludables para toda la familia, requiere poco o inclusive nada de aceite, para freir, asar y hornear todas tus comidas favoritas. Su capacidad de 4,2 litros te permitirá realizar hasta 6 porciones a la vez. Su pantalla táctil digital hace más óptimo y fácil la preparación de las recetas",
    price: "$319,900",
    status: "Delivered",
  },
  {
    id: 2,
    category: "appliances",
    name: "Licuadora Imusa",
    image: licuadora,
    description: "Un electrodoméstico infaltable en tu casa. La licuadora Imusa Powermix Glass te ayudará a obtener resultados increíbles en todo lo que prepares, ya sea que quieras disfrutar de una bebida bien fría, de salsas y sopas, o de postres deliciosos. ¡Tenla siempre a mano!",
    price: "$99,900",
    
  },
  {
    id: 3,
    category: "appliances",
    name: "Kit Maquina Para Sodas",
    image: kitSoda,
    description: "Maquina Para Hacer agua con gas y sodas con cilindro Co2. Haz tus refrescos de sodas de fácil y rápido.",
    price: "$319,900",
    
  },
  {
    id: 4,
    category: "appliances",
    name: "Exprimidor Oster Fpstju407w Blanco",
    image: exprimidora,
    description: "Descubre el Exprimidor De Cítricos Oster®, un aliado indispensable en tu cocina que combina funcionalidad y diseño. Con su innovador mecanismo automático de arranque y parada, disfrutarás de una experiencia de uso sin complicaciones.",
    price: "$89,400",
    
  },
  {
    id: 5,
    category: "appliances",
    name: "Cafetera Imusa Café City 6 tazas",
    image: cafetera,
    description: "Los amantes del café quieren disfrutar de su bebida favorita en cualquier momento, en cualquier lugar. Ahora con nuestra Cafetera IMUSA Cafe City con capacidad de 6 tazas podrás disfrutar de la bebida más deliciosa del mundo. Su sistema antigoteo te permite retirar la jarra mientras el café se prepara, para que disfrutes de tu taza en el momento que desees. ",
    price: "$79,900",
  },
  {
    id: 6,
    category: "fashion",
    name: "Camisa Gio Manga Larga Unicolor Para Hombre",
    image: camiseta,
    description: "Camisa Manga Larga Unicolor, tela plana sin textura, cuello italiano, prenda para vestir formal y casual",
    price: "$69,900",
    status: "Cancelled"
  },
  {
    id: 7,
    category: "fashion",
    name: "Reloj pulsera Skmei 1251 negro",
    image: reloj,
    description: "¡Llegó la hora de llevar tu estilo al siguiente nivel con este reloj Skmei 1251! Este reloj deportivo y elegante es perfecto para cualquier ocasión, desde actividades al aire libre hasta reuniones de negocios.",
    price: "$39,400",
  },
  {
    id: 8,
    category: "fashion",
    name: "Gafas de sol polarizados Dubery",
    image: gafas,
    description: "La selección de lentes de sol de calidad es fundamental para garantizar el cuidado de la vista. Las gafas protegen los ojos de los rayos UV y mejoran la visibilidad, ya que reducen el reflejo que ocasiona la luz solar.",
    price: "$99,900",
  },
  {
    id: 9,
    category: "fashion",
    name: "Pantalón Sudadera Tipo Jogger Para Dama",
    image: pantalon,
    description: "El pantalón sudadera tipo jogger para dama es una prenda cómoda y versátil, perfecta para quienes buscan combinar estilo casual con confort. Diseñado con una silueta relajada que se ajusta suavemente al cuerpo, este jogger presenta una cintura elástica con cordón ajustable, lo que permite un ajuste personalizado y cómodo en la cadera.",
    price: "$36,900",
  },
  {
    id: 10,
    category: "fashion",
    name: "Sombrilla Automática 130cm",
    image: sombrilla,
    description: "La Sombrilla Automática de 130 cm Truper 65012 es un accesorio práctico y resistente, diseñado para ofrecer una protección confiable contra la lluvia. Con un diámetro amplio de 130 cm, esta sombrilla proporciona una cobertura generosa, ideal para mantenerte seco en días lluviosos.",
    price: "$69,650",
  },
  {
    id: 11,
    category: "vehículos",
    name: "Nissan Kicks 1.6 Advance At",
    image: nissan,
    description: "El Nissan Kicks 1.6 Advance AT es un SUV compacto que combina estilo, funcionalidad y tecnología, ideal para quienes buscan un vehículo versátil y moderno para la vida urbana. Equipado con un motor de 1.6 litros, ofrece un buen equilibrio entre potencia y eficiencia de combustible, acompañado de una transmisión automática (AT) que garantiza una conducción suave y cómoda, especialmente en el tráfico citadino.",
    price: "$74,500,000",
    status: "in transit"
  },
  {
    id: 12,
    category: "vehículos",
    name: "Mazda 2 1.5 Grand Touring Lx",
    image: mazda,
    description: "- Color Rojo Diamante. Soat hasta Febrero de 2025 El Mazda 2 1.5 Grand Touring LX es un automóvil compacto que destaca por su diseño elegante y moderno, ideal para la ciudad. Está equipado con un motor de 1.5 litros que ofrece un equilibrio entre eficiencia de combustible y desempeño dinámico, brindando una experiencia de conducción ágil y divertida.",
    price: "$71,500,000",
  },
  {
    id: 13,
    category: "vehículos",
    name: "Suzuki Vitara 1.6 Live Gl",
    image: suzuki,
    description: "La Vitara Live tiene un estilo propio y único que combina la imagen de una camioneta Suzuki con los detalles modernos únicos, propios del espíritu de una 4×4. Adicionalmente, como innovación en este modelo de Suzuki, puedes escoger tu opción favorita: color carrocería color techo. ",
    price: "$80,000,000",
  },
  {
    id: 14,
    category: "vehículos",
    name: "Toyota Prado 3.0 Tx-l Fl 2",
    image: toyota,
    description: "El Toyota Prado 3.0 TX-L FL 2 es un SUV robusto y elegante, diseñado para ofrecer una experiencia de conducción superior tanto en carretera como fuera de ella. Este modelo cuenta con un motor diésel de 3.0 litros que proporciona una combinación excelente de potencia y eficiencia, permitiendo un rendimiento sólido en una variedad de terrenos y condiciones.",
    price: "$240,000,000",
  },
  {
    id: 15,
    category: "vehículos",
    name: "Hyundai Tucson 2.0 Gl Premium",
    image: hyundai,
    description: "El Hyundai Tucson 2.0 GL Premium es un SUV compacto que destaca por su estilo sofisticado, tecnología avanzada y rendimiento eficiente. Equipado con un motor de 2.0 litros, ofrece una conducción suave y confiable, ideal tanto para el entorno urbano como para viajes largos en carretera. Este motor, combinado con una transmisión automática de múltiples velocidades, asegura una experiencia de manejo ágil y eficiente en consumo de combustible.",
    price: "$82,900,000",
  },
  {
    id: 16,
    category: "Home and furniture",
    name: "Televisor Samsung 58 Crystal Uhd 4k Cu7000",
    image: televisor,
    description: "El Televisor Samsung 58 Crystal UHD 4K CU7000 es una excelente opción para quienes buscan una experiencia visual de alta calidad en un formato grande. Con una pantalla de 58 pulgadas, este televisor ofrece imágenes nítidas y detalladas gracias a su resolución 4K Ultra HD, que proporciona cuatro veces más claridad que los televisores Full HD. El panel Crystal UHD asegura colores vivos y precisos, creando una experiencia de visualización inmersiva y realista.",
    price: "$2,029,900",
    status: "Delivered"
  },
  {
    id: 17,
    category: "Home and furniture",
    name: "Kit 4 Sillas Charles Eames Madera - Eiffel Colores",
    image: sillas,
    description: "Para quienes sueñan con un hogar hermoso y acogedor, la Silla Eames DKR es la pieza clave que transformará tus espacios en verdaderos oasis de estilo y confort. Su diseño sofisticado y su adaptabilidad la convierten en la elección ideal para profesionales, amantes del diseño, decoradores, emprendedores y personas que buscan crear ambientes excepcionales.",
    price: "$316,100",
  },
  {
    id: 18,
    category: "Home and furniture",
    name: "Silla De Escritorio Con Cabecero Lux Negro Bonno",
    image: silla,
    description: "La Silla de Oficina Lux HM, impacta a primera vista ¡Segura y Original! Conoce sus principales beneficios y disfrútalos: Es una silla de Bonno que coopera con tu trabajo y te lo hace mucho más fácil. Es tan eficiente y flexible como tú la necesitas",
    price: "$338,000",
  },
  {
    id: 19,
    category: "Home and furniture",
    name: "Juego de mesa de comedor Madesa con 4 sillas",
    image: comedor,
    description: "El juego de comedor Bea es la opción hecha a medida para ti. El tamaño es ideal para entornos más compactos. La mesa de comedor rectangular de madera tiene capacidad para 4 personas de una manera acogedora. La sugerencia es usarla contra la pared, tanto en la cocina como en el comedor o la sala de estar, ganando aún más espacio.",
    price: "$659,900",
  },
  {
    id: 20,
    category: "Home and furniture",
    name: "Escritorio Gamer Max Color Wengue Neo",
    image: escritorio,
    description: "Escritorio Gamer MAX Color Wengue NeoIdeal para tu estudio y/o oficina. Capacidad para dos monitor hasta28. Cuenta con Altillo para monitor, espacio para torre de computador, 1 cajón,1 puerta abatible, Múltiples compartimiento y deslizadores plásticos. Nuestros muebles tienen garantía de 60 meses sobre las piezas de aglomerado y 12 meses sobre los accesorios. Fabricados en MDP madera pino aglomerada en partículas, cubierta en melaminico. Herrajes de primera. Todo el respaldo de nuestra marca.Medidas:Ancho x alto x Prof.150 x 88 x 52 cm",
    price: "$399,900",
  },
  {
    id: 21,
    category: "Beauty and personal care",
    name: "Sébium Serum - Bioderma 30 Ml",
    image: serum,
    description: "Gracias a la acción complementaria de principios activos dosificados con precisión (Ácido Salicílico, Acetil Glucosamina, Ácido Hialurónico), Sébium Serum reduce visiblemente las imperfecciones y los primeros signos de envejecimiento. Después de 7 días, los signos visibles de la piel adulta se reducen: granos, marcas, poros dilatados, líneas de expresión. La piel está más luminosa y tersa. Resultados duraderos.",
    price: "$142,800",
    status: "Cancelled"
  },
  {
    id: 22,
    category: "Beauty and personal care",
    name: "Aceite M Batana Para El Crecimiento Del Cabello, Un Cabello",
    image: aceite,
    description: "El aceite de batana aporta tanto al cuero cabelludo como al cabello para combatir sequedad y encrespamiento a la vez que reduce las puntas abiertas, promueve un cabello de aspecto más saludable. Protege y mejora el color del cabello. El aceite de batana forma una barrera protectora alrededor de las hebras del cabello y mejora el color natural del cabello, añadiendo riqueza y vitalidad",
    price: "$51,485",
  },
  {
    id: 23,
    category: "Beauty and personal care",
    name: "Nivea Crema Corporal Q10 Plus Reafirmante Vitamina C 1000ml",
    image: nivea,
    description: "Crema Corporal Humectante y Reafirmante Nivea Q10 48 Horas De Humectación Profunda enriquecida con Vitamina C para una piel visiblemente más firme ideal para Piel Normal 1000 ml. Especialmente formulada para todo tipo de piel, la crema corporal de NIVEA Reafirmante Q10 proporciona hidratación rápida que deja a tu piel suave e hidratada después de una sola aplicación.",
    price: "$74,108",
  },
  {
    id: 24,
    category: "Beauty and personal care",
    name: "Kit Recortador Remington Indestructible Pg6855",
    image: kitMaquina,
    description: "La cortadora de detalle personal cuenta con cuchillas de acero inoxidable autoafilables para un rendimiento de corte superior y máxima eficiencia. Como un buen juego de peluquería incluye los accesorios necesarios para recortar el vello de la nariz y las orejas maneja los detalles en áreas sensibles. Puede elegir entre 5 peines de guía y/o el peine ajustable para encontrar la longitud perfecta en el vello facial. La batería de litio proporciona la máxima potencia para un recorte consistente y de alto rendimiento con hasta 90 minutos de uso sin cable.",
    price: "$141,700",
  },
  {
    id: 25,
    category: "Beauty and personal care",
    name: "Plancha Alisadora Remington Shine T",
    image: plancha,
    description: "Con la Plancha Alisadora Remington Shine Therapy, tu cabello puede recibir el cuidado de aguacate y macadamia. Las placas de cerámica de alta calidad están impregnadas con una mezcla de microacondicionadores que se liberan con el calor, mejorando el brillo para un acabado profesional. Este tratamiento de microacondicionadores de aguacate y macadamia está diseñado para lograr un cabello más saludable y un acabado extremadamente liso y brillante. Con la alisadora Shine Therapy, podrás obtener un cabello resplandeciente con un 86% más de brillo*.",
    price: "$173,478",
  }
]

export default productsData