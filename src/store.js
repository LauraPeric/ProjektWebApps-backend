let data = {
    Korisnici: {
        data: [
            {
                id_korisnik: '1',
                ime_i_prezime: 'Laura Perić',
                email: 'lauraperic123@gmail.com',
                lozinka: 'lp12499',
            },
        ],
    },
    Profili: {
        data: [
            {
                id_korisnik: '1',
                ime_i_prezime_korisnik: 'Laura Perić',
                profilna_fotografija: 'img',
                opis_profila: 'Za sebe smatram da sam strastvena kuharica koja obožava istraživati svijet okusa i mirisa. Volim otkrivati nove recepte, dijelim svoje kulinarske eksperimente i uživam u interakciji s drugim ljubiteljima kuhanja. Volim provoditi slobodno vrijeme kušajući nove okuse, istražujući različite kuhinje i stvarajući jela koja griju srce. ',
                kalendar: 'prikaz kalendara',
                omiljenirecept: 'prikaz omiljenih recepata',
            },
        ],

    },
    Recepti: {
        data: [
            {
                naziv: 'Piletina u umaku od sira',
                Recept_id: '456',
                vrsta_recepta: 'jela sa mesom',
                vrsta_mesa: 'jela sa piletinom',
                korisnik: 'lauraperic123@gmail.com',
                recept_slika: 'img',
                recept_opis: 'Piletina u umaku od sira koja kombinira nježnost piletine s bogatim i kremastim umakom od sira. Jelo pripremiti pečenjem komada piletine na laganoj vatri te prelivanjem umaka od sira,  uz dodatak začina i aromatičnih sastojaka čime dobivamo privlačnu kombinaciju okusa i teksture.',
                preuzmi: 'download pdf',
                sponzor_namirnice: 'Vindija',
                datum: '01-05-2022',
                ocjene: [
                    {
                        korisnik: {
                            ocjena_id: '1O',
                            ime_i_prezime: 'Laura Perić',
                            email: 'lauraperic123@gmail.com',
                            ocjena: 5,
                        },
                    },
                    {
                        korisnik: {
                            ocjena_id: '2O',
                            ime_i_prezime: 'Ivan Horvat',
                            email: 'ivanhorvat456@gmail.com',
                            ocjena: 3,
                        },
                    },
                ],
                komentar: [
                    {
                        korisnik: {
                            komentar_id: '1RK',
                            email: 'lauraperic123@gmail.com',
                            komentar: 'Najbolji recept za piletinu ikad!',
                            datum: '01-08-2023',
                        },
                    },
                ],
                dodajkomentar: [
                    {
                        komentar_id: '2RK',
                        email: 'email',
                        komentar: String,
                        datum: Date,
                    }
                ],
                dodajrecept: [
                    {
                        naziv: "Novi recept",
                        Recept_id: "789",
                        vrsta_receptt: "Nešto novo",
                        vrsta_mesa: "Svježe meso",
                        korisnik: "lauraperic123@gmail.com",
                        recept_slika: "img",
                        recept_opis: "Opis novog recepta...",
                        sponzor_namirnice: "Novi sponzor",
                        datum: "01-01-2023",
                        ocjene: [],
                        komentar: [],
                    },
                ]
            },
        ],
    },
    Omiljenirecepti: {
        data: {
            '1': [
                {
                    Recept_id: '456',
                },
            ],
            '2': [
                {
                    Recept_id: '153',
                },
            ],
            '3': [
                {
                    Recept_id: '123',
                },
            ],
        },
    },
    Forumteme: {
        data: [
            {
                forum_id: '1F',
                korisnik: 'antonelamed123@gmail.com',
                naslov: 'Vindija meso - vrlo loše',
                tekst: 'Da... vrlo bitna informacija jest to da meso iz vindije u zadnje vrijeme nema baš dobar okus...',
                datum: '13-08-2023',
                komentar: [
                    {
                        korisnik: {
                            komentar_id: '1FK',
                            email: 'lauraperic123@gmail.com',
                            komentar: 'u potpunosti se ne slažem, bolje meso prodaju sada nego prije!',
                            datum: '25-09-2023',
                        },
                    },
                ],
                dodajtemu: [
                    {
                        dodajtemu: {
                            forum_id: '1F + 1',
                            korisnik: '...@gmail.com',
                            naslov: '',
                            tekst: '',
                            datum: ''
                        }
                    }
                ],
                dodajkomentar: [{
                    komentar_id: '1FK +1',
                    email: 'email',
                    komentar: String,
                    datum: Date,
                }],
            },
        ],
    },

    Kalendari: {
        data: [
            {
                Recept_id: '456',
                datum: '12-01-2023',
                sati: '18:45',
            },
        ],
    },
    Infoupiti: {
        data: [
            {
                ime_i_prezime_korisnik: 'Laura Perić',
                email: 'lauraperic123@gmail.com',
                upit: 'Poštovani, pišem vam jer imam pitanje vezano za prijavljivanje na profil, naime...',
            },
        ],
    },
};

export default data;