import React from "react";

const data = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959914/musica/topCharts/topChart-cover-1_pvpkds.jpg",
        category: "Golden age of 80s",
        artist: "Sean Swadder",
        time: "2:34:45",
        path: "goldenAge"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959914/musica/topCharts/topChart-cover-3_jsmksd.jpg",
        category: "Raggae 'n' blues",
        artist: "DJ YK mule",
        time: "1:02:42",
        path: "rnb"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959914/musica/topCharts/topChart-cover-2_yi59pw.jpg",
        category: "Tommorow's tunes",
        artist: "Obi Datti",
        time: "2:01:25",
        path: "tomorrow"
    },
]

const newReleases = [
    {
        id: 1,
        artist: "davido",
        duration: "4:17",
        title: "Life in a bubble",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-1_socoe4.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: 2,
        artist: "don jazzy",
        duration: "2:30",
        title: "Mountain",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-2_jt3cjj.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: 3,
        artist: "wizkid",
        duration: "2:02",
        title: "Limits",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-3_nakkh3.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: 4,
        artist: "omah lay",
        duration: "3:23",
        title: "Black",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-4_zkf2sa.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: 5,
        artist: "rema",
        duration: "4:50",
        title: "Cancelled",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-5_djbqbu.jpg",
        audio: "",
        isFavorited: false

    },
    {
        id: 6,
        artist: "lil kesh",
        duration: "11:37",
        title: "Nomad",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-6_jpz3sa.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: 7,
        artist: "patoranking",
        duration: "23:10",
        title: "Blind",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-7_dc9fof.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: 8,
        artist: "ruger",
        duration: "3:60",
        title: "Completed",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-5_djbqbu.jpg",
        audio: "",
        isFavorited: false

    },
    {
        id: 9,
        artist: "lil frosh",
        duration: "11:37",
        title: "None of you",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-6_jpz3sa.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: 10,
        artist: "odumo",
        duration: "2:10",
        title: "Blinded",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-7_dc9fof.jpg",
        audio: "",
        isFavorited: false
    },
]

const popularTunes = [
    {
        id: "1",
        artist: "fire boy",
        duration: "4:17",
        title: "Life in a bubble",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-7_dc9fof.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: "2",
        artist: "zinoleeski",
        duration: "2:30",
        title: "Mountain",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-6_jpz3sa.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: "3",
        duration: "2:02",
        artist: "tems",
        title: "Limits",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-5_djbqbu.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: "4",
        artist: "ayra starr",
        duration: "3:23",
        title: "Black",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-4_zkf2sa.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: "5",
        artist: "2 Baba",
        duration: "4:50",
        title: "Cancelled",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-3_nakkh3.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: "6",
        artist: "dbanj",
        duration: "11:37",
        title: "Nomad",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-2_jt3cjj.jpg",
        audio: "EP",
        isFavorited: false
    },
    {
        id: "7",
        artist: "tiwa",
        duration: "23:10",
        title: "Blind",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-1_socoe4.jpg",
        audio: "Album",
        isFavorited: false
    },
    {
        id: "8",
        artist: "kiss",
        duration: "2:17",
        title: "Outcast",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-7_dc9fof.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: "9",
        artist: "buju",
        duration: "2:30",
        title: "Movement",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-6_jpz3sa.jpg",
        audio: "",
        isFavorited: false
    },
    {
        id: "3",
        artist: "zoro",
        duration: "2:02",
        title: "Limitsless",
        cover: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-5_djbqbu.jpg",
        audio: "",
        isFavorited: false
    },
]

const sb = [
    {
        id: 1,
        icon: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961486/musica/icons/Home_tr5nqr.svg",
        title: "Home",
        path: ""
    },
    {
        id: 2,
        icon: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/pl_tdbtfe.svg",
        title: "My Collections",
        path: "playlist"
    },
    {
        id: 3,
        icon: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/radio_qvzwqh.svg",
        title: "Radio",
        path: "radio"
    },
    {
        id: 4,
        icon: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/videos_i0uilz.svg",
        title: " Music Video",
        path: "videos"
    },
    {
        id: 5,
        icon: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/profile_x8mxsb.svg" ,
        title: "Profile",
        path: "profile"
    }
]


const radioStations = [
    {
        id: 0,
        name: "Brila FM",
        frequency: 88.9,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961310/musica/radio-logos/brila_ks9l3i.png"
    },
    {
        id: 1,
        name: "Eko FM",
        frequency: 89.7,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961296/musica/radio-logos/eko_tykrcj.png"
    },
    {
        id: 2,
        name: "Lasgidi FM",
        frequency: 90.1,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961298/musica/radio-logos/lasgidi_njyms9.png"
    },
    {
        id: 3,
        name: "Lagos Talks",
        frequency: 91.3,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961299/musica/radio-logos/lagostalks_lozqmw.png"
    },
    {
        id: 4,
        name: "Inspiration FM",
        frequency: 92.3,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961300/musica/radio-logos/inspiration_jhmrdj.jpg"
    },
    {
        id: 5,
        name: "Bond FM",
        frequency: 92.9,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961310/musica/radio-logos/bond_spjee7.jpg"
    },
    {
        id: 6,
        name: "Rhythm FM",
        frequency: 93.7,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961310/musica/radio-logos/rhythm_zfpdpa.png"
    },
    {
        id: 7,
        name: "Rainbow FM",
        frequency: 94.1,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961302/musica/radio-logos/rainbow_ojzwmz.png"
    },
    {
        id: 8,
        name: "Wazobia",
        frequency: 95.1,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961306/musica/radio-logos/wazobia_q0dqug.png"
    },
    {
        id: 9,
        name: "Urban Radio",
        frequency: 96.5,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961305/musica/radio-logos/Urbanlogo_aykg80.png"
    },
    {
        id: 10,
        name: "Cool FM",
        frequency: 96.9,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961297/musica/radio-logos/coolfm_fmbyo2.png"
    },
    {
        id: 11,
        name: "Classic FM",
        frequency: 97.3,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961297/musica/radio-logos/classic_cqiacx.png"
    },
    {
        id: 12,
        name: "SoundCity",
        frequency: 98.5,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961306/musica/radio-logos/soundcity_sbvvap.png"
    },
    {
        id: 13,
        name: "Kiss FM",
        frequency: 98.9,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961311/musica/radio-logos/kiss_pst4ok.png"
    },
    {
        id: 14,
        name: "Nigeria Info",
        frequency: 99.3,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961302/musica/radio-logos/nigeriaInfo_vhjnvr.png"
    },
    {
        id: 15,
        name: "Beat FM",
        frequency: 99.9,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961311/musica/radio-logos/beat_ll0suc.png"
    },
    {
        id: 16,
        name: "Raypower",
        frequency: 100.5,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961303/musica/radio-logos/raypower_qzf7oc.png"
    },
    {
        id: 17,
        name: "Max FM",
        frequency: 102.3,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961302/musica/radio-logos/max_xa5nlw.png"
    },
    {
        id: 18,
        name: "Naija FM",
        frequency: 102.7,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961302/musica/radio-logos/naija_qaw2el.png"
    },
    {
        id: 19,
        name: "Unilag FM",
        frequency: 103.1,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961310/musica/radio-logos/unilag_fhzkir.png"
    },
    {
        id: 20,
        name: "City FM",
        frequency: 105.1,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961297/musica/radio-logos/city_ymhtde.jpg"
    },
    {
        id: 21,
        name: "Radio Lagos",
        frequency: 107.5,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961301/musica/radio-logos/radioLagos_njfrmp.png"
    },
]


export {data, newReleases, sb, popularTunes, radioStations}