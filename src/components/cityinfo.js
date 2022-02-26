const city = [
  {
    image: "Ancona.jpg",
    name: "Ancona",
    description:
      "Ancona is a city and a seaport in the Marche region in central Italy. Ancona is the capital of the province of Ancona and of the region. The city is located 280 km (170 mi) northeast of Rome, on the Adriatic Sea, between the slopes of the two extremities of the promontory of Monte Conero, Monte Astagno and Monte Guasco. Ancona is one of the main ports on the Adriatic Sea, especially for passenger traffic, and is the main economic and demographic centre of the region.",
    population: "101.300",
  },
  {
    image: "Bologna.jpg",
    name: "Bologna",
    description:
      "Bologna is the capital and largest city of the Emilia-Romagna region in Northern Italy. It is the seventh most populous city in Italy with about 400,000 inhabitants and 150 different nationalities.[4] Its metropolitan area is home to more than 1,000,000 people.[5] It is known as the Fat, Red, and the Learn'd City due to its rich cuisine, red Spanish tiled rooftops, and being home to the oldest university in the western world.",
    population: "394.369",
  },
  {
    image: "Cagliari.jpg",
    name: "Cagliari",
    description:
      "Cagliari is an Italian municipality and the capital of the island of Sardinia, an autonomous region of Italy. Cagliari's Sardinian name Casteddu means castle. An ancient city with a long history, Cagliari has seen the rule of several civilisations. Under the buildings of the modern city there is a continuous stratification attesting to human settlement over the course of some five thousand years, from the Neolithic to today. Historical sites include the prehistoric Domus de Janas, very damaged by cave activity, a large Carthaginian era necropolis, a Roman era amphitheatre and a Byzantine basilica.",
    population: "154.460",
  },
  {
    image: "Capri.jpg",
    name: "Capri",
    description:
      "Capri is an island located in the Tyrrhenian Sea off the Sorrento Peninsula, on the south side of the Gulf of Naples in the Campania region of Italy. The main town Capri that is located on the island shares the name. It has been a resort since the time of the Roman Republic.",
    population: "13.839",
  },
  {
    image: "Firenze.jpg",
    name: "Firenze",
    description:
      "Florence is a city in Central Italy and the capital city of the Tuscany region. It is the most populated city in Tuscany. Florence was a centre of medieval European trade and finance and one of the wealthiest cities of that era.[4] It is considered by many academics[5] to have been the birthplace of the Renaissance, becoming a major artistic, cultural, commercial, political, economic and financial center.[6] During this time, Florence rose to a position of enormous influence in Italy, Europe, and beyond.[7] Its turbulent political history includes periods of rule by the powerful Medici family and numerous religious and republican revolutions.[8] From 1865 to 1871 the city served as the capital of the Kingdom of Italy (established in 1861).",
    population: "378.239",
  },
  {
    image: "Milano.jpg",
    name: "Milano",
    description:
      "Milan is a city in northern Italy, capital of Lombardy, and the second-most populous city proper in Italy after Rome. Milan is considered a leading alpha global city, with strengths in the fields of art, commerce, design, education, entertainment, fashion, finance, healthcare, media, services, research and tourism. Its business district hosts Italy's stock exchange (Italian: Borsa Italiana), and the headquarters of national and international banks and companies. ",
    population: "1.396.522",
  },
  {
    image: "Napoles.jpg",
    name: "Napoles",
    description:
      "Naples is the regional capital of Campania and the third-largest city of Italy, after Rome and Milan, with a population of 967,069 within the city's administrative limits as of 2017. Founded by Greeks in the first millennium BC, Naples is one of the oldest continuously inhabited urban areas in the world.[4] In the ninth century BC, a colony known as Parthenope (Ancient Greek: Παρθενόπη) was established on the Island of Megaride. In the 6th century BC, it was refounded as Neápolis. The city was an important part of Magna Graecia, played a major role in the merging of Greek and Roman society, and was a significant cultural centre under the Romans.",
    population: "959.188",
  },
  {
    image: "Parma.jpg",
    name: "Parma",
    description:
      "Parma is a city in the northern Italian region of Emilia-Romagna famous for its architecture, music, art, prosciutto (ham), cheese and surrounding countryside. Parma is the second most populous city in Emilia-Romagna after Bologna, the region's capital. The city is home to the University of Parma, one of the oldest universities in the world. Parma is divided into two parts by the stream of the same name. The district on the far side of the river is Oltretorrente. Parma's Etruscan name was adapted by Romans to describe the round shield called Parma.",
    population: "198.292",
  },
  {
    image: "Pisa.jpg",
    name: "Pisa",
    description:
      "Pisa is a city and comune in Tuscany, central Italy, straddling the Arno just before it empties into the Ligurian Sea. It is the capital city of the Province of Pisa. Although Pisa is known worldwide for its leaning tower (the bell tower of the city's cathedral), the city of over 91,104 residents (around 200,000 with the metropolitan area) contains more than 20 other historic churches, several medieval palaces, and various bridges across the Arno. Much of the city's architecture was financed from its history as one of the Italian maritime republics.",
    population: "86.052",
  },
  {
    image: "Positano.jpg",
    name: "Positano",
    description:
      "Positano (Campanian: Pasitano) is a village and comune on the Amalfi Coast (Province of Salerno), in Campania, Italy, mainly in an enclave in the hills leading down to the coast. The climate of Positano thanks to its position is very mild, of the Mediterranean type; the winters are very warm with minimum temperatures that almost never fall below 6 °C (43 °F), while the summers are long, warm and sunny but often refreshed by the sea breeze. ",
    population: "3.862",
  },
  {
    image: "Roma.jpg",
    name: "Roma",
    description:
      "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. Rome is the country's most populated comune and the third most populous city in the European Union by population within city limits. Rome is located in the central-western portion of the Italian Peninsula, within Lazio (Latium), along the shores of the Tiber. Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the 'Eternal City'. Rome is generally considered to be the cradle of Western Christian culture and civilization, and the center of the Catholic Church.",
    population: "",
  },
  {
    image: "Siracusa.jpg",
    name: "Siracusa",
    description:
      "Syracuse is a historic city on the Italian island of Sicily, the capital of the Italian province of Syracuse. The city is notable for its rich Greek and Roman history, culture, amphitheatres, architecture, and as the birthplace of the pre-eminent mathematician and engineer Archimedes.[6] This 2,700-year-old city played a key role in ancient times, when it was one of the major powers of the Mediterranean world. Syracuse is located in the southeast corner of the island of Sicily, next to the Gulf of Syracuse beside the Ionian Sea. It is situated in a drastic rise of land with 2,000 metres (6,600 ft) depths being close to the city offshore although the city itself is generally not so hilly in comparison.",
    population: "124.391",
  },
  {
    image: "Torino.jpg",
    name: "Torino",
    description:
      "Turin is a city and an important business and cultural centre in northern Italy. It is the capital city of Piedmont and of the Metropolitan City of Turin, and was the first Italian capital from 1861 to 1865. The city is mainly on the western bank of the Po River, below its Susa Valley, and is surrounded by the western Alpine arch and Superga Hill. The city has a rich culture and history, being known for its numerous art galleries, restaurants, churches, palaces, opera houses, piazzas, parks, gardens, theatres, libraries, museums and other venues. Turin is well known for its Baroque, Rococo, Neo-classical, and Art Nouveau architecture.",
    population: "911.823",
  },
  {
    image: "Tropea.jpg",
    name: "Tropea",
    description:
      "Tropea is a municipality in the province of Vibo Valentia, in Calabria, Italy. Tropea is a seaside resort with sandy beaches, located on the Gulf of Saint Euphemia, part of the Tyrrhenian Sea, on Italy's west coast and was named “Most beautiful village in Italy” for 2021.",
    population: "6.914",
  },
  {
    image: "Venecia.jpg",
    name: "Venezia",
    description:
      "Venezia is a city in northeastern Italy and the capital of the Veneto region. It is built on a group of 118 small islands[2] that are separated by canals and linked by over 400 bridges. The islands are in the shallow Venetian Lagoon, an enclosed bay lying between the mouths of the Po and the Piave rivers (more exactly between the Brenta and the Sile). In 2020, 258,685 people resided in the Comune di Venezia, of whom around 55,000 live in the historical city of Venice (centro storico). Together with Padua and Treviso, the city is included in the Padua-Treviso-Venice Metropolitan Area (PATREVE), which is considered a statistical metropolitan area, with a total population of 2.6 million.",
    population: "258.685",
  },
];

export default city;
