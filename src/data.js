import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Sábado à tarde",
            Lição: "Morte em um mundo de pecado",
            cover: "https://i.imgur.com/TtbeQwUh.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://ia801508.us.archive.org/16/items/l-02-1-sab-1/L02-1SAB%20%281%29.mp3",
            active: true,
        },
        {
            name:"Domingo, 02 de outubro",
            Lição: "Declarações sob tensão",
            cover: "https://i.imgur.com/TtbeQwUh.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://ia801508.us.archive.org/16/items/l-02-1-sab-1/L02-2DOM%20%281%29.mp3",
            active: false,
        },
        {
            name:"Segunda-feira, 03 de outubro",
            Lição: "Enganada pela serpente",
            cover: "https://i.imgur.com/TtbeQwUh.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"], 
            audio: "https://ia801508.us.archive.org/16/items/l-02-1-sab-1/L02-3SEG.mp3",
            active: false,
        },
        {
            name:"Terça-feira, 04 de outubro",
            Lição: "Vocês não morrerão",
            cover: "https://i.imgur.com/TtbeQwUh.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://ia801508.us.archive.org/16/items/l-02-1-sab-1/L02-3SEG.mp3",
            active: false,
        },
        {
            name:"Quarta-feira, 05 de outubro",
            Lição: "Consequências do pecado",
            cover: "https://i.imgur.com/TtbeQwUh.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://ia601508.us.archive.org/16/items/l-02-1-sab-1/L02-4TER.mp3",
            active: false,
        },
        {
            name:"Quinta-feira, 06 de outubro",
            Lição: "A primeira promessa do evangelho",
            cover: "https://i.imgur.com/TtbeQwUh.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://ia801508.us.archive.org/16/items/l-02-1-sab-1/L02-5QUA.mp3",
            active: false,
        },
        {
            name:"Sexta-feira, 07 de outubro",
            Lição: "Estudo adicional",
            cover: "https://i.imgur.com/TtbeQwUh.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://ia801508.us.archive.org/16/items/l-02-1-sab-1/L02-7SEX.mp3",
            active: false,
        
        },
    ];
}

export default chillHop;


