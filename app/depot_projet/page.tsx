import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '../../components/PageWrapper'

export default function Depot_Projet() {

  return (
    <PageWrapper>
    
    <div className="hero-section wf-section blue-ece">
      <div className="container-1060 w-container">
        <div className="hero-block">
          <div className="w-layout-grid hero-grid">
          <img
                src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638ddcff65555a1f871ea10d_young-businessman-pointing-to-the-side-with-both-fingers-4997923-4165653.webp"
              width="540"
              id="w-node-_89b30bd8-a8db-67a3-614b-b071ede6a2cf-d135d194"
              alt="couple-working-on-laptop"
              className="image-5"
            />
            <div
              id="w-node-_138c1701-d088-8486-1d67-68f5d6bd7ca0-d135d194"
              className="hero-wrapper"
            >
              <h1 className="hero-title mb-2 hero-mobile">
                Je suis une entreprise
              </h1>
              <div className="hero-text text-base leading-4">
                Depuis 2012, le programme Valorisation des Projets Etudiants
                (VPE) de l’ECE permet aux élèves ingénieurs de collaborer et
                d&#x27;accompagner.
              </div>
              <a href="https://vpe-ece.com" className="getstarted-bttn text-2xl leading-8 w-button" style={{margin: "auto"}}
                ><strong className="bold-text">Proposer un projet</strong></a>
                <Link href="https://vpe-ece.com" className="text-2xl leading-8" style={{margin: "auto", color: "white", padding:" 14px 18px", borderRadius: "20px"}}
                ><strong className="bold-text">Découvrir les associations</strong></Link>
            </div>

            <img
                src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638de150c024ae45feef3adb_man-chilling-at-work-place-6816720-5603794.png"
                width="540"
              id="w-node-_89b30bd8-a8db-67a3-614b-b071ede6a2cf-d135d194"
              alt="couple-working-on-laptop"
              className="image-7"
              
            />
            <div
              id="w-node-_138c1701-d088-8486-1d67-68f5d6bd7ca0-d135d194"
              className="hero-wrapper"
            >
              <h1 className="hero-title mb-2 hero-mobile">
                Je suis un étudiant
              </h1>
              <div className="hero-text text-base leading-4">
                Depuis 2012, le programme Valorisation des Projets Etudiants
                (VPE) de l’ECE permet aux élèves ingénieurs de collaborer et
                d&#x27;accompagner.
              </div>
              <a href="https://vpe-ece.com" className="getstarted-bttn text-2xl leading-8 w-button" style={{margin: "auto"}}
                ><strong className="bold-text">Déposer mon projet</strong></a>
            </div>
            
          </div>

        </div>
      </div>
    </div>
   
          
          
            
          
      
    
    </PageWrapper>

  )
}
