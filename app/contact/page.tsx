import Image from 'next/image'
import { PageWrapper } from '../../components/PageWrapper'

export default function Contact() {

  return (
    <PageWrapper>
    
    <div className="hero-section wf-section blue-ece">
      <div className="container-1060 w-container ">
        <div className="hero-block">
          <div className="w-layout-grid hero-grid grid-row-gap-1-5rem pt-2-9375">
            
           <div className="carte">
          <img
              src="/images/Sextiusmichel.PNG"
              width="551"
              id="w-node-_89b30bd8-a8db-67a3-614b-b071ede6a2cf-d135d194"
              alt="couple-working-on-laptop"
              className= ""
              style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0px', left: '0px', opacity: '1', transition: 'opacity 500ms ease 0s', willChange: 'opacity'}}
            />
          <div className="demo-link-wrapper">
            <a
              className="demo-link"
              href="https://www.google.com/maps/place/ECE/@48.8511696,2.2884819,20.73z/data=!4m15!1m8!3m7!1s0x47e67151e3c16d05:0x1e3446766ada1337!2s10+Rue+Sextius+Michel,+75015+Paris!3b1!8m2!3d48.8511378!4d2.2885917!16s%2Fg%2F11jy_4vh_c!3m5!1s0x47e67192813cdbc3:0xfab7b14ec2fc62b4!8m2!3d48.851156!4d2.2885888!16s%2Fg%2F11tdb4jg8t"
              rel="noopener"
              target="_blank"
            >
              <svg
                data-testid="geist-icon"
                fill="none"
                height="20"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="20"
                className="fill-white"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
              <p className="demo-link-words ml-2 font-medium text-sm my-0">Ouvrir dans Maps</p>
            </a>
          </div>
          </div>
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
              <a href="mailto:contact@poleprojets.ece.fr" className="getstarted-bttn text-2xl leading-8 w-button"
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
