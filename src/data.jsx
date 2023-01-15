import React from "react";

const data = [
    {
        id: 1,
        image: "/topCharts/topChart-cover-1.jpg",
        category: "Golden age of 80s",
        artist: "Sean Swadder",
        time: "2:34:45",
        path: "goldenAge"
    },
    {
        id: 2,
        image: "/topCharts/topChart-cover-3.jpg",
        category: "Raggae 'n' blues",
        artist: "DJ YK mule",
        time: "1:02:42",
        path: "rnb"
    },
    {
        id: 3,
        image: "/topCharts/topChart-cover-2.jpg",
        category: "Tommorow's tunes",
        artist: "Obi Datti",
        time: "2:01:25",
        path: "tomorrow"
    },
]

const newReleases = [
    {
        id: 1,
        image: "/cards/img-1.jpg",
        title: "Life in a bubble",
        subtitle: "Devan",
        type: "Single",
        duration: "4:17",
        isFavorited: false
    },
    {
        id: 2,
        image: "/cards/img-2.jpg",
        title: "Mountain",
        subtitle: "Kriks",
        type: "Freestyle",
        duration: "2:30",
        isFavorited: false
    },
    {
        id: 3,
        image: "/cards/img-3.jpg",
        title: "Limits",
        subtitle: "John Dillion",
        type: "Single",
        duration: "2:02",
        isFavorited: false
    },
    {
        id: 4,
        image: "/cards/img-4.jpg",
        title: "Black",
        subtitle: "Ameed",
        type: "Freestyle",
        duration: "3:23",
        isFavorited: false
    },
    {
        id: 5,
        image: "/cards/img-5.jpg",
        title: "Cancelled",
        subtitle: "emeri",
        type: "Single",
        duration: "4:50",
        isFavorited: false

    },
    {
        id: 6,
        image: "/cards/img-6.jpg",
        title: "Nomad",
        subtitle: "Macron eli",
        type: "EP",
        duration: "11:37",
        isFavorited: false
    },
    {
        id: 7,
        image: "/cards/img-7.jpg",
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
        image: "/cards/img-7.jpg",
        title: "Life in a bubble",
        subtitle: "Devan",
        type: "Single",
        duration: "4:17",
        isFavorited: false
    },
    {
        id: "2",
        image: "/cards/img-6.jpg",
        title: "Mountain",
        subtitle: "Kriks",
        type: "Freestyle",
        duration: "2:30",
        isFavorited: false
    },
    {
        id: "3",
        image: "/cards/img-5.jpg",
        title: "Limits",
        subtitle: "John Dillion",
        type: "Single",
        duration: "2:02",
        isFavorited: false
    },
    {
        id: "4",
        image: "/cards/img-4.jpg",
        title: "Black",
        subtitle: "Ameed",
        type: "Freestyle",
        duration: "3:23",
        isFavorited: false
    },
    {
        id: "5",
        image: "/cards/img-3.jpg",
        title: "Cancelled",
        subtitle: "emeri",
        type: "Single",
        duration: "4:50",
        isFavorited: false

    },
    {
        id: "6",
        image: "/cards/img-2.jpg",
        title: "Nomad",
        subtitle: "Macron eli",
        type: "EP",
        duration: "11:37",
        isFavorited: false
    },
    {
        id: "7",
        image: "/cards/img-1.jpg",
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
        icon: "/icons/Home.svg",
        title: "Home",
        path: ""
    },
    {
        id: 2,
        icon: "/icons/pl.svg",
        title: "My Collections",
        path: "playlist"
    },
    {
        id: 3,
        icon: "/icons/radio.svg",
        title: "Radio",
        path: "radio"
    },
    {
        id: 4,
        icon: "/icons/videos.svg",
        title: " Music Video",
        path: "videos"
    },
    {
        id: 5,
        icon: "/icons/profile.svg" ,
        title: "Profile",
        path: "profile"
    },
    {
        id: 6,
        icon: "/icons/Logout.svg",
        title: "Log Out",
        path: "logOut"
    },
]


const radioStations = [
    {
        id: 0,
        name: "Brila FM",
        frequency: 88.9,
        image: "/radio-logos/brila.png"
    },
    {
        id: 1,
        name: "Eko FM",
        frequency: 89.7,
        image: "/radio-logos/eko.png"
    },
    {
        id: 2,
        name: "Lasgidi FM",
        frequency: 90.1,
        image: "/radio-logos/lasgidi.png"
    },
    {
        id: 3,
        name: "Lagos Talks",
        frequency: 91.3,
        image: "/radio-logos/lagostalks.png"
    },
    {
        id: 4,
        name: "Inspiration FM",
        frequency: 92.3,
        image: "/radio-logos/inspiration.png"
    },
    {
        id: 5,
        name: "Bond FM",
        frequency: 92.9,
        image: "/radio-logos/bond.jpg"
    },
    {
        id: 6,
        name: "Rhythm FM",
        frequency: 93.7,
        image: "/radio-logos/rhythm.png"
    },
    {
        id: 7,
        name: "Rainbow FM",
        frequency: 94.1,
        image: "/radio-logos/rainbow.png"
    },
    {
        id: 8,
        name: "Wazobia",
        frequency: 95.1,
        image: "/radio-logos/wazobia.png"
    },
    {
        id: 9,
        name: "Urban Radio",
        frequency: 96.5,
        image: "/radio-logos/Urbanlogo.png"
    },
    {
        id: 10,
        name: "Cool FM",
        frequency: 96.9,
        image: "/radio-logos/coolfm.png"
    },
    {
        id: 11,
        name: "Classic FM",
        frequency: 97.3,
        image: "/radio-logos/classic.png"
    },
    {
        id: 12,
        name: "SoundCity",
        frequency: 98.5,
        image: "/radio-logos/soundcity.png"
    },
    {
        id: 13,
        name: "Kiss FM",
        frequency: 98.9,
        image: "/radio-logos/kiss.png"
    },
    {
        id: 14,
        name: "Nigeria Info",
        frequency: 99.3,
        image: "/radio-logos/nigeriaInfo.png"
    },
    {
        id: 15,
        name: "Beat FM",
        frequency: 99.9,
        image: "/radio-logos/beat.png"
    },
    {
        id: 16,
        name: "Raypower",
        frequency: 100.5,
        image: "/radio-logos/raypower.png"
    },
    {
        id: 17,
        name: "Max FM",
        frequency: 102.3,
        image: "/radio-logos/max.png"
    },
    {
        id: 18,
        name: "Naija FM",
        frequency: 102.7,
        image: "/radio-logos/naija.png"
    },
    {
        id: 19,
        name: "Unilag FM",
        frequency: 103.1,
        image: "/radio-logos/unilag.png"
    },
    {
        id: 20,
        name: "City FM",
        frequency: 105.1,
        image: "/radio-logos/city.jpg"
    },
    {
        id: 21,
        name: "Radio Lagos",
        frequency: 107.5,
        image: "/radio-logos/radioLagos.png"
    },
]


export {data, newReleases, sb, popularTunes, radioStations}