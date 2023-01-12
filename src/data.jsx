import React from "react";

const data = [
    {
        id: 1,
        image: "/topChart-cover-1.jpg",
        category: "Golden age of 80s",
        artist: "Sean Swadder",
        time: "2:34:45",
        path: "goldenAge"
    },
    {
        id: 2,
        image: "/topChart-cover-3.jpg",
        category: "Raggae 'n' blues",
        artist: "DJ YK mule",
        time: "1:02:42",
        path: "rnb"
    },
    {
        id: 3,
        image: "/topChart-cover-2.jpg",
        category: "Tommorow's tunes",
        artist: "Obi Datti",
        time: "2:01:25",
        path: "tomorrow"
    },
]

const newReleases = [
    {
        id: 1,
        image: "/img-1.jpg",
        title: "Life in a bubble",
        subtitle: "Devan",
        type: "Single",
        duration: "4:17",
        isFavorited: false
    },
    {
        id: 2,
        image: "/img-2.jpg",
        title: "Mountain",
        subtitle: "Kriks",
        type: "Freestyle",
        duration: "2:30",
        isFavorited: false
    },
    {
        id: 3,
        image: "/img-3.jpg",
        title: "Limits",
        subtitle: "John Dillion",
        type: "Single",
        duration: "2:02",
        isFavorited: false
    },
    {
        id: 4,
        image: "/img-4.jpg",
        title: "Black",
        subtitle: "Ameed",
        type: "Freestyle",
        duration: "3:23",
        isFavorited: false
    },
    {
        id: 5,
        image: "/img-5.jpg",
        title: "Cancelled",
        subtitle: "emeri",
        type: "Single",
        duration: "4:50",
        isFavorited: false

    },
    {
        id: 6,
        image: "/img-6.jpg",
        title: "Nomad",
        subtitle: "Macron eli",
        type: "EP",
        duration: "11:37",
        isFavorited: false
    },
    {
        id: 7,
        image: "/img-7.jpg",
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
        image: "/img-7.jpg",
        title: "Life in a bubble",
        subtitle: "Devan",
        type: "Single",
        duration: "4:17",
        isFavorited: false
    },
    {
        id: "2",
        image: "/img-6.jpg",
        title: "Mountain",
        subtitle: "Kriks",
        type: "Freestyle",
        duration: "2:30",
        isFavorited: false
    },
    {
        id: "3",
        image: "/img-5.jpg",
        title: "Limits",
        subtitle: "John Dillion",
        type: "Single",
        duration: "2:02",
        isFavorited: false
    },
    {
        id: "4",
        image: "/img-4.jpg",
        title: "Black",
        subtitle: "Ameed",
        type: "Freestyle",
        duration: "3:23",
        isFavorited: false
    },
    {
        id: "5",
        image: "/img-3.jpg",
        title: "Cancelled",
        subtitle: "emeri",
        type: "Single",
        duration: "4:50",
        isFavorited: false

    },
    {
        id: "6",
        image: "/img-2.jpg",
        title: "Nomad",
        subtitle: "Macron eli",
        type: "EP",
        duration: "11:37",
        isFavorited: false
    },
    {
        id: "7",
        image: "/img-1.jpg",
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
        icon: "/Home.svg",
        title: "Home",
        path: ""
    },
    {
        id: 2,
        icon: "/pl.svg",
        title: "My Collections",
        path: "playlist"
    },
    {
        id: 3,
        icon: "/radio.svg",
        title: "Radio",
        path: "radio"
    },
    {
        id: 4,
        icon: "/videos.svg",
        title: " Music Video",
        path: "videos"
    },
    {
        id: 5,
        icon: "/profile.svg" ,
        title: "Profile",
        path: "profile"
    },
    {
        id: 6,
        icon: "/Logout.svg",
        title: "Log Out",
        path: "logOut"
    },
]





export {data, newReleases, sb, popularTunes}