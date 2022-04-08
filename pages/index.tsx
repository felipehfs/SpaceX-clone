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


export const getServerSideProps: GetStaticProps = async (context) => {
  const response = await fetch("http://localhost:3000/api/heroes");
  const data = await response.json();

  return {
    props: {
      heroes: data,
    }
  }
}