import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Social from "components/social"

export default function About() {
  return (
    <>
      <header className={styles.logohead}>
        <h1 className={styles.logo}>
          About
          </h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.displayhead}>Our Story</h2>
        <div className={styles.content}>
          <p className={styles.body}>
            ClitSplash is an all female collective born in Cuba that sources and curates crypto art & culture. We believe in equal opportunities and representation for all genders, and therefore we focus on featuring women artists, trans artists and artists from other minorities. As we seek to curate quality art NFTs exhibitions, we advocate their proliferation within the metaverse. To bring forward a project with certain values and curate exhibitions in the metaverse is to curate the metaverse: our future.
            </p>
          <p className={styles.body}>
            ClitSplash stemmed from the intention to balance out genders&apos; representation in the crypto realm and from the urgency to bring to it sound curatorship and intellectual thinking.
            </p>
          <p className={styles.body}>
            ClitSplash was founded in March 2021 by the art historians and curators Luisa Ausenda (Italian-American, based between Miami, Havana and Milan) and Gladys Garrote (Cuban, based in Havana). Both had been working for over a year as curators for the art NFTs platform Snark.art and as advisors to other platforms, collectors and artists.
            </p>
          <p className={styles.body}>
            Both are considered to be two of the initiators of the crypto art movement in Cuba, where internet access is still scarce, and so is access to crypto currencies and platforms. Not only did they discover a way to navigate the system albeit being in Cuba, but they also spread the word and supported numerous artists in approaching the ecosystem, thus yielding a true Digital Revolution.
            </p>
          <p className={styles.body}>
            Later in 2021, Federica Pogliani joined the team thus adding her expertise and art critic in Digital Strategy to it.
            </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.displayhead}>Staff</h2>

        <div>
          <div className={`${styles.bio}`}>
            <figure>
              <Image
                src="/static/GladysGarrote.jpg"
                width={1365}
                height={2003}
              />
            </figure>
            <h3 className={styles.displayhead}>
              <span>Gladys Garrote </span>
            </h3>
          </div>

          <div className={styles.content}>
            <p className={styles.body}>Co-founder of ClitSplash, Gladys Garrote (Havana, Cuba) is a curator, art writer and art historian working with NFTs and the metaverse. Since 2014, she is Professor at Havana University, where she teaches Art Appreciation, Contemporary Art Market and Art History courses. She holds a Master degree in Art History with a focus on the Contemporary art&apos;s market. Garrote collaborated in the organization of numerous Cuban and international artists&apos; exhibitions, both curating and promoting, and managing them. Topics such as feminism, cultural memory, the rewriting of history, collective identities and self-reflection are often tackled by Garrote in her essays and critical texts. Among her main achievements within the NFTs space, we may mention her contribution to ‘The Infinite Machine Movie&apos; collection. In this project, Garrote coordinated 36 international artists in charge of creating the artworks for the collection that will be implemented to finance the first feature film about the founding of Ethereum Blockchain. In 2021, she was selected as one of the curators of the major ‘NFT Liverpool&apos; event alongside noticeably influential figures within the NFTs space. Recently, she was nominated as one of 22 women in NFTs to watch in 2022 by Redlion news, an e-magazine specializing in crypto art.</p>
          </div>
        </div>

        <div>
          <div className={`${styles.bio}`}>

            <figure>
              <Image
                src="/static/LuisaAusenda.jpg"
                width={3768}
                height={5652}
              />
            </figure>
            <h3 className={styles.displayhead}>
              <span>Luisa Ausenda</span>
            </h3>
          </div>
          <div className={styles.content}>
            <p className={styles.body}>
              Mrs Ausenda is not working at ClitSplash anymore and now serves as Head of Collectors Relations and Institutional Partnerships at Aorist (<a href="https://aorist.art/">https://aorist.art</a>).
              </p>
            <p className={styles.body}>
              Co-founder of ClitSplash, Luisa Ausenda (Milan, Italy) studied and worked in Milan, New York, Argentina, São Paulo, Florence, Istanbul, Havana and Dubai. In 2014, she attained with honors a Bachelor&apos;s Degree at Bocconi University (Milan). In 2015, she was appointed Acting Director of Galleria Continua La Habana (Cuba). She coordinated the organization of solo and group shows and events with local and international artists such as Anish Kapoor, Michelangelo Pistoletto and JR. In March 2020, the NFTs&apos; platform Snark.art employed her as guest curator. She was invited speaker at the panel ‘Collecting vs Trading in Digital Art&apos; with John Crain (CEO at SuperRare), Alexander Salnikov (co-founder and CPO at Rarible) and Matt Hall (Partner and Creative Technologist at Larva Labs/Cryptopunks). In 2021, she curated and co-hosted with Milano5Vie Milan Design Week&apos;s event ‘Beyond the Digital Renaissance&apos;. In this panel, she moderated 14 guests including crypto art&apos;s top collector Pablo Rodríguez-Fraile, crypto artists Andrea Bonaceto and Skygolpe, and personalities such as Erminia Sciacchitano, who organized the G20 in 2021. Recently, she attained a Master&apos;s Degree in Modern and Contemporary Art History at Havana University (Cuba). In 2022, she is to publish an essay, ‘Curating and Managing Crypto Artworks&apos;, which will be part of the book by Cambridge Scholars Publishing, ‘Managing Arts and Culture in the Digital Era&apos;, along with texts by Dirk Boll (President at Christie&apos;s Europe, Middle East, Russia and India), Paolo Giulierini (Director at Naples&apos; Archeological Museum) and the crypto artists duo Hackatao.
              </p>
          </div>
        </div>
        <div>
          <div className={`${styles.bio}`}>
            <figure>
              <Image
                src="/static/FedericaPogliani.jpg"
                width={1244}
                height={1659}
              />
            </figure>
            <h3 className={styles.displayhead}>
              <span>Federica Pogliani</span>
            </h3>
          </div>
          <div className={styles.content}>
            <p className={styles.body}>
              Federica Pogliani (Forlì, Italy) is an art historian and digital strategist. Her academic career revolved mostly around Bologna University (Italy). First, in Ravenna, she graduated in Cultural Heritage with a thesis in ‘Methodology of the Contemporary Art History&apos;, researching Carlo Ludovico Ragghianti&apos;s work on the unauthorized public. Then in Bologna, she completed a Master&apos;s in Visual Arts with an Art History thesis on the ‘Museological history of the Van Abbemuseum in Eindhoven&apos;. She then achieved an executive MBA in Marketing and Digital Innovation for Arts and Culture at Milan&apos;s 24ORE Business School. Between 2017 and 2020, she served as Gallery Assistant in Galleria Marcolini (Forlì). Since 2020, she works as Digital & Communication strategist, Content creator and Web manager at the Epoxytecnica S.R.L. (Faenza).
              </p>
            <p className={styles.body}>
              Since the beginning of 2021, she writes - mainly about crypto art - for the art magazine Exibart.
              </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bgPurple}`}>
        <h2 className={styles.displayhead}>Get in Touch</h2>
        <div className={styles.content}>
          <p className={styles.body}>
            For any inquiry regarding crypto art consultancy or advising for collectors, platforms, institutions, galleries and artists:
              &nbsp;  <a href="mailto:info@clitsplash.com" title="email info@clitsplash.com" target="_blank" rel="noopener noreferrer" className={styles.link}>info@clitsplash.com</a>.
            </p>
        </div>
      </section>


      <section style={{ paddingTop: 50 }}>
        <div className={""}>
          <Social styles={styles} />
        </div>
      </section>
    </>
  )
}