const city = [
  {
    id: 1,
    image: "Bologna.jpg",
    name: "Bologna",
    description:
      "Bolonia (en italiano: Bologna, en emiliano-romañol: Bulåggna) es una ciudad del norte de Italia, capital de la ciudad metropolitana homónima y de la región de Emilia-Romaña, situada entre los ríos Reno y Savena, cerca de los Apeninos. Es una de las ciudades históricas mejor conservadas y tiene el segundo casco antiguo medieval más grande de Europa, después del de Venecia.",
    population: "394.369",
  },
  {
    id: 2,
    image: "Capri.jpg",
    name: "Capri",
    description:
      "La isla de Capri es una isla de Italia localizada en el mar Tirreno, en el lado sur del golfo de Nápoles, frente a la península Sorrentina. Ha sido un lugar de célebre belleza y centro vacacional desde la época de la antigua república romana.",
    population: "13.839",
  },

  {
    id: 3,
    image: "Firenze.jpg",
    name: "Firenze",
    description:
      "Florencia (en italiano, Firenze) es una ciudad situada en el norte de la región central de Italia, capital y ciudad más poblada de la ciudad metropolitana homónima y de la región de Toscana, de la que es su centro histórico, artístico, económico y administrativo. Cuenta con unos 378 239 habitantes,2​ y es el centro de un área metropolitana de aproximadamente un millón y medio de habitantes.",
    population: "378.239",
  },
  {
    id: 4,
    image: "Milano.jpg",
    name: "Milano",
    description:
      "Milan is a city in northern Italy, capital of Lombardy, and the second-most populous city proper in Italy after Rome. Milan is considered a leading alpha global city, with strengths in the fields of art, commerce, design, education, entertainment, fashion, finance, healthcare, media, services, research and tourism. Its business district hosts Italy's stock exchange (Italian: Borsa Italiana), and the headquarters of national and international banks and companies. ",
    population: "1.396.522",
  },
  {
    id: 5,
    image: "Napoles.jpg",
    name: "Napoles",
    description:
      "Naples is the regional capital of Campania and the third-largest city of Italy, after Rome and Milan, with a population of 967,069 within the city's administrative limits as of 2017. Founded by Greeks in the first millennium BC, Naples is one of the oldest continuously inhabited urban areas in the world.[4] In the ninth century BC, a colony known as Parthenope (Ancient Greek: Παρθενόπη) was established on the Island of Megaride. In the 6th century BC, it was refounded as Neápolis. The city was an important part of Magna Graecia, played a major role in the merging of Greek and Roman society, and was a significant cultural centre under the Romans.",
    population: "959.188",
  },
  {
    id: 6,
    image: "Pisa.jpg",
    name: "Pisa",
    description:
      "Pisa is a city and comune in Tuscany, central Italy, straddling the Arno just before it empties into the Ligurian Sea. It is the capital city of the Province of Pisa. Although Pisa is known worldwide for its leaning tower (the bell tower of the city's cathedral), the city of over 91,104 residents (around 200,000 with the metropolitan area) contains more than 20 other historic churches, several medieval palaces, and various bridges across the Arno. Much of the city's architecture was financed from its history as one of the Italian maritime republics.",
    population: "86.052",
  },
  {
    id: 7,
    image: "Positano.jpg",
    name: "Positano",
    description:
      "Positano (Campanian: Pasitano) is a village and comune on the Amalfi Coast (Province of Salerno), in Campania, Italy, mainly in an enclave in the hills leading down to the coast. The climate of Positano thanks to its position is very mild, of the Mediterranean type; the winters are very warm with minimum temperatures that almost never fall below 6 °C (43 °F), while the summers are long, warm and sunny but often refreshed by the sea breeze. ",
    population: "3.862",
  },
  {
    id: 7,
    image: "Roma.jpg",
    name: "Roma",
    description:
      "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. Rome is the country's most populated comune and the third most populous city in the European Union by population within city limits. Rome is located in the central-western portion of the Italian Peninsula, within Lazio (Latium), along the shores of the Tiber. Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the 'Eternal City'. Rome is generally considered to be the cradle of Western Christian culture and civilization, and the center of the Catholic Church.",
    population: "",
  },
  {
    id: 7,
    image: "Siracusa.jpg",
    name: "Siracusa",
    description:
      "Syracuse is a historic city on the Italian island of Sicily, the capital of the Italian province of Syracuse. The city is notable for its rich Greek and Roman history, culture, amphitheatres, architecture, and as the birthplace of the pre-eminent mathematician and engineer Archimedes.[6] This 2,700-year-old city played a key role in ancient times, when it was one of the major powers of the Mediterranean world. Syracuse is located in the southeast corner of the island of Sicily, next to the Gulf of Syracuse beside the Ionian Sea. It is situated in a drastic rise of land with 2,000 metres (6,600 ft) depths being close to the city offshore although the city itself is generally not so hilly in comparison.",
    population: "124.391",
  },
  {
    id: 7,
    image: "Torino.jpg",
    name: "Torino",
    description:
      "Turin is a city and an important business and cultural centre in northern Italy. It is the capital city of Piedmont and of the Metropolitan City of Turin, and was the first Italian capital from 1861 to 1865. The city is mainly on the western bank of the Po River, below its Susa Valley, and is surrounded by the western Alpine arch and Superga Hill. The city has a rich culture and history, being known for its numerous art galleries, restaurants, churches, palaces, opera houses, piazzas, parks, gardens, theatres, libraries, museums and other venues. Turin is well known for its Baroque, Rococo, Neo-classical, and Art Nouveau architecture.",
    population: "911.823",
  },
  {
    id: 7,
    image: "Tropea.jpg",
    name: "Tropea",
    description:
      "Tropea (Italian: [troˈpɛːa]; Calabrian: Trupìa; Latin: Tropaea; is a municipality in the province of Vibo Valentia, in Calabria, Italy. Tropea is a seaside resort with sandy beaches, located on the Gulf of Saint Euphemia, part of the Tyrrhenian Sea, on Italy's west coast and was named “Most beautiful village in Italy” for 2021.",
    population: "6.914",
  },
  {
    id: 7,
    image: "Venecia.jpg",
    name: "Venecia",
    description:
      "Venice (/ˈvɛnɪs/ VEH-niss; Italian: Venezia is a city in northeastern Italy and the capital of the Veneto region. It is built on a group of 118 small islands[2] that are separated by canals and linked by over 400 bridges. The islands are in the shallow Venetian Lagoon, an enclosed bay lying between the mouths of the Po and the Piave rivers (more exactly between the Brenta and the Sile). In 2020, 258,685 people resided in the Comune di Venezia, of whom around 55,000 live in the historical city of Venice (centro storico). Together with Padua and Treviso, the city is included in the Padua-Treviso-Venice Metropolitan Area (PATREVE), which is considered a statistical metropolitan area, with a total population of 2.6 million.",
    population: "258.685",
  },
];

export default city;
