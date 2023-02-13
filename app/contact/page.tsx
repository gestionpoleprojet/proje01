import Image from 'next/image'
import { PageWrapper } from '../../components/PageWrapper'

export default function Contact() {

  return (
    <PageWrapper>
    
    <div className="hero-section wf-section blue-ece">
      <div className="container-1060 w-container ">
        <div className="hero-block">
          <div className="w-layout-grid hero-grid grid-row-gap-1-5rem pt-2-9375">
            <img
              src="/images/Sextiusmichel.PNG"
              width="551"
              id="w-node-_89b30bd8-a8db-67a3-614b-b071ede6a2cf-d135d194"
              alt="couple-working-on-laptop"
              className="image-5 wtc-image "
            />
            <div
              id="w-node-_138c1701-d088-8486-1d67-68f5d6bd7ca0-d135d194 pt-2-9375"
              className="hero-wrapper"
            >
              <h1 className="hero-title mb-2 hero-mobile">
                Des questions ? Contactez-nous !
              </h1>
              <div className="hero-text text-base leading-4">
                Que vous soyez une entreprises, une startup, un laboratoire ou une
                association. Nous serons ravis de collaborer sur des projets d’innovations numériques.
              </div>
              <a href="mail:contact@poleprojets.ece.fr" className="getstarted-bttn text-2xl leading-8 w-button"
                ><strong className="bold-text">contact.poleprojets@ece.fr</strong></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </PageWrapper >

  )
}
