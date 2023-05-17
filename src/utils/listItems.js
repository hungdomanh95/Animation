import assets from '../assets';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
export const listItems = [
  {
    id: 1,
    nameProject: 'Animations Properties',
    icon: assets.iconRocket,
    navigation: 'AnimationsProperties',
  },
  {
    id:2,
    nameProject: 'Pokemon ',
    icon: assets.iconPokeBall,
    navigation: 'PokemonScreen',
  },
  {
    id: 3,
    nameProject: 'DayNight\nTransition',
    icon: assets.iconSun,
    navigation: 'DayNightTransition',
  },
  {
    id: 4,
    nameProject: 'PaperPlane',
    icon: assets.iconPlane,
    navigation: 'PaperPlane',
  },
  {
    id: 5,
    nameProject: 'Scale\nScrollList',
    icon: assets.iconScroll,
    navigation: 'ScaleScrollList',
  },
  {
    id: 6,
    nameProject: 'GalleryView',
    icon: assets.iconGallery,
    navigation: 'GalleryView',
  },
  {
    id: 7,
    nameProject: 'Gesture\nHandler',
    icon: assets.iconRocket,
    navigation: 'GestureHandler',
  },
  {
    id: 8,
    nameProject: 'Scroll\nChangeColor',
    icon: assets.iconRocket,
    navigation: 'ScrollChangeColor',
  },
  {
    id: 9,
    nameProject: 'ButtonScreen',
    icon: assets.iconPokeBall,
    navigation: 'ButtonScreen',
  },
  // {
  //   id: 10,
  //   nameProject: 'Toast',
  //   icon: assets.iconPokeBall,
  //   navigation: 'ToastScreen',
  // },
  {
    id: 11,
    nameProject: 'SvgScreen',
    icon: assets.iconPokeBall,
    navigation: 'SvgScreen',
  },
  {
    id: 12,
    nameProject: 'FlexCard',
    icon: assets.iconPokeBall,
    navigation: 'FlexCard',
  },
  {
    id: 13,
    nameProject: 'BottomTabs',
    icon: assets.iconPokeBall,
    navigation: 'BottomTabs',
  },
  {
    id: 14,
    nameProject: 'Emoji',
    icon: assets.iconPokeBall,
    navigation: 'Emoji',
  },
  {
    id: 15,
    nameProject: 'PokeGallery',
    icon: assets.iconPokeBall,
    navigation: 'PokeGallery',
  },
  {
    id: 16,
    nameProject: 'HeaderMomo',
    icon: assets.iconPokeBall,
    navigation: 'HeaderMomo',
  },
  {
    id: 17,
    nameProject: 'ListScroll',
    icon: assets.iconPokeBall,
    navigation: 'ListScroll',
  },
  {
    id: 18,
    nameProject: 'BottomSheetModal',
    icon: assets.iconPokeBall,
    navigation: 'BottomSheetModal',
  },
];
export let listAvatar = new Array(50).fill({
  name: 'Mr Hung',
  jobTitle: 'Mobile Developer',
  email: 'hungk.dev@gmail.com',
  avatar: require('../assets/flexCard/1.jpeg'),
});
export const listMenu = [
  {
    id:1,
    name:"Journal",
    icon:<Icon name="book-medical" size={24} color="#CDCCCE" />
  },
  {
    id:2,
    name:"Measures",
    icon:<Icon name="heartbeat" size={24} color="#CDCCCE" />
  },
  {
    id:3,
    name:"Add",
    icon:null
  },
  {
    id:4,
    name:"Treatment",
    icon:<Icon name="band-aid" size={24} color="#CDCCCE" />
  },
  {
    id:5,
    name:"Profile",
    icon:<Icon name="user" size={24} color="#CDCCCE" />
  },
]
export const pokemon_data = [
  {
    id: 1,
    name: "Bulbasaur",
    pic: require("../assets/pokemon/bulbasaur.png"),
    full_pic: require("../assets/pokemon/bulbasaur.jpg")
  },
  {
    id: 2,
    name: "Weepinbell",
    pic: require("../assets/pokemon/weepinbell.png"),
    full_pic: require("../assets/pokemon/weepinbell.jpg")
  },
  {
    id: 3,
    name: "Pikachu",
    pic: require("../assets/pokemon/pikachu.png"),
    full_pic: require("../assets/pokemon/pikachu.jpg")
  },
  {
    id: 4,
    name: "Charmander",
    pic: require("../assets/pokemon/charmander.png"),
    full_pic: require("../assets/pokemon/charmander.jpg")
  },
  {
    id: 5,
    name: "Squirtle",
    pic: require("../assets/pokemon/squirtle.png"),
    full_pic: require("../assets/pokemon/squirtle.jpg")
  },
  {
    id: 6,
    name: "Meowth",
    pic: require("../assets/pokemon/meowth.png"),
    full_pic: require("../assets/pokemon/meowth.jpg")
  },
  {
    id: 7,
    name: "Absol",
    pic: require("../assets/pokemon/absol.png"),
    full_pic: require("../assets/pokemon/absol.jpg")
  },
  {
    id: 8,
    name: "Arcanine",
    pic: require("../assets/pokemon/arcanine.png"),
    full_pic: require("../assets/pokemon/arcanine.jpg")
  },
  {
    id: 9,
    name: "Blaziken",
    pic: require("../assets/pokemon/blaziken.png"),
    full_pic: require("../assets/pokemon/blaziken.jpg")
  },
  {
    id: 10,
    name: "Darkrai",
    pic: require("../assets/pokemon/darkrai.png"),
    full_pic: require("../assets/pokemon/darkrai.jpg")
  },
  {
    id: 11,
    name: "Deoxys",
    pic: require("../assets/pokemon/deoxys.png"),
    full_pic: require("../assets/pokemon/deoxys.jpg")
  },
  {
    id: 12,
    name: "Dialga",
    pic: require("../assets/pokemon/dialga.png"),
    full_pic: require("../assets/pokemon/dialga.jpg")
  },
  {
    id: 13,
    name: "Empoleon",
    pic: require("../assets/pokemon/empoleon.png"),
    full_pic: require("../assets/pokemon/empoleon.jpg")
  },
  {
    id: 14,
    name: "Entei",
    pic: require("../assets/pokemon/entei.png"),
    full_pic: require("../assets/pokemon/entei.jpg")
  },
  {
    id: 15,
    name: "Groudon",
    pic: require("../assets/pokemon/groudon.png"),
    full_pic: require("../assets/pokemon/groudon.jpg")
  },
  {
    id: 16,
    name: "Gyarados",
    pic: require("../assets/pokemon/gyarados.png"),
    full_pic: require("../assets/pokemon/gyarados.jpg")
  },
  {
    id: 17,
    name: "Ho-oh",
    pic: require("../assets/pokemon/ho-oh.png"),
    full_pic: require("../assets/pokemon/ho-oh.jpg")
  },
  {
    id: 18,
    name: "Kyurem",
    pic: require("../assets/pokemon/kyurem.png"),
    full_pic: require("../assets/pokemon/kyurem.jpg")
  },
  {
    id: 19,
    name: "Leafeon",
    pic: require("../assets/pokemon/leafeon.png"),
    full_pic: require("../assets/pokemon/leafeon.jpg")
  },
  {
    id: 20,
    name: "Lugia",
    pic: require("../assets/pokemon/lugia.png"),
    full_pic: require("../assets/pokemon/lugia.jpg")
  },
  {
    id: 21,
    name: "Magmortar",
    pic: require("../assets/pokemon/magmortar.png"),
    full_pic: require("../assets/pokemon/magmortar.jpg")
  },
  {
    id: 22,
    name: "Manectric",
    pic: require("../assets/pokemon/manectric.png"),
    full_pic: require("../assets/pokemon/manectric.jpg")
  },
  {
    id: 23,
    name: "Metagross",
    pic: require("../assets/pokemon/metagross.png"),
    full_pic: require("../assets/pokemon/metagross.jpg")
  },
  {
    id: 24,
    name: "Salamence",
    pic: require("../assets/pokemon/salamence.png"),
    full_pic: require("../assets/pokemon/salamence.jpg")
  },
  {
    id: 25,
    name: "Samurott",
    pic: require("../assets/pokemon/samurott.png"),
    full_pic: require("../assets/pokemon/samurott.jpg")
  },
  {
    id: 26,
    name: "Scyther",
    pic: require("../assets/pokemon/scyther.png"),
    full_pic: require("../assets/pokemon/scyther.jpg")
  },
  {
    id: 27,
    name: "Skarmory",
    pic: require("../assets/pokemon/skarmory.png"),
    full_pic: require("../assets/pokemon/skarmory.jpg")
  },
  {
    id: 28,
    name: "Talonflame",
    pic: require("../assets/pokemon/talonflame.png"),
    full_pic: require("../assets/pokemon/talonflame.jpg")
  }
];
export const pokemon_stats = ["HP", "Attack", "Defense", "Sp.Atk", "Sp.Def", "Speed"];
export const list_social = [
  {
    name:"Discord",
    icon:require("../assets/icon_social/Discord.png")
  },
  {
    name:"Dribbble",
    icon:require("../assets/icon_social/Dribbble.png")
  },
  {
    name:"Facebook",
    icon:require("../assets/icon_social/Facebook.png")
  },
  {
    name:"Figma",
    icon:require("../assets/icon_social/Figma.png")
  },
  {
    name:"GitHub",
    icon:require("../assets/icon_social/GitHub.png")
  },
  {
    name:"Instagram",
    icon:require("../assets/icon_social/Instagram.png")
  },
  {
    name:"LINE",
    icon:require("../assets/icon_social/LINE.png")
  },
  {
    name:"LinkedIn",
    icon:require("../assets/icon_social/LinkedIn.png")
  },
  {
    name:"Note",
    icon:require("../assets/icon_social/Note.png")
  },
  {
    name:"Notion",
    icon:require("../assets/icon_social/Notion.png")
  },
  {
    name:"Periscope",
    icon:require("../assets/icon_social/Periscope.png")
  },
  {
    name:"Pinterest",
    icon:require("../assets/icon_social/Pinterest.png")
  },
  {
    name:"Reddit",
    icon:require("../assets/icon_social/Reddit.png")
  },
  {
    name:"Skype",
    icon:require("../assets/icon_social/Skype.png")
  },
  {
    name:"Snapchat",
    icon:require("../assets/icon_social/Snapchat.png")
  },
  {
    name:"Spotify",
    icon:require("../assets/icon_social/Spotify.png")
  },
  {
    name:"Steam",
    icon:require("../assets/icon_social/Steam.png")
  },
  {
    name:"Telegram",
    icon:require("../assets/icon_social/Telegram.png")
  },
  {
    name:"Tencent",
    icon:require("../assets/icon_social/Tencent.png")
  },
  {
    name:"TikTok",
    icon:require("../assets/icon_social/TikTok.png")
  },
  {
    name:"Tinder",
    icon:require("../assets/icon_social/Tinder.png")
  },
  {
    name:"Trello",
    icon:require("../assets/icon_social/Trello.png")
  },
  {
    name:"Tumblr",
    icon:require("../assets/icon_social/Tumblr.png")
  },
  {
    name:"Twiiter",
    icon:require("../assets/icon_social/Twiiter.png")
  },
  {
    name:"YouTube",
    icon:require("../assets/icon_social/YouTube.png")
  },
]
