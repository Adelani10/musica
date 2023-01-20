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
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-1_socoe4.jpg",
        title: "Life in a bubble",
        subtitle: "Devan",
        type: "Single",
        duration: "4:17",
        isFavorited: false
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-2_jt3cjj.jpg",
        title: "Mountain",
        subtitle: "Kriks",
        type: "Freestyle",
        duration: "2:30",
        isFavorited: false
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-3_nakkh3.jpg",
        title: "Limits",
        subtitle: "John Dillion",
        type: "Single",
        duration: "2:02",
        isFavorited: false
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-4_zkf2sa.jpg",
        title: "Black",
        subtitle: "Ameed",
        type: "Freestyle",
        duration: "3:23",
        isFavorited: false
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-5_djbqbu.jpg",
        title: "Cancelled",
        subtitle: "emeri",
        type: "Single",
        duration: "4:50",
        isFavorited: false

    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-6_jpz3sa.jpg",
        title: "Nomad",
        subtitle: "Macron eli",
        type: "EP",
        duration: "11:37",
        isFavorited: false
    },
    {
        id: 7,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-7_dc9fof.jpg",
        title: "Blind",
        subtitle: "Wiz zee",
        type: "Album",
        duration: "23:10",
        isFavorited: false
    },
]

const popularTunes = [
    {
        id: "1",
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-7_dc9fof.jpg",
        title: "Life in a bubble",
        subtitle: "Devan",
        type: "Single",
        duration: "4:17",
        isFavorited: false
    },
    {
        id: "2",
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-6_jpz3sa.jpg",
        title: "Mountain",
        subtitle: "Kriks",
        type: "Freestyle",
        duration: "2:30",
        isFavorited: false
    },
    {
        id: "3",
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-5_djbqbu.jpg",
        title: "Limits",
        subtitle: "John Dillion",
        type: "Single",
        duration: "2:02",
        isFavorited: false
    },
    {
        id: "4",
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-4_zkf2sa.jpg",
        title: "Black",
        subtitle: "Ameed",
        type: "Freestyle",
        duration: "3:23",
        isFavorited: false
    },
    {
        id: "5",
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-3_nakkh3.jpg",
        title: "Cancelled",
        subtitle: "emeri",
        type: "Single",
        duration: "4:50",
        isFavorited: false

    },
    {
        id: "6",
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959668/musica/cards/img-2_jt3cjj.jpg",
        title: "Nomad",
        subtitle: "Macron eli",
        type: "EP",
        duration: "11:37",
        isFavorited: false
    },
    {
        id: "7",
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959669/musica/cards/img-1_socoe4.jpg",
        title: "Blind",
        subtitle: "Wiz zee",
        type: "Album",
        duration: "23:10",
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
    },
    {
        id: 6,
        icon: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/Logout_gmwvkl.svg",
        title: "Log Out",
        path: "logOut"
    },
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