import Home from "./Home.png";
import Catalog from "./Catalog.png";
import Portfolio from "./Portfolio.png";
import motoImg1 from "./motoImg1.jpg"
import motoImg2 from "./motoImg5.jpg"
import motoImg3 from "./motoImg7.jpg"

const ContentInfo = [
    {id:1,title:"My project",objectInfoArray:
        [
            { 
                description: 'I did this project at first in HTML and CSS, but then I started learning ReactJS. My first page is called "Home".On the picture you can see what it looks like.',
                picture:Home
            },
            {   
                description:'As you can see here I am talking about my plans for the future.The next page is titled "Catalog".',
                picture:Catalog
            },
            {
                description:'On this page I talk about my seasonal business. A slider with photos of my mopeds that I sold was added to this page.And the last page at the moment is "Portfolio".',
                picture:Portfolio
            }
        ]
    },
    {id:2,title:"My seasonal busines",objectInfoArray:
        [
            {
                picture:motoImg1
            },
            {
                description:"This summer I wanted to go about my business. And then the thought came into my head why don't I buy a scooter and orchestrate.",
                picture:motoImg2
            },
            {
                description:"I first bought a rosebone scooter and needed spare parts. Buying parts I saw another scooter Honda dio 34 and decided to buy it too. Then I bought paint to give the mopeds a look.It turned out well.",
                picture:motoImg3
            }
        ] 
    }
]


export default ContentInfo;