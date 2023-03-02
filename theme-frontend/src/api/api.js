import apiFetch from '@wordpress/api-fetch';

export function getProjects(){

    //apiFetch( { path: "/wp/v2/projeto" } ).then( projeto => projeto.forEach( projeto => console.log(projeto.content.rendered)))
    
    return (        
            [
                { 
                    title: "Desnude", 
                    channel: "HBO+", 
                    type: "Série", 
                    image: "01.jpg",
                    link: "https://www.youtube.com/"
                },
                {
                    title: "Tapa na Cara",
                    channel: "Youtube",
                    type: "Webserie",
                    image: "02.png",
                    link: "https://www.youtube.com/"
                },
                {
                    title: "Um titulo longo",
                    channel: "GloboPlay",
                    type: "Mini-série",
                    image: "03.jpeg",
                    link: "https://www.youtube.com/"
                },
            
                {
                    title: "Um titulo longo",
                    channel: "GloboPlay",
                    type: "Mini-série",
                    image: "03.jpeg",
                    link: "https://www.youtube.com/"
                },
            
                {
                    title: "Um titulo longo",
                    channel: "GloboPlay",
                    type: "Mini-série",
                    image: "03.jpeg",
                    link: "https://www.youtube.com/"
                },
            
                {
                    title: "Um titulo longo",
                    channel: "GloboPlay",
                    type: "Mini-série",
                    image: "03.jpeg",
                    link: "https://www.youtube.com/"
                },
        ]
    )
}

export function getBrandLabContent(){
    return ( 
        [
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
            {
                title: "Listen to the Colors",
                subtitle: "A Movie to Understand Multisynestesic People",
                image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
            },
        ]
    )
}
export function getColabs(){
    return ( 
        [
            {
                name: "Amelia",
                lastName: "Barnes",
                email: "amelia@ameliabarnes.com",
                link: "https://ameliabarnes.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&14",
            },
            {
                name: "Sophia",
                lastName: "Garcia",
                email: "sophia@sophiagarcia.com",
                link: "https://sophiagarcia.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&27",
            },
            {
                name: "Aria",
                lastName: "Davis",
                email: "aria@ariadavis.com",
                link: "https://ariadavis.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&82",
            },
            {
                name: "Chloe",
                lastName: "Martinez",
                email: "chloe@chloemartinez.com",
                link: "https://chloemartinez.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&71",
            },
            {
                name: "Lila",
                lastName: "Johnson",
                email: "lila@lilajohnson.com",
                link: "https://lilajohnson.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&09",
            },
            {
                name: "Avery",
                lastName: "Gomez",
                email: "avery@averygomez.com",
                link: "https://averygomez.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&59",
            },
            {
                name: "Isabella",
                lastName: "Torres",
                email: "isabella@isabellatorres.com",
                link: "https://isabellatorres.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&45",
            },
            {
                name: "Aaliyah",
                lastName: "Sanchez",
                email: "aaliyah@aaliyahsanchez.com",
                link: "https://aaliyahsanchez.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&34",
            },
            {
                name: "Ella",
                lastName: "Ramirez",
                email: "ella@ellaramirez.com",
                link: "https://ellaramirez.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&53",
            },
            {
                name: "Luna",
                lastName: "Reyes",
                email: "luna@lunareyes.com",
                link: "https://lunareyes.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&66",
            },
            {
                name: "Sofia",
                lastName: "Santos",
                email: "sofia@sofiasantos.com",
                link: "https://sofiasantos.com",
                photo: "https://xsgames.co/randomusers/avatar.php?g=female&91",
            },
        ]
    )
}
export function getSocial(){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getMenu(){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getPageContent({ slug }){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getPartners(){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getTeam(){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getTerms(){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getPrivacy(){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getContacts(){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getFooter(){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getPicture({ id }){
    return ( 
        { 
            id: 0,

        }
    )
}
export function getVideo({ id }){
    return ( 
        { 
            id: 0,

        }
    )
}
