import React from 'react'



const movies = [
    {
        id: "1",
        link: "https://drive.google.com/file/d/1ASBxsyP1KbKKtkylXb3J3kFikRbMlzN5/view?usp=share_link",
        name: "Alice in borderland (S1)",
        image: "https://images2.imgbox.com/f8/a2/K4qG5oKw_o.jpg",
        industry:"japanese",
        quality:"1080p",
        year:"2020"
    },
    {
        id: "2",
        link: "https://drive.google.com/file/d/1y3I8d9VOyVwzVrg4tVJ9YuXVNd05wmfE/view?usp=share_link",
        name: "fauda (S1)",
        image: "https://images2.imgbox.com/91/f3/Nom2b4Tb_o.jpeg",
        industry:"israeli",
        quality:"1080p",
        year:"2015"
    },
    {
        id: "3",
        link: "https://drive.google.com/file/d/1hxye5SPnaaK2tAoc3VL_9MXJ0rZfwH_K/view?usp=share_link",
        name: "fauda (S2)",
        image: "https://images2.imgbox.com/a7/6b/viz1zsJy_o.jpg",
        industry:"israeli",
        quality:"1080p",
        year:"2017"
    },
    {
        id: "4",
        link: "https://drive.google.com/file/d/1ldvYx6yz_FIzdON8-T7LxRa1nhW-rcbd/view?usp=share_link",
        name: "fauda (S3)",
        image: "https://images2.imgbox.com/21/9f/KoJ8lnpi_o.png",
        industry:"israeli",
        quality:"1080p",
        year:"2019"
    },
    {
        id: "5",
        link: "https://drive.google.com/file/d/1PKJEwuP5AVNCNa3PAxvePlVe60DWP7WL/view?usp=share_link",
        name: "Doctor G",
        image: "https://images2.imgbox.com/74/40/qd4108fT_o.png",
        industry:"bollywood",
        quality:"1080p",
        year:"2022"
    },
    {
        id: "6",

        link: "https://drive.google.com/file/d/1FtjkFX5Il6vv1gpMmlSQbozLpHhrrJ3R/view?usp=share_link",
        name: "kantara",
        image: "https://images2.imgbox.com/50/ae/BRyCOH0f_o.jpg",
        industry:"bollywood",
        quality:"4k",
        year:"2022"
    },
    {
        id: "7",
        link: "https://drive.google.com/file/d/18_E3j59HBhUZcF4st-N1QEqkiNdjTm6E/view?usp=share_link",
        name: "thank god",
        image: "https://images2.imgbox.com/ae/13/CJoj5lbL_o.jpg",
        industry:"bollywood",
        quality:"4k",
        year:"2022"
    },
    {
        id: "8",
        link: "https://drive.google.com/file/d/1_cAkDhBdB3QRkW7ZqKQeanFK3uy9pk0W/view?usp=share_link",
        name: "the peripheral",
        image: "https://images2.imgbox.com/cf/a0/7hP54tOX_o.jpg",
        industry:"hollywood",
        quality:"4k",
        year:"2022"
    },
    {
        id: "9",
        link: "https://drive.google.com/file/d/1RtH9PjElsLewPCeJgMmhKiJcIhr9Nh8I/view?usp=share_link",
        name: "the watcher",
        image: "https://images2.imgbox.com/54/a7/Svc8NPzC_o.jpg",
        industry:"hollywood",
        quality:"1080p",
        year:"2022"
    },
    {
        id: "10",
        link: "https://drive.google.com/file/d/18NqxfY03MCtxmpWLXSkBo8GgUEtBE9SN/view?usp=share_link",
        name: "war of world (S1)",
        image: "https://images2.imgbox.com/06/d3/Dp4avgk2_o.jpg",
        industry:"hollywood",
        quality:"1080p",
        year:"2019"
    },
    {
        id: "11",
        link: "https://drive.google.com/file/d/1FVHGt5s3xK4nJeO0KgOzvXt3smb8_gJN/view?usp=share_link",
        name: "war of world (S2)",
        image: "https://images2.imgbox.com/79/1e/HsBIxlKv_o.jpg",
        industry:"hollywood",
        quality:"1080p",
        year:"2021"
    },
    {
        id: "12",
        link: "https://drive.google.com/file/d/1FVHGt5s3xK4nJeO0KgOzvXt3smb8_gJN/view?usp=share_link",
        name: "war of world (S3)",
        image: "https://images2.imgbox.com/61/96/NmoGVDBy_o.jpg",
        industry:"hollywood",
        quality:"1080p",
        year:"2022"
    },
    {
        id: "13",
        link: "https://drive.google.com/file/d/1AALrVC7rZNgvKtvfpEN2ruK53qvonadC/view?usp=share_link",
        name: "Transformers",
        image: "https://images2.imgbox.com/a5/3c/Cr9lgxgj_o.jpg",
        industry:"hollywood",
        year:"2007",
        quality:"4k",
    },
    {
        id: "14",
        link: "https://drive.google.com/file/d/1G_2hZHFG0cRgL4uCeSxfVe5f15az1zi1/view?usp=share_link",
        name: "Transformers: Revenge of the Fallen",
        image: "https://images2.imgbox.com/d7/c2/PW53U4om_o.jpg",
        industry:"hollywood",
        year:"2009",
        quality:"4k",
    },
    {
        id: "15",
        link: "https://drive.google.com/file/d/1DTVu4Fl4ftZ8b10A3KYSNpvmne_8mhdG/view?usp=share_link",
        name: "Transformers: Dark of the Moon",
        image: "https://images2.imgbox.com/44/7e/oYqKT015_o.jpg",
        industry:"hollywood",
        year:"2011",
        quality:"4k",
    },
    {
        id: "16",
        link: "https://drive.google.com/file/d/1vGmh17XxB_TxTbpTxz-D7cxUPTl0lALi/view?usp=share_link",
        name: "Transformers: Age of Extinction",
        image: "https://images2.imgbox.com/b2/27/yKilBxIH_o.jpg",
        industry:"hollywood",
        year:"2014",
        quality:"4k",
    },
    {
        id: "17",
        link: "https://drive.google.com/file/d/1SjADufpVB8I3PmgA8Y1AvKD_hIGdjomY/view?usp=share_link",
        name: "Transformers: The Last Knight",
        image: "https://images2.imgbox.com/88/0f/fEYyyKAN_o.jpg",
        industry:"hollywood",
        year:"2017",
        quality:"1080p",
    },
    {
        id: "18",
        link: "https://drive.google.com/file/d/1p8ZjP9j1eBXalgowhe3tX2apDNphNjU0/view?usp=share_link",
        name: "Bumblebee",
        image: "https://images2.imgbox.com/0d/d1/BzoXN0lw_o.png",
        industry:"bollywood",
        year:"2019",
        quality:"4k",
    },
]

export default movies
