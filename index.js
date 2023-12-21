import express from 'express';
import data from './store';
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

//Recepti
// prikaz svih recepata
app.get('/recepti', (req, res) => {
    let recepti = data.Recepti.data;
    res.json(recepti);
});

// prikaz pojedinačnog recepta
app.get('/recepti/:Recepti_id', (req, res) => {
    const Recepti_id = req.params.Recepti_id; // Promijenjeno ime varijable da odgovara parametru u URL-u
    const recept = data.Recepti.data.find((r) => r.Recept_id === Recepti_id); // Ispravljena greška u pretraživanju

    if (recept) {
        res.json(recept);
    } else {
        res.status(404).json({ greška: 'Recept nije pronađen, pokušajte ponovno' });
    }
});

// prikaz ocjena pojedinacnog recepta
app.get('/recepti/:Recepti_id/ocjene', (req, res) => {
    const Recepti_id = req.params.Recepti_id;
    const recept = data.Recepti.data.find((r) => r.Recept_id === Recepti_id);

    if (recept) {
        const ocjene = recept.ocjene || [];
        res.json(ocjene);
    } else {
        res.status(404).json({ greška: 'Recept nije pronađen' });
    }
});

// prikaz id ocjene pojedinacnog recepta
app.get('/recepti/:Recepti_id/ocjene/:ocjena_id', (req, res) => {
    const Recepti_id = req.params.Recepti_id;
    const ocjena_id = req.params.ocjena_id;

    const recept = data.Recepti.data.find((r) => r.Recept_id === Recepti_id);

    if (recept) {
        const ocjene = recept.ocjene || [];

        const odabranaOcjena = ocjene.find((ocjena) => ocjena.ocjena_id === ocjena_id);

        if (odabranaOcjena) {
            res.json(odabranaOcjena);
        } else {
            res.status(404).json({ greška: 'Ocjena nije pronađena za taj recept' });
        }
    } else {
        res.status(404).json({ greška: 'Recept nije pronađen' });
    }
});

// dodavanje recepta
app.put('/recepti/dodajrecept', (req, res) => {
    const korisnik = data.Korisnici[0];

    const noviRecept = {
        naziv: naziv || '',
        Recepti_id: (data.Recepti.data.length + 1).toString(),
        vrsta_recepta: vrsta_recepta || '',
        vrsta_mesa: vrsta_mesa || '',
        korisnik: korisnik.email,
        recept_slika: Image,
        recept_opis: String || '',
        sponzor_namirnice: String || '',
        datum: Date,
        ocjene: [],
        komentar: [],
    };

    data.Recepti.push(noviRecept);
    data.Recepti.data.push(noviRecept);
});

// Dodavanje komentara na recept
app.post('/Recepti/:Recepti_id/dodajkomentar', (req, res) => {
    const { Recepti_id } = req.params;
    const noviKomentar = req.body;

    const recept = data.Recepti.data.find((r) => r.Recept_id === Recepti_id);

    if (!recept) {
        return res.status(404).json({ poruka: 'Recept nije pronađen.' });
    }

    recept.komentar.push({
        komentar_id: 'noviID',
        email: noviKomentar.email,
        komentar: noviKomentar.komentar,
        datum: noviKomentar.datum,
    });

    res.status(201).json({ poruka: 'Novi komentar dodan!' });
});


// Profil
//prikaz svih profila
app.get('/profili', (req, res) => {
    let profili = data.Profili.data;
    res.json(profili);
});

// prikaz profila za određenog korisnika preko id-a
app.get('/profili/:id_korisnik', (req, res) => {
    const id_korisnik = req.params.id_korisnik;
    const profil = data.Profili.data.find((p) => p.id_korisnik === id_korisnik);

    if (profil) {
        res.json(profil);
    } else {
        res.status(404).json({ greška: 'Profil nije pronađen' });
    }
});


// Omiljenirecept
//prikaz svih omiljenih recepata korisnika
app.get('/Omiljenirecepti', (req, res) => {
    let sviOmiljeniRecepti = [];

    // iteracija kroz sve ključeve
    for (const korisnikId in data.Omiljenirecepti.data) {
        const omiljeniReceptiKorisnika = data.Omiljenirecepti.data[korisnikId];
        // omiljeni recepati u ukupnu listu
        sviOmiljeniRecepti = sviOmiljeniRecepti.concat(omiljeniReceptiKorisnika);
    }

    res.json(sviOmiljeniRecepti);
});

// dodavanje recepta u omiljene
app.put('/recepti/:Recept_id/dodajrecept', (req, res) => {
    let data = req.body;

    if (!data.dodajrecept) {
        res.statusCode = 400;
        return res.json({
            error: 'There are parameters missing.',
        });
    }

    res.status(201).json({ poruka: 'Recept dodan u omiljene!' });
    res.send();
});


// Forumtema
//prikaz forumske teme, komentara i mogucnosti dodavanja teme i komentara
app.get('/Forumteme', (req, res) => {
    let forumTeme = data.Forumteme.data;
    res.json(forumTeme);
});


// dodavanje nove teme
app.post('/Forumteme/dodajtemu', (req, res) => {
    const korisnik = data.Korisnici[0];

    const novaTema = {
        forum_id: '1F + 1',
        korisnik: email,
        naslov: String,
        tekst: String,
        datum: Date,
    };

    data.Forumteme.data.push(novaTema);
    res.status(201).json({ poruka: 'Nova tema dodana!' });
});

// dodavanje komentara određenoj forum temi
app.get('/Forumteme/dodajkomentar/:forum_id', (req, res) => {
    const { forum_id } = req.params;
    const noviKomentar = req.body;

    console.log('Primljen POST zahtjev za dodavanje komentara na forumu s ID-om:', forum_id);
    const tema = data.Forumteme.data.find((t) => t.forum_id === forum_id);

    if (!tema) {
        console.log('Tema nije pronađena.');
        return res.status(404).json({ poruka: 'Tema nije pronađena.' });
    }

    tema.dodajkomentar.push({
        komentar_id: '1FK +1',
        email: noviKomentar.email,
        komentar: noviKomentar.komentar,
        datum: new Date(),
    });

    console.log('Novi komentar dodan!');
    res.status(200).json({ poruka: 'primjljen get zahtjev!' });
});


// Kalendar
//prikaz spremljenih recepta u kalendaru 
app.get('/kalendari', (req, res) => {
    let kalendar = data.Kalendari.data;
    res.json(kalendar);
});

// dodavanje recepta u kalendar
app.post('/Kalendari/dodajrecept/:Recept_id', (req, res) => {
    const { Recept_id } = req.params;
    const noviRecept = req.body;

    // pronalaženje dogadaja u kalendaru s odgovarajucim Recept_id
    const dogadjaj = data.Kalendari.data.find((event) => event.Recept_id === Recept_id);

    if (!dogadjaj) {
        return res.status(404).json({ poruka: 'Događaj nije pronađen.' });
    }

    dogadjaj.recept = noviRecept;

    res.status(201).json({ poruka: 'Recept dodan u kalendar!' });
});


// Infoupit
app.get('/info_upiti', (req, res) => {
    let infoUpiti = data.Infoupiti.data;
    res.json(infoUpiti);
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));