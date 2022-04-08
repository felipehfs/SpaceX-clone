import { GetStaticProps } from 'next'
import Head from 'next/head'
import Footer from '../src/components/Footer/Footer'
import Hero from '../src/components/hero/Hero'
import Menu from '../src/components/Menu/Menu'

type Hero = {
  id: number;
  actionLink: string;
  actionName: string;
  subtitle?: string;
  title: string;
  alt: string;
  imageUrl: string;
}

type HomeProps = {
  heroes: Hero[]
}

export default function Home({ heroes = []}: HomeProps) {
  return (
    <div>
      <Head>
        <title>Space X clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Menu />
       {
         heroes.map(hero => (
          <Hero 
            key={hero.id}
            actionLink={hero.actionLink}
            actionName={hero.actionName}
            title={hero.title}
            subtitle={hero.subtitle}
            alt={hero.alt}
            imageUrl={hero.imageUrl} />
         ))
       }
        <Footer />
     </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
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


  return {
    props: {
      heroes,
    },
  }
}