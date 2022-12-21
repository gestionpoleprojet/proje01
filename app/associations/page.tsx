import Image from 'next/image'
import { PageWrapper } from '../../components/PageWrapper'

export default function associations() {

  return (
    <PageWrapper>
    
    <div className="hero-section wf-section blue-ece">
      <div className="container-1060 w-container">
        <div className="hero-block">
          <div className="w-layout-grid hero-grid">
            <img
              src="/images/contact.webp"
              width="551"
              id="w-node-_89b30bd8-a8db-67a3-614b-b071ede6a2cf-d135d194"
              alt="couple-working-on-laptop"
              className="image-5"
            />
            <div
              id="w-node-_138c1701-d088-8486-1d67-68f5d6bd7ca0-d135d194"
              className="hero-wrapper"
            >
              <h1 className="hero-title mb-2 hero-mobile">
                Des questions ? Contactez-nous !
              </h1>
              <div className="hero-text text-base leading-4">
                Depuis 2012, le programme Valorisation des Projets Etudiants
                (VPE) de l’ECE permet aux élèves ingénieurs de collaborer et
                d&#x27;accompagner les entreprises, startup, laboratoires et
                associations sur des projets d’innovations numériques, dans une
                création de valeur industrielle et académique partagée
              </div>
              <a href="#" className="getstarted-bttn text-2xl leading-8 w-button"
                ><strong className="bold-text">contact@poleprojet.ece.fr</strong></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="wf-section whitebg">
      <div className="container-1060 w-container">
        <div className="wtc-maindiv">
          <div className="w-layout-grid wtc-grid">
            <div className="wtc-right-block">
              <h2 className="wtc-heading mb-1-875 mt-1-75">
                Pourquoi devenir partenaire ?
              </h2>
              <div className="wtc-text mb-1-875 text-lg leading-4">
                Un contact régulier et privilégié avec les éleves (volume 15h
                sur la durée du projet)
              </div>
              <div className="list-div mt-1-875">
                <div className="logo-wrapper mb-3-75">
                  <img
                    src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6054896ad728fb486b438db2_Group%2034.png"
                    loading="lazy"
                    alt=""
                    className="list-img mr-1-1875"
                  />
                  <div className="list-txt text-xl leading-6 font-medium mt-0-4375">
                    Bénéficier des connaissances, des compétences, de la
                    créativité des élèves.
                  </div>
                </div>
                <div className="logo-wrapper mb-3-75">
                  <img
                    src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6054970fb9925f3882de85b3_Group%2035.png"
                    loading="lazy"
                    alt=""
                    className="list-img2 mr-1-25"
                  />
                  <div
                    className="list-text2 text-xl leading-6 font-medium mt-0-4375"
                  >
                    Accroître la visibilité et la marque employeur de votre
                    structure auprès des élèves.
                  </div>
                </div>
                <div className="logo-wrapper">
                  <img
                    src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/605498d07bb714aa973bed59_Group%2010%20Copy%202.png"
                    loading="lazy"
                    alt=""
                    className="list-img mr-1-1875"
                  />
                  <div className="list-txt text-xl leading-6 font-medium mt-0-4375">
                    Explorer de nouvelles pistes scientifiques et techniques, de
                    nouvelles applications et usages.
                  </div>
                </div>
              </div>
            </div>
            <div className="image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d1e5d346ec7454c98b143_FVXtgR5WIAAMxhO.png"
                loading="lazy"
                height=""
                width="563"
                srcSet="
                  https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d1e5d346ec7454c98b143_FVXtgR5WIAAMxhO-p-500.png 500w,
                  https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d1e5d346ec7454c98b143_FVXtgR5WIAAMxhO-p-800.png 800w,
                  https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d1e5d346ec7454c98b143_FVXtgR5WIAAMxhO.png       884w
                "
                sizes="(max-width: 767px) 100vw, 563px"
                alt=""
                className="wtc-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </PageWrapper>

  )
}
