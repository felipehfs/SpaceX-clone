import type { NextApiRequest, NextApiResponse } from "next";

const heroes = [
    {
        id: 1,
        actionName: "Learn more",
        actionLink: "#",
        title: "AX-1 mission",
        alt: "Spacex rocket", 
        subtitle:"upcoming launch",
        imageUrl: "/images/spacex-hero1.jpg"
    },
    {
        id: 2,
        actionLink: "#",
        actionName: "Learn more",
        title: "AX-1 mission",
        subtitle: "recent launch",
        alt: "SpaceX rocket" ,
        imageUrl: "/images/spacex-hero2.jpg",
    },
    {
        id: 3,
        actionLink:"#",
        actionName:"Learn more",
        title: "Starlink mission",
        subtitle: "recent launch",
        alt: "SpaceX starlink mission", 
        imageUrl: "/images/spacex-hero3.jpg",
    },
    {
      id: 4,
      actionLink: "#",
      actionName: "Learn more",
      title: "STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON",
      alt: "SpaceX starlink mission", 
      imageUrl: "/images/spacex-hero4.jpg"
    }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(300).json(heroes);
}