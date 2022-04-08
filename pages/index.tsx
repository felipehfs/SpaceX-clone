import Head from 'next/head'
import Footer from '../src/components/Footer/Footer'
import Hero from '../src/components/hero/Hero'
import Menu from '../src/components/Menu/Menu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Space X clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Menu />
       <Hero 
        actionLink="#"
        actionName="Learn more"
        title="AX-1 mission"
        subtitle="upcoming launch"
        alt="Spacex rocket" 
        imageUrl="/images/spacex-hero1.jpg"/>
       <Hero 
        actionLink="#"
        actionName="Learn more"
        title="AX-1 mission"
        subtitle="recent launch"
        alt="SpaceX rocket" 
        imageUrl="/images/spacex-hero2.jpg"/>
          <Hero 
        actionLink="#"
        actionName="Learn more"
        title="Starlink mission"
        subtitle="recent launch"
        alt="SpaceX starlink mission" 
        imageUrl="/images/spacex-hero3.jpg"/>
          <Hero 
        actionLink="#"
        actionName="Learn more"
        title="STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON"
        alt="SpaceX starlink mission" 
        imageUrl="/images/spacex-hero4.jpg"/>
        <Footer />
     </div>
  )
}
