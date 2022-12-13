import Image from 'next/image'
import { PageWrapper } from '../../components/PageWrapper'
import ProjectCardList from '../../components/ProjectCardList'
import { indexQuery } from '../../lib/queries';
import { getClient } from '../../lib/sanity-server';
import { Project } from '../../lib/types';

export default async function Page() {

async function getProjects() {
  const preview = false
  console.log("getStaticProps");
  const projects: Project[] = await getClient(preview).fetch(indexQuery);
  console.log(projects);
  return projects ;
}
  const projects: Project[] = await getProjects();
  return (
    <PageWrapper>
    <div className="hero-section wf-section blue-ece">
      <div className="container-1060 w-container">
        <div className="hero-block">
          <div className="w-layout-grid hero-grid">
            <img
              src="/images/awards.webp"
              width="540"
              height="450"
              id="w-node-_89b30bd8-a8db-67a3-614b-b071ede6a2cf-d135d194"
              alt="couple-working-on-laptop"
              className="image-5"
            />
            <div
              id="w-node-_138c1701-d088-8486-1d67-68f5d6bd7ca0-d135d194"
              className="hero-wrapper"
            >
              <h1 className="hero-title mb-2 hero-mobile">
                Proposez votre projet à nos étudiants
              </h1>
              <div className="hero-text text-base leading-4">
                Depuis 2012, le programme Valorisation des Projets Etudiants
                (VPE) de l’ECE permet aux élèves ingénieurs de collaborer et
                d&#x27;accompagner les entreprises, startup, laboratoires et
                associations sur des projets d’innovations numériques, dans une
                création de valeur industrielle et académique partagée
              </div>
              <a href="#" className="getstarted-bttn text-2xl leading-8 w-button"
                ><strong className="bold-text">Déposer un projet</strong></a
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
              <h2 className="wtc-heading mb-1-875">
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
                src="/images/orange_viva.webp"
                loading="lazy"
                height="507"
                width="442"
                
                alt=""
                className="wtc-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="wf-section whitebg">
      <div className="container-1160 w-container">
        <div className="wtsmaindiv mt-6-125">
          <div className="card-block-wrapper">
            <div className="card-content-block">
              <h2 className="wts-head">Les dates clés</h2>
              <div className="wts-text text-sm leading-5">
                Ne ratez rien de notre appel à projet en cours
              </div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638e00954f9b6de468f7cca1_man-fasted-for-work-deadline-6816721-5603795.webp"
              loading="lazy"
              width="305"
              alt=""
              className="message-icon-image"
            />
          </div>
          <div className="w-layout-grid review-grid">
            <div
              id="w-node-_2466505f-7d62-9efc-1ee1-9e80f249d40f-d135d194"
              className="wts-carddiv pt-1-5 pl-2 pr-1-5625"
            >
              <div className="reviewer-details">
                <div className="logo-wrapper date">
                  <div className="name-div ml-0-875">
                    <div
                      className="wts-imgname text-base leading-5 font-medium mt-0-125 white"
                    >
                      Avril
                    </div>
                  </div>
                  <div className="_2textblock">
                    <div
                      className="wts-imgname text-base leading-5 font-medium mt-0-125"
                    >
                      Ouverture de l&#x27;appel à projets
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-c8140bb6-9ec7-9fec-33f4-2edcc418b75c-d135d194"
              className="wts-carddiv pt-1-5 pl-2 pr-1-5625"
            >
              <div className="reviewer-details">
                <div className="logo-wrapper date">
                  <div className="name-div ml-0-875 black">
                    <div
                      className="wts-imgname text-base leading-5 font-medium mt-0-125 white"
                    >
                      Juin
                    </div>
                  </div>
                  <div className="_2textblock">
                    <div
                      className="wts-imgname text-base leading-5 font-medium mt-0-125"
                    >
                      Jury de sélection des projets
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-e92c4711-68a0-047f-e4f4-bde6a22fd02d-d135d194"
              className="wts-carddiv pt-1-5 pl-2 pr-1-5625"
            >
              <div className="reviewer-details">
                <div className="logo-wrapper date">
                  <div className="name-div ml-0-875">
                    <div
                      className="wts-imgname text-base leading-5 font-medium mt-0-125 white"
                    >
                      Septembre
                    </div>
                  </div>
                  <div className="_2textblock">
                    <div
                      className="wts-imgname text-base leading-5 font-medium mt-0-125"
                    >
                      Lancement des projets
                    </div>
                  </div>
                </div>
              </div>
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
              <h2 className="citation mb-1-875 mt-0-4375">
                &quot;Les jeunes ont le pouvoir de changer le monde grâce à
                l’ingénierie.<br />Les INNOV’AWARDS récompensent ceux qui ont le
                courage de persévérer dans le développement de leurs
                idées.&quot;
              </h2>
              <div className="wtc-text mb-1-875 text-lg leading-4">
                François Stefan<br />Directeur de L&#x27;ECE Paris.Lyon
              </div>
            </div>
            <div className="image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638e0f7ded2c6947f3969715_Francois-stephan2-1008x1024-removebg-preview%201.png"
                loading="lazy"
                height=""
                width="420"
                alt=""
                className="wtc-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="form-blog-sect wf-section whitebg">
      <div className="container-1060 w-container">
        <div className="formblog-div wtc-right-block">
          <h3 className="wts-head mb-1-875">Nos meilleurs projets</h3>
          <div className="w-layout-grid blog-brid">
            <ProjectCardList projects={projects}/>
          </div>
        </div>
      </div>
    </div>
    
    
    </PageWrapper>

  )
}
