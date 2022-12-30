import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '../../components/PageWrapper'


export default function Pedagogie() {

  return (
    <PageWrapper>
    
    <div className="hero-section wf-section blue-ece">
      <div className="container-1060 w-container">
        <div className="hero-block">
          <div className="w-layout-grid hero-grid">
            <img
              src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638dfe4215391821e55d21c8_business-couple-working-for-income-growth-6870815-5634392.webp"
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
                Un accompagnement de nos étudiants sur 5 ans
              </h1>
              <div className="hero-text text-base leading-4">
                Depuis 2012, le programme Valorisation des Projets Etudiants
                (VPE) de l’ECE permet aux élèves ingénieurs de collaborer et
                d&#x27;accompagner les entreprises, startup, laboratoires et
                associations sur des projets d’innovations numériques, dans une
                création de valeur industrielle et académique partagée
              </div>
              <Link href="/depot_projet" className="getstarted-bttn text-2xl leading-8 w-button"
                ><strong className="bold-text">Déposer un projet</strong></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </PageWrapper>

  )
}
