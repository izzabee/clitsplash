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
            ClitSplash is a female founded artistic collective that stands for liberation, equal representation and diverse perspectives on human sexuality. We focus on featuring artwork by women, queer, trans and other sex positive minorities. As we seek to curate quality digital art exhibitions and IRL encounters, we advocate their proliferation within the metaverse.
            </p>
          <p className={styles.body}>
            Clitsplash fosters an &apos;open metaverse&apos; by showcasing the value of human sexuality in digital culture and curating soundly researched and elaborated art exhibitions. A metaverse that is economically sustainable for artists, able to kindle all sorts of artwork, safe, fair, and inclusive is our mission.
            </p>
          <p className={styles.body}>
            ClitSplash was founded in March 2021 by the art historians and curators Luisa Ausenda and Gladys Garrote.
            </p>
          <p className={styles.body}>
            Later in 2021, Federica Pogliani joined the team thus adding her expertise in art criticism and Digital Strategy to it.
            </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.displayhead}>Team</h2>

        <div>
          <div className={`${styles.bio}`}>
            <figure>
              <Image
                alt="headshot of Gladys"
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
                alt="headshot of Luisa"
                src="/static/LuisaAusenda.jpg"
                width={2000}
                height={3000}
              />
            </figure>
            <h3 className={styles.displayhead}>
              <span>Luisa Ausenda</span>
            </h3>
          </div>
          <div className={styles.content}>
            <p className={styles.body}>
              Luisa Ausenda, founder of Studio Leggero, is a curator and a digital art specialist with over ten years of professional experience in the artworld and three years in Web3 technologies (particularly, the metaverse, NFTs and the blockchain). Recently, she curated Andrea Bonaceto’s solo show at MEET Digital Culture Center and wrote an essay for the book published by Cambridge Scholars ‘Global Arts Leadership in the Digital Age: Voices from the World’s Major Art Industries’. Formerly Head of Collector Relations at Aorist, where she led the art Sales, Advisory and Consultancy offices, she studied and worked in Milan, New York, Rafaela (Argentina), São Paulo, Florence, Istanbul, Havana and Dubai. In early 2020, she started collaborating as curator and consultant for NFT art collectors, platforms and artists, and co-founded the feminist NFT art curatorial collective ClitSplash. Since then, she has organized and spoke at conferences and panels around the world in institutions such as Milan Design Week (2021), the 59th Venice Biennale’s Uzbekistan Pavilion (2022), and Istanbul Contemporary art fair (2022). In 2015, she was appointed Acting Director at Galleria Continua Havana, a position she held for four years. With Galleria Continua, she coordinated the organization of solo and group shows and cultural events with local and international artists and served as saleswoman at art fairs around the globe.
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
                alt="headshot of Federica"
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

        <div>
          <div className={`${styles.bio}`}>
            <figure>
              <Image
                alt="headshot of Tam"
                src="/static/TamGryn2021.jpeg"
                width={2000}
                height={2996}
              />
            </figure>
            <h3 className={styles.displayhead}>
              <span>Tam Gryn</span>
            </h3>
          </div>
          <div className={styles.content}>
            <p className={styles.body}>
              Art Curator and Author of &quot;How to Create and Sell NFTs, A Guide For All Artists&quot;, Tam Gryn specializes in the intersection between art and other industries, new creative economies, crypto for creative communities and satisfying audiences’ desire for new and genuine art experiences through art.
              </p>
            <p className={styles.body}>
              Originally from Venezuela, she is a Guest Lecturer at Harvard Business School and New York Academy of the Arts. Tam currently contributes to Decentralized Arts by BanklessDAO and Women in Web3 Equity Miami. She is the former Head of the Curatorial Department of the Artist Pension Trust as well as Head Curator for RAW POP UP and Founder of Culturadora. Tam sits on the board of the Kulturespace Foundation in Berlin. Tam is the former Director of Fine Arts at Rally.io where she helped artists create their own autonomous crypto economies as well as Head Curator at SHOWFIELDS.
              </p>
            <p className={styles.body}>
              Clients and collaborators include The Brooklyn Museum, The Whitney Museum, La Biennale di Venezia, United Talent Agency (UTA), 2x4, McCann WorldGroup, Sothebys, The Brooks Museum, Mastercard, NFT.nyc, Polygon, Zsona Maco, Museo de Arte Contemporaneo de Puerto Rico, Swire Group, Surface Magazine, Locust Projects, Glossier, Heineken, Bombay Sapphire, The Glenlivet, Diptyque, Evian, SVA School of Visual Arts NYC, Neuehouse, Downtown Development Authority Miami, Miami Design District, Lincoln Rd, VICE, Paper Magazine, CNN, CULTURED Mag, The Bakehouse Art Complex, The LA Art Show, Untitled Miami, Inga Gallery, University of Miami, Brickell City Centre and many more.
              </p>
          </div>
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