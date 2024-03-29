import React from 'react'
/*
    id of BOLLYWOOD movie is -> <MOVIE_NAME> + <BOLLY> + <YEAR_OF_RELEASE> (movienamebolly2022)
    id of INTERNATIONAL movie is -> <MOVIE_NAME> + <YEAR_OF_RELEASE>(moviename2022)
    genere - > [Video Type, industry,language, genere , Year]
*/

const movies = [

    {
        id: "catbolly2022",
        link: "https://drive.google.com/file/d/1m6INit_ziLdZLa52P3trrr9fxMxwihzy/view?usp=share_link",
        name: "CAT",
        part: "(season 1)",
        image: "https://images2.imgbox.com/40/0a/dy4HaBc7_o.png",
        industry: "bollywood",
        quality: "1080p",
        year: "2022",
        uploadedYear: "2022",
        lang: ["Hindi"],
        type: "WebSeries",
        genere: ["WebSeries", "bollywood", "Hindi", "Crime", "Thriller", "2022"],
        size: "10.18 gb",
        director: ["Balwinder Singh Janjua", "Rupinder Chahal", "Jimmy Singh"],
        actors: [
           
        ],
        discription: "",
    },
    {
        id: "cabinetofcuriosities2022",
        link: "https://drive.google.com/file/d/1uubfYk4gLw6fdJggFEUMoVwCNGHpWBx5/view?usp=share_link",
        name: "cabinet of curiosities",
        part: "(season 1)",
        image: "https://images2.imgbox.com/f9/8b/ZMErHQaq_o.jpg",
        industry: "Hollywood",
        quality: "1080p",
        year: "2022",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["WebSeries", "hollywood", "Hindi-Eng", "Crime", "Thriller", "mistery", "Horror", "2022"],
        size: "7.31 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "18992022",
        link: "https://drive.google.com/file/d/1__38_hI3JjfANy3mArjajSsava0QI5Eq/view?usp=share_link",
        name: "1899 ",
        part: "(season 1)",
        image: "https://images2.imgbox.com/82/b1/s7W9UTLu_o.jpg",
        industry: "Hollywood",
        quality: "4k",
        year: "2022",
        uploadedYear: "2022",
        lang: ["Hindi"],
        type: "WebSeries",
        genere: ["WebSeries", "hollywood", "Hindi-Eng", "sciFi", "Crime", "Thriller", "mistery", "2022"],
        size: "11.34 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "aliceinborderland2020",
        link: "https://drive.google.com/file/d/1ASBxsyP1KbKKtkylXb3J3kFikRbMlzN5/view?usp=share_link",
        name: "Alice in borderland ",
        part: "(season 1)",
        image: "https://images2.imgbox.com/f8/a2/K4qG5oKw_o.jpg",
        industry: "japanese",
        quality: "1080p",
        year: "2020",
        uploadedYear: "2022",
        lang: ["Hindi"],
        type: "WebSeries",
        genere: ["WebSeries", "japanese", "Hindi", "sciFi", "Action", "Crime", "Thriller", "mistery", "2020"],
        size: "6.25 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "fauda2015",
        link: "https://drive.google.com/file/d/1y3I8d9VOyVwzVrg4tVJ9YuXVNd05wmfE/view?usp=share_link",
        name: "fauda ",
        part: "(season 1)",
        image: "https://images2.imgbox.com/91/f3/Nom2b4Tb_o.jpeg",
        industry: "israeli",
        quality: "1080p",
        year: "2015",
        uploadedYear: "2022",
        lang: ["Hindi", "Israeli"],
        type: "WebSeries",
        genere: ["WebSeries", "Israeli", "Hindi-Israeli", "Crime", "Thriller", "2015"],
        size: "12.62 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "fauda2017",
        link: "https://drive.google.com/file/d/1hxye5SPnaaK2tAoc3VL_9MXJ0rZfwH_K/view?usp=share_link",
        name: "fauda",
        part: "(season 2)",
        image: "https://images2.imgbox.com/a7/6b/viz1zsJy_o.jpg",
        industry: "israeli",
        quality: "1080p",
        year: "2017",
        uploadedYear: "2022",
        lang: ["Hindi", "Israeli"],
        type: "WebSeries",
        genere: ["WebSeries", "Israeli", "Hindi-Israeli", "Crime", "Thriller", "2017"],
        size: "16.65 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "fauda2019",
        link: "https://drive.google.com/file/d/1ldvYx6yz_FIzdON8-T7LxRa1nhW-rcbd/view?usp=share_link",
        name: "fauda",
        part: "(season 3)",
        image: "https://images2.imgbox.com/21/9f/KoJ8lnpi_o.png",
        industry: "israeli",
        quality: "1080p",
        year: "2019",
        uploadedYear: "2022",
        lang: ["Hindi", "Israeli"],
        type: "WebSeries",
        genere: ["WebSeries", "Israeli", "Hindi-Israeli", "Crime", "Thriller", "2019"],
        size: "9.21 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "doctorgbolly2022",
        link: "https://drive.google.com/file/d/1PKJEwuP5AVNCNa3PAxvePlVe60DWP7WL/view?usp=share_link",
        name: "Doctor G",
        image: "https://images2.imgbox.com/74/40/qd4108fT_o.png",
        industry: "bollywood",
        quality: "1080p",
        year: "2022",
        uploadedYear: "2022",
        lang: ["Hindi"],
        type: "WebSeries",
        genere: ["movie", "bollywood", "Hindi", "drama", "Comedy", "2022"],
        size: "3.18 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "kantarabolly2022",
        link: "https://drive.google.com/file/d/1FtjkFX5Il6vv1gpMmlSQbozLpHhrrJ3R/view?usp=share_link",
        name: "kantara",
        image: "https://images2.imgbox.com/50/ae/BRyCOH0f_o.jpg",
        industry: "bollywood",
        quality: "4k",
        year: "2022",
        uploadedYear: "2022",
        lang: ["Hindi", "kannada"],
        type: "WebSeries",
        genere: ["movie", "Karnataka", "Hindi-kanaada", "drama", "Action", "adventure", "thriller", "2022"],
        size: "8.15 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "thankgodbolly2022",
        link: "https://drive.google.com/file/d/18_E3j59HBhUZcF4st-N1QEqkiNdjTm6E/view?usp=share_link",
        name: "thank god",
        image: "https://images2.imgbox.com/ae/13/CJoj5lbL_o.jpg",
        industry: "bollywood",
        quality: "4k",
        year: "2022",
        uploadedYear: "2022",
        lang: ["Hindi"],
        type: "WebSeries",
        genere: ["movie", "bollywood", "Hindi", "Fantasy", "Comedy", "2022"],
        size: "6.22 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "peripheral2022",
        link: "https://drive.google.com/file/d/1_cAkDhBdB3QRkW7ZqKQeanFK3uy9pk0W/view?usp=share_link",
        name: "the peripheral",
        part: "(season 1)",
        image: "https://images2.imgbox.com/cf/a0/7hP54tOX_o.jpg",
        industry: "hollywood",
        quality: "4k",
        year: "2022",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["WebSeries", "hollywood", "Hindi-Eng", "sciFi", "action", "2022"],
        size: "16.45 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "watcher2022",
        id: "9",
        link: "https://drive.google.com/file/d/1RtH9PjElsLewPCeJgMmhKiJcIhr9Nh8I/view?usp=share_link",
        name: "the watcher",
        image: "https://images2.imgbox.com/54/a7/Svc8NPzC_o.jpg",
        industry: "hollywood",
        quality: "1080p",
        year: "2022",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "horror", "mistery", "drama", "2022"],
        size: "6.76 gb",
        discription: "A married couple moving into their dream home are threatened by terrifying letters from a stalker, signed - The Watcher.",
    },
    {
        id: "warofworld2019",
        link: "https://drive.google.com/file/d/18NqxfY03MCtxmpWLXSkBo8GgUEtBE9SN/view?usp=share_link",
        name: "war of world ",
        part: "(season 1)",
        image: "https://images2.imgbox.com/06/d3/Dp4avgk2_o.jpg",
        industry: "hollywood",
        quality: "1080p",
        year: "2019",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "sciFi", "action", "drama", "2019"],
        size: "5.05 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "warofworld2021",
        link: "https://drive.google.com/file/d/1FVHGt5s3xK4nJeO0KgOzvXt3smb8_gJN/view?usp=share_link",
        name: "war of world",
        part: "(season 2)",
        image: "https://images2.imgbox.com/79/1e/HsBIxlKv_o.jpg",
        industry: "hollywood",
        quality: "1080p",
        year: "2021",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "sciFi", "action", "drama", "2021"],
        size: "5.62 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "warofworld2022",
        link: "https://drive.google.com/file/d/1FVHGt5s3xK4nJeO0KgOzvXt3smb8_gJN/view?usp=share_link",
        name: "war of world",
        part: "(season 3)",
        image: "https://images2.imgbox.com/61/96/NmoGVDBy_o.jpg",
        industry: "hollywood",
        quality: "1080p",
        year: "2022",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "sciFi", "action", "drama", "2022"],
        size: "5.17 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "transformer2007",
        link: "https://drive.google.com/file/d/1AALrVC7rZNgvKtvfpEN2ruK53qvonadC/view?usp=share_link",
        name: "Transformers",
        image: "https://images2.imgbox.com/a5/3c/Cr9lgxgj_o.jpg",
        industry: "hollywood",
        year: "2007",
        quality: "4k",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "sciFi", "action", "crime", "2007"],
        size: "17.07 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "transformer2009",
        link: "https://drive.google.com/file/d/1G_2hZHFG0cRgL4uCeSxfVe5f15az1zi1/view?usp=share_link",
        name: "Transformers Revenge of the Fallen",
        image: "https://images2.imgbox.com/d7/c2/PW53U4om_o.jpg",
        industry: "hollywood",
        year: "2009",
        quality: "4k",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "sciFi", "action", "crime", "2009"],
        size: "19.89 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "transformer2011",
        link: "https://drive.google.com/file/d/1DTVu4Fl4ftZ8b10A3KYSNpvmne_8mhdG/view?usp=share_link",
        name: "Transformers Dark of the Moon",
        image: "https://images2.imgbox.com/44/7e/oYqKT015_o.jpg",
        industry: "hollywood",
        year: "2011",
        quality: "4k",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "sciFi", "action", "crime", "2011"],
        size: "16.71 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "transformer2014",
        link: "https://drive.google.com/file/d/1vGmh17XxB_TxTbpTxz-D7cxUPTl0lALi/view?usp=share_link",
        name: "Transformers Age of Extinction",
        image: "https://images2.imgbox.com/b2/27/yKilBxIH_o.jpg",
        industry: "hollywood",
        year: "2014",
        quality: "4k",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "sciFi", "action", "crime", "2014"],
        size: "20.81 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "transformer2017",
        link: "https://drive.google.com/file/d/1SjADufpVB8I3PmgA8Y1AvKD_hIGdjomY/view?usp=share_link",
        name: "Transformers The Last Knight",
        image: "https://images2.imgbox.com/88/0f/fEYyyKAN_o.jpg",
        industry: "hollywood",
        year: "2017",
        quality: "1080p",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "sciFi", "action", "crime", "2017"],
        size: "6.78 gb",
        director: "",
        actors: [],
        discription: "",
    },
    {
        id: "bumblebee2019",
        link: "https://drive.google.com/file/d/1p8ZjP9j1eBXalgowhe3tX2apDNphNjU0/view?usp=share_link",
        name: "Bumblebee",
        image: "https://images2.imgbox.com/0d/d1/BzoXN0lw_o.png",
        industry: "bollywood",
        year: "2019",
        quality: "4k",
        uploadedYear: "2022",
        lang: ["Hindi", "english"],
        type: "WebSeries",
        genere: ["movie", "Hollywood", "hindi-eng", "sciFi", "action", "crime", "2019"],
        size: "5.71 gb",
        director: "",
        actors: [],
        discription: "",
    },
]

export default movies
