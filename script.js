const yoKaiList = [
  { "name": "Loupépin", "img": "Robin_Ful.png" },
  { "name": "Antitaie", "img": "Tornalmohado.png" },
  { "name": "Superfouétar", "img": "Gran_Coco.png" },
  { "name": "Ronain", "img": "Minimoto.png" },
  { "name": "Caliméballe", "img": "Bola_Blanda.png" },
  { "name": "Battant", "img": "Bateados.png" },
  { "name": "XXL de bain", "img": "Chupapremios.png" },
  { "name": "El Gallardo", "img": "Guerrero_Guey.png" },
  { "name": "Grande Gallardo", "img": "Huracan_Guey.png" },
  { "name": "Barbokai", "img": "Barbacoo.png" },
  { "name": "Moinon", "img": "Piopio_Yonohesido.png" },
  { "name": "Bodruche", "img": "Globonauta.png" },
  { "name": "Shurikenny", "img": "Shurikenny.png" },
  { "name": "Nunchucky", "img": "Nunchucky.png" },
  { "name": "Camélia", "img": "Camelia.png" },
  { "name": "Bradguette", "img": "Cremallero.png" },
  { "name": "Toutournemal", "img": "Metepatas.png" },
  { "name": "Duc Delafeuille", "img": "Mochueloque.png" },
  { "name": "Feuildechou", "img": "Todoidos.png" },
  { "name": "Curryeux", "img": "Preguntio.png" },
  { "name": "Curryogi", "img": "Respondio.png" },
  { "name": "Lescampette", "img": "Exitio.png" },
  { "name": "Boulet Frit", "img": "Cachocarne.png" },
  { "name": "Épigerien", "img": "Mazorco.png" },
  { "name": "Koeud", "img": "Cascarito.png" },
  { "name": "Lord Écibel", "img": "Pomponio_Gala.png" },
  { "name": "Steuf", "img": "Fiestuki.png" },
  { "name": "Crânéidoscope", "img": "Calaveroscopio.png" },
  { "name": "Lionguiste", "img": "Leonguista.png" },
  { "name": "Wattson", "img": "Estatinino.png" },
  { "name": "Professeur Plumage", "img": "Profesor_Avertijo.png" },
  { "name": "Volroulo", "img": "Noaipapel.png" },
  { "name": "Imadjinn", "img": "Jipigenio.png" },
  { "name": "Aramis Taire", "img": "Miss_Teria.png" },
  { "name": "Eddylapid", "img": "Renaldo.png" },
  { "name": "Sodartha", "img": "Isotomas.png" },
  { "name": "Mata Hase", "img": "Coneagente.png" },
  { "name": "Blanche Hase", "img": "Blancacone.png" },
  { "name": "Otto", "img": "Prudencio.png" },
  { "name": "Dépotache", "img": "Explotacota.png" },
  { "name": "Graffaël", "img": "Grafilcebu.png" },
  { "name": "Chameuhllow", "img": "Chocovaca.png" },
  { "name": "Pot-au-meuh", "img": "Vacaloca.png" },
  { "name": "Piètros", "img": "Fracalavero.png" },
  { "name": "Bricolos", "img": "Calabilidoso.png" },
  { "name": "Big O'Max", "img": "Master_Chof.png" },
  { "name": "Axeérator", "img": "Monte_Merario.png" },
  { "name": "Navétéran", "img": "Calmarinero.png" },
  { "name": "Navigarmateur", "img": "Almirante_Admirable.png" },
  { "name": "Pogorille", "img": "Peter_Punki.png" },
  { "name": "Mulangeur", "img": "Pantuflo.png" },
  { "name": "Andrécup", "img": "Reahucio.png" },
  { "name": "Zopzoparleur", "img": "Radiopatio.png" },
  { "name": "Aloyauler", "img": "Filete_II.png" },
  { "name": "Superobonyan", "img": "Showbonyan.png" },
  { "name": "Squale Masqué", "img": "Tiburon_Tiburcio.png" },
  { "name": "El Squalador", "img": "Tiburon_Jaqueton.png" },
  { "name": "Flèche d'Azur", "img": "Capitan_Nublo.png" },
  { "name": "Twirly Vertipiou", "img": "Sincopollo.png" },
  { "name": "Tartinmarre", "img": "Brownilda.png" },
  { "name": "Marceauterelle", "img": "Chapulin.png" },
  { "name": "Eclopain", "img": "Apanleado.png" },
  { "name": "Pain Surprise", "img": "Panduro.png" },
  { "name": "Bambincroyable", "img": "Superninato.png" },
  { "name": "Bambinsupportable", "img": "Superninato_Rebelde.png" },
  { "name": "Bambinflammable", "img": "Superninato_Picajoso.png" },
  { "name": "Jeniflair", "img": "BellonZ.png" },
  { "name": "Quésacourt", "img": "Olvirunner.png" },
  { "name": "Vasco de Gamiaou", "img": "Gatallanes.png" },
  { "name": "Erzestine", "img": "Limonescente.png" },
  { "name": "Ficheline", "img": "Tomanota.png" },
  { "name": "Kay Mandeuse", "img": "Zalameria.png" },
  { "name": "Jibanyan Liu Bei", "img": "Jibanyan_Liu_Bei.png" },
  { "name": "Komasan Sun Ce", "img": "Komasan_Sun_Ce.png" },
  { "name": "Moufrpète", "img": "Todoapesta.png" },
  { "name": "Ratonglandeur", "img": "Relapache.png" },
  { "name": "Espreschiot", "img": "Cafechucho.png" },
  { "name": "Fortuné", "img": "Partidacio.png" },
  { "name": "Tomnyan", "img": "Tomnyan.png" },
  { "name": "Komaventuriers", "img": "Komaestopistas.png" },
  { "name": "Faustille", "img": "Segadora.png" },
  { "name": "Chocobo-nyan", "img": "Chocobonyan.png" },
  { "name": "Mog-nyan", "img": "Mogurinyan.png" },
  { "name": "Wobblenyan", "img": "Wobblenyan.png" },
  { "name": "Wibblekoma", "img": "Wibblekoma.png" },
  { "name": "Sushinyan", "img": "Sushinyan.png" },
  { "name": "Tempurasan", "img": "Tempurasan.png" },
  { "name": "Tenguriginal", "img": "Tenguriginal.png" },
  { "name": "Ange Garudien", "img": "Angel_Garudian.png" },
  { "name": "Barbucheron", "img": "Lenaciegotxea.png" },
  { "name": "Double croche", "img": "Chunda_y_Tachunda.png" },
  { "name": "Papi XXl", "img": "Abuzampa_XXL.png" },
  { "name": "Bleunet de Bain", "img": "Albornocita_Azul.png" },
  { "name": "Antoilette", "img": "Florentina.png" },
  { "name": "Afronaute", "img": "Afronauta.png" },
  { "name": "Charivariz", "img": "Arrocet.png" },
  { "name": "Optimiss", "img": "Espe.png" },
  { "name": "Benjirouette", "img": "Bellotieso.png" },
  { "name": "Clic-Bull", "img": "Clican.png" },
  { "name": "Dagamberge", "img": "Indeciguro.png" },
  { "name": "Fourchelangue", "img": "Trabalanghi.png" },
  { "name": "Papana Split", "img": "Dormidomingo.png" },
  { "name": "Maudestique", "img": "Auxiliadora.png" },
  { "name": "Papécolo", "img": "Abuflauta.png" },
  { "name": "Les Frères Topla", "img": "Gememinencias.png" },
  { "name": "Tatartelette", "img": "Repostilleja.png" },
  { "name": "Javabien", "img": "Gogonzalo.png" },
  { "name": "Fluorence", "img": "Esmaltina.png" },
  { "name": "Maintendante", "img": "Fantasfitriona.png" },
  { "name": "Survolt", "img": "Sonico.png" },
  { "name": "Supervolt", "img": "Supersonico.png" },
  { "name": "Auberchouine", "img": "Berenpenas.png" },
  { "name": "Timouchar", "img": "Akusika.png" },
  { "name": "Bazaronin", "img": "Leonerai.png" },
  { "name": "Arbrézo", "img": "Trenditopico.png" },
  { "name": "Arbrézo-social", "img": "Retuiterio.png" },
  { "name": "Tête de lard", "img": "Panceto.png" },
  { "name": "Indexter", "img": "Bilgatino.png" },
  { "name": "Hacksel", "img": "Su_Hackeltad.png" },
  { "name": "Flagesté", "img": "Rey_Pulsivo.png" },
  { "name": "Escrocorico", "img": "Timo_Gallo.png" },
  { "name": "Rocky Badboya", "img": "Rocky_Malrolla.png" },
  { "name": "Charlognard", "img": "Hierodista.png" },
  { "name": "M. Orthogaffe", "img": "Herrato.png" },
  { "name": "TuKappa", "img": "MC_Kappa.png" },
  { "name": "Sinécureuil", "img": "Tumbardillo.png" },
  { "name": "Usapyon Zhongda", "img": "Usapyon_Zhongda.png" },
  { "name": "Dr Néant", "img": "Dr_Nihil_Listo.png" },
  { "name": "Dr Crépuscule", "img": "Dr_Nocturnia.png" },
  { "name": "Entout'Hâtila", "img": "Espaya.png" },
  { "name": "Cravat'en", "img": "Corbapacasa.png" },
  { "name": "Déshirley", "img": "Cartairada.png" },
  { "name": "Maindécis", "img": "Ambivalencio.png" },
  { "name": "Carquentin", "img": "Lapo.png" },
  { "name": "Théopportun", "img": "Dabombo.png" },
  { "name": "Triopportun", "img": "Los_Bomboledores.png" },
  { "name": "Crassiella", "img": "Amarilia.png" },
  { "name": "Werner Avif", "img": "Sheriff_Agonio.png" },
  { "name": "Renegainaël", "img": "Padefo.png" },
  { "name": "Seulimane", "img": "Sololo.png" },
  { "name": "Maracraque", "img": "Maracario.png" },
  { "name": "Taïbasse", "img": "Pandalon.png" },
  { "name": "Persépoil", "img": "Peluson.png" },
  { "name": "Javamal", "img": "Amarguito.png" },
  { "name": "Malocoeur", aliases: ["Malocoeur", Malocœur"], "img": "Nauseo.png" },
  { "name": "Hadespote", "img": "Condespotico.png" },
  { "name": "Jean-Mèchel", "img": "Flequipilante.png" },
  { "name": "Oridjinn", "img": "Origenio.png" },
  { "name": "Horridjinn", "img": "Horrogenio.png" },
  { "name": "Diablotine", "img": "Fulgurilla.png" },
  { "name": "Thépacap", "img": "Saltetera.png" },
  { "name": "Escarcool", "img": "Don_Despacito.png" },
  { "name": "Outransss", "img": "Sierpesado.png" },
  { "name": "Médisansss", "img": "Cobravil.png" },
  { "name": "Ébobby", "img": "Aymadrilo.png" },
  { "name": "Céfasslopode", "img": "Naqueperder.png" },
  { "name": "Barbuzz", "img": "Borjamar.png" },
  { "name": "Tyragédie", "img": "Bebesaurio.png" },
  { "name": "Catastrosaure", "img": "Destrozasaurio.png" },
  { "name": "Godichezilla", "img": "Torpesaurio.png" },
  { "name": "Criquetif", "img": "Luigi_Longueras.png" },
  { "name": "Poulpulaire", "img": "Pulpopular.png" },
  { "name": "Poulpétard", "img": "Tentanfadado.png" },
  { "name": "Chocobananar", "img": "Tochacolate.png" },
  { "name": "Agraisseur", "img": "Sustoleo.png" },
  { "name": "Diegoïste", "img": "Reptozudo.png" },
  { "name": "Entraînette", "img": "Saporientador.png" },
  { "name": "Originyan", "img": "originyan.gif" },
  { "name": "Scientifiborg Y", "img": "Aydroide_Y.png" },
  { "name": "Roi Jibanyan", "img": "Rey_Jibanyan.png" },
  { "name": "Dame Usapyon", "img": "Reina_Usapyon.png" },
  { "name": "Valet Komasan", "img": "Jotamasan.png" },
  { "name": "Dix de Komajiro", "img": "Diez_de_Komajiro.png" },
  { "name": "As de nyan", "img": "Asnyan.png" },
  { "name": "Josper", "img": "Whismodin.png" },
  { "name": "Benzaiten", "img": "Benzaiten.png" },
  { "name": "Hotei", "img": "Hotei.png" },
  { "name": "Daikokuten", "img": "Daikokuten.png" },
  { "name": "Ebisu", "img": "Ebisu.png" },
  { "name": "Bishamonten", "img": "Bishamonten.png" },
  { "name": "Chagellan", "img": "Gatobal_Colon.png" },
  { "name": "T. Energison", aliases: ["T. Energison", "T Energison"], "img": "T_Energison.png" },
  { "name": "Papy Charles", "img": "Darguin.png" },
  { "name": "Le Dernier Nyanmuraï", "img": "Ultimo_Nyanmurai.png" },
  { "name": "Komastar", "img": "Koma_Estrella.png" },
  { "name": "Platinos", "img": "Platinum.png" },
  { "name": "Papi Taliste", "img": "Abusplendido.png" },
  { "name": "Saincope", "img": "Re-Q-Pera.png" },
  { "name": "Corailline", "img": "Divamarina.png" },
  { "name": "Asura", "img": "Todobelicoso.png" },
  { "name": "Terminyanator", "img": "Terminyanator.png" },
  { "name": "Supernyan", "img": "Supernyan.png" },
  { "name": "Hovernyan S", "img": "Hovernyan_S.png" },
  { "name": "Hovernyan Cao Cao", "img": "Hovernyan_Cao_Cao.png" },
  { "name": "Yogaratoi", "img": "Yoguididacta.png" },
  { "name": "Haltela", "img": "Frauduralla.png" },
  { "name": "Grovide", "img": "Insaciablo.png" },
  { "name": "Tristos", "img": "Penancio.png" },
  { "name": "Octorbot", "img": "Venoctobot.png" },
  { "name": "Orqanos Lu Bu", "img": "Demoniorco_Lu_Bu.png" },
  { "name": "Kyubot", "img": "Kyubot.png" },
  { "name": "Robonyan Ultime", "img": "Robonyan_Definitivo.png" },
  { "name": "Taupe-modèle", "img": "Topina.png" },
  { "name": "Moqua glacé", "img": "Miss_Mousse.png" },
  { "name": "Normaline", "img": "populina.gif" },
  { "name": "Koalanyan", "img": "Koalanyan.png" },
  { "name": "Jibanyan T", "img": "jibanyan_T.gif" },
  { "name": "Komasan T", "img": "komasan_T.gif" },
  { "name": "Oeuxcellence", "img": "Yemajestad.png" },
  { "name": "Deadcool", "img": "Cicloman.png" },
  { "name": "Athlaitue", "img": "Deporchugo.png" },
  { "name": "Fantimoré", "img": "Timorato_Buendia.png" },
  { "name": "Ailexagère", "img": "Maripasada.png" },
  { "name": "Trèchérubine", "img": "Ulteria.png" },
  { "name": "Otempourmoa", "img": "Milperdones.png" },
  { "name": "Céodieux", "img": "Angustianima.png" },
  { "name": "Momignorante", "img": "Cutremomia.png" },
  { "name": "Justicier Komasqué", "img": "Kapman.png" },
  { "name": "Tofupyon", "img": "Tofupyon.png" },
  { "name": "Guillotin", "img": "Dex_Capito.png" },
  { "name": "Ambassadeur de charme", "img": "Embajador_Fabuloso.png" },
  { "name": "Domnician", "img": "Intelecto_A.png" },
  { "name": "Zazel", "img": "Zazel_A.png" },
  { "name": "Procrastinocchio", "img": "Procrastinocho.png" },
  { "name": "Escoffregriffe", "img": "Cofre_Cafre.png" },
  { "name": "Coco Barjo", "img": "Coco_Masiel.png" },
  { "name": "Whisper Kongming", "img": "Whisper_Kongming.png" },
  { "name": "Jurojin", "img": "Jurojin.png" },
  { "name": "Fukurokuju", "img": "Fukurokuju.png" },
  { "name": "Sorcophage", "img": "Maldenotep.png" },
  { "name": "Sire Trompelamor", "img": "Rey_Palmiro.png" },
  { "name": "Pandore", "img": "Pandora.png" },
  { "name": "Génie du rire", "img": "Ingenio.png" },
  { "name": "Bastetnyan", "img": "Bastenyan.png" },
  { "name": "Komanubis", "img": "Komanubis.png" },
  { "name": "Baratina", "img": "Discursi.png" },
  { "name": "Institours", "img": "Educoso.png" },
  { "name": "Aristocorniot", "img": "Lord_Pedigri.png" },
  { "name": "Mégalopaul", "img": "Urbasierpe.png" },
  { "name": "Roi Pourkoidon", "img": "Pregundragon_Rey.png" },
  { "name": "Zazel le bon", "img": "Zazel_Justiciero.png" },
  { "name": "Domniscian 2.0", "img": "Intelecto_Iluminado_A.png" },
  { "name": "Enma l'Ancien", "img": "Enma_Ancestral.png" },
  { "name": "Seigneur Enma 2.0", "img": "Gran_Enma_Iluminado.png" },
  { "name": "Somnoracle", "img": "Rollaculo.png" },
  { "name": "Shivatenguerre", "img": "Maharazas.png" },
  { "name": "Cymbaline", "img": "Cimbalina.png" },
  { "name": "Gromel", "img": "Masculloso.png" },
  { "name": "Vociféro", "img": "Vociferio.png" },
  { "name": "Glapie", "img": "Aviguito_Pio.png" },
  { "name": "Affolanterne", "img": "Frustrolillo.png" },
  { "name": "Meuhlinda", "img": "Bovida.png" },
  { "name": "Hiivon", "img": "Equinio.png" },
  { "name": "Turboss", "img": "Pecificador.png" },
  { "name": "Alpinella", "img": "Alpina.png" },
  { "name": "Lunatio", "img": "Seleno.png" },
  { "name": "KJ", "img": "KJ.png" },
  { "name": "Enma Solaire", "img": "Enma_Solar.png" },
  { "name": "Enma Infini", "img": "Enma_Infinito.png" },
  { "name": "Enma Funèbre", "img": "Enma_Umbrio.png" },
  { "name": "Indiana Jaws", "img": "tibu_Jones.gif" },
  { "name": "M. Spioche", "img": "vulcavador.gif" },
  { "name": "Zombigoût", "img": "adoleszombi.gif" },
  { "name": "Nyansès II", "img": "nyanses_II.gif" },
  { "name": "Néfertyrannie", "img": "Miopatra.png" },
  { "name": "Cocassepied", "img": "mazado_de_la_Calzada.gif" },
  { "name": "El Dragonor", "img": "Dradorado.png" },
  { "name": "Phémniscian", "img": "Fenixtelecto.png" },
  { "name": "Fratracteur", "img": "Chatarrenstein.png" },
  { "name": "Supermanager", "img": "Supergerente.png" },
  { "name": "Thibonimenteur", "img": "Ilusionisto.png" },
  { "name": "Agent X", "img": "Camorro.png" },
  { "name": "Agent Rixe", "img": "Diavolo.png" },
  { "name": "Minustrel", "img": "Flautista_de_Malmelin.png" },
  { "name": "Yo-kaiju", "img": "Gamero.png" },
  { "name": "Yopple-Bot", "img": "Yopple-Bot.png" },
  { "name": "No-Bot", "img": "No-Bot.png" },
  { "name": "Dodorothée", "img": "Nocturnia.png" },
  { "name": "King Keskler", "img": "Ray_Baqueto.png" },
  { "name": "Don Morleone", "img": "Don_Crueleone.png" },
  { "name": "Don Spiration", "img": "Don_Conspirazione.png" },
  { "name": "Magnustrel", "img": "Flautiscolito.png" },
  { "name": "Voltéophyte", "img": "Duocolito.png" },
  { "name": "Didgéophyte", "img": "Cantacolito.png" },
  { "name": "Tornadoculaire", "img": "Ciclonojo.png" },
  { "name": "Clochemar", "img": "Caballero_Hueco.png" },
  { "name": "Rôdin", "img": "Paticio.png" },
  { "name": "Orqéophyte", "img": "Demoniorcolito.png" },
  { "name": "Karmagister", "img": "Iluminazen.png" },
  { "name": "Boucanos", "img": "Capitan_Botin.png" },
  { "name": "Garegamelle", "img": "Chef_Ricote.png" },
  { "name": "Sequestrella", "img": "Doncella_de_la_Ruina.png" },
  { "name": "Shamanaconda", "img": "Necrocobra.png" },
  { "name": "Don Dorleone", "img": "Don_Aureone.png" },
  { "name": "Mécagolem", "img": "Icarus.png" },
  { "name": "Ténorque", "img": "Ballenato.png" },
  { "name": "Morquis", "img": "Cachaslote.png" },
  { "name": "Hacharné", "img": "El_Carnicero.png" },
  { "name": "Hypertaupe", "img": "Topoderoso.png" },
  { "name": "Ultime Nyanmurai", "img": "El_Ultimisimo_Nyanmurai.png" },
]

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

// Mostrar la imagen de "¡Felicidades!" al finalizar el juego
function showCongratsImage() {
    const congratsImg = document.createElement("img");
    congratsImg.src = "congrats.png";
    congratsImg.id = "congrats-image";
    congratsImg.style.position = "fixed";
    congratsImg.style.bottom = "0";
    congratsImg.style.left = "50%";
    congratsImg.style.transform = "translateX(-50%)";
    congratsImg.style.width = "100vw";
    congratsImg.style.zIndex = "1000";
    congratsImg.style.cursor = "pointer";

    // Ocultar la imagen al hacer clic
    congratsImg.addEventListener("click", () => {
        congratsImg.remove();
    });

    document.body.appendChild(congratsImg);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); 
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "Tu est le vrai Yo-Quiz Master, non m'abandonne pas s'il tu plait.";
    }
});
