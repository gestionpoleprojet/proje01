import Image from 'next/image'
import Actu from '../components/actu'
import { PageWrapper } from '../components/PageWrapper'

export default function Home() {

  return (
    <PageWrapper>
    <div className="hero-section wf-section blue-ece">
      <div className="container-1060 w-container">
        <div className="hero-block">
          <div className="w-layout-grid hero-grid">
            <div className="card-image-block">
              <img
                src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638df88f2b3c8ebe90e1a475_couple-grow-up-pump-idea-6870707-5634388.webp"
                
                width="480"
                alt=""
                className="hero_image"
              />
            </div>
            <div
              id="w-node-c2326c45-130c-31dc-a559-bdbd2d6eb97b-33ac0d3b"
              className="hero-wrapper"
            >
              <h1 className="hero-title mb-2 hero-mobile">
                Developons l&#x27;excellence de la pedagogie transversale par
                projets
              </h1>
              <div className="hero-text text-base leading-4">
                Permettre aux élèves-ingénieurs de collaborer sur des projets
                d’innovations numériques et d&#x27;accompagner entreprises,
                start-up, laboratoires et associations, dans une création de
                valeur industrielle et académique.
              </div>
              <a href="#" className="getstarted-bttn text-2xl leading-8 w-button"
                ><strong className="bold-text">Déposer un projet</strong></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="logo-section wf-section whitebg">
      <div className="container-1060 w-container">
        <div className="client-image-wrapper">
          <div
            id="w-node-_25ea5eca-f367-2a8c-c26d-9c724e966d69-33ac0d3b"
            className="client--image-wrapper"
          >
            <img
              src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0d055fd2fd33b0ac9136_Bouygues_T%C3%A9l%C3%A9com.png"
              loading="lazy"
              width="124"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 23vw, 124px"
              srcSet="
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0d055fd2fd33b0ac9136_Bouygues_T%C3%A9l%C3%A9com-p-500.png   500w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0d055fd2fd33b0ac9136_Bouygues_T%C3%A9l%C3%A9com-p-800.png   800w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0d055fd2fd33b0ac9136_Bouygues_T%C3%A9l%C3%A9com-p-1080.png 1080w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0d055fd2fd33b0ac9136_Bouygues_T%C3%A9l%C3%A9com-p-1600.png 1600w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0d055fd2fd33b0ac9136_Bouygues_T%C3%A9l%C3%A9com-p-2000.png 2000w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0d055fd2fd33b0ac9136_Bouygues_T%C3%A9l%C3%A9com-p-2600.png 2600w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0d055fd2fd33b0ac9136_Bouygues_T%C3%A9l%C3%A9com-p-3200.png 3200w
              "
              alt=""
              className="client-image orange"
            />
          </div>
          <div
            id="w-node-c4f8d844-2e7f-268b-fe01-c514c4a324e3-33ac0d3b"
            className="client--image-wrapper"
          >
            <img
              src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0d36f5c38d287b14a77e_logo-onepoint.png"
              loading="lazy"
              width="126"
              alt=""
              className="client-image orange"
            />
          </div>
          <div
            id="w-node-_25ea5eca-f367-2a8c-c26d-9c724e966d6b-33ac0d3b"
            className="client--image-wrapper"
          >
            <img
              src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0bcb2e5f783cd669995b_Renault-Logo.png"
              loading="lazy"
              width="100"
              id="w-node-_2fdf6007-a222-4852-9f94-57c0242a3398-33ac0d3b"
              srcSet="
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0bcb2e5f783cd669995b_Renault-Logo-p-500.png   500w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0bcb2e5f783cd669995b_Renault-Logo-p-800.png   800w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0bcb2e5f783cd669995b_Renault-Logo-p-1080.png 1080w
              "
              sizes="(max-width: 479px) 100vw, 100px"
              alt=""
              className="client-image orange"
            />
          </div>
          <div
            id="w-node-_25ea5eca-f367-2a8c-c26d-9c724e966d6d-33ac0d3b"
            className="client--image-wrapper"
          >
            <img
              src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0c610787c761f5eb4bfa_Capgemini_201x_logo.svg.png"
              loading="lazy"
              width="125"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 23vw, 125px"
              srcSet="
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0c610787c761f5eb4bfa_Capgemini_201x_logo.svg-p-500.png   500w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0c610787c761f5eb4bfa_Capgemini_201x_logo.svg-p-800.png   800w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0c610787c761f5eb4bfa_Capgemini_201x_logo.svg-p-1080.png 1080w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0c610787c761f5eb4bfa_Capgemini_201x_logo.svg.png        1280w
              "
              alt=""
              className="client-image orange"
            />
          </div>
          <div
            id="w-node-_25ea5eca-f367-2a8c-c26d-9c724e966d6f-33ac0d3b"
            className="client--image-wrapper"
          >
            <img
              src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0b02fbd74dabef858766_images%20(7).png"
              loading="lazy"
              width="37"
              alt=""
              className="client-image orange"
            />
          </div>
          <div
            id="w-node-_47069b56-0c47-2b92-a3bb-76b2a327321a-33ac0d3b"
            className="client--image-wrapper last_company"
          >
            <img
              src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638f15fdd218a8105571e800_Sopra_Steria_logo.svg.png"
              loading="lazy"
              width="88"
              sizes="(max-width: 479px) NaNvw, 100vw"
              srcSet="
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638f15fdd218a8105571e800_Sopra_Steria_logo.svg-p-500.png   500w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638f15fdd218a8105571e800_Sopra_Steria_logo.svg-p-800.png   800w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638f15fdd218a8105571e800_Sopra_Steria_logo.svg-p-1080.png 1080w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638f15fdd218a8105571e800_Sopra_Steria_logo.svg-p-1600.png 1600w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638f15fdd218a8105571e800_Sopra_Steria_logo.svg-p-2000.png 2000w,
                https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638f15fdd218a8105571e800_Sopra_Steria_logo.svg.png        2560w
              "
              alt=""
              className="client-image orange"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="cards-section wf-section whitebg">
      <div className="container-1060 w-container">
        <div className="w-layout-grid cards-grid">
          <div
            id="w-node-_5887fbfd-43c6-3892-49af-2bae7151e79d-33ac0d3b"
            data-w-id="5887fbfd-43c6-3892-49af-2bae7151e79d"
            className="card-div"
          >
            
            <div className="card-mage-wrapper pt-2-875">
              <img
                src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638ddfd5ba38ef0cb8e04206_girl-with-laptop-studying-on-online-course-5671935-4723231.webp"
                loading="lazy"
                alt=""
                className="image card-image"
              />
            </div>
            <div className="card-text-block mb-2-5625 pl-1-25 pr-1-25">
              <div className="card-name text-3xl leading-10 font-bold mb-0-125">
                Futur étudiants
              </div>
              <div className="card-txt text-sm leading-4">
                Découvrez notre pédagogie par projets et le programme de
                l&#x27;école.<br />Participez dès maintenant à nos événements
                (ECE Awards, ECE Cup)
              </div>
            </div>
            <div className="material-icon">
                <strong className="bold-text-2">arrow_outward</strong>
              </div>
          </div>
          <a
            id="w-node-_1f9cbec7-895c-2802-1aed-ffbd63ac71cf-33ac0d3b"
            data-w-id="1f9cbec7-895c-2802-1aed-ffbd63ac71cf"
            href="./innovawards.html"
            className="card-div w-inline-block"
            >
            <div className="card-mage-wrapper pt-2-875">
              <img
                src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638ddcff65555a1f871ea10d_young-businessman-pointing-to-the-side-with-both-fingers-4997923-4165653.webp"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, 200px"
                width="200"
                srcSet="
                  https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638ddcff65555a1f871ea10d_young-businessman-pointing-to-the-side-with-both-fingers-4997923-4165653-p-500.webp 500w,
                  https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638ddcff65555a1f871ea10d_young-businessman-pointing-to-the-side-with-both-fingers-4997923-4165653.webp       630w
                "
                alt=""
                className="card-image businessman"
              />
            </div>
            <div className="card-text-block mb-2-5625 pl-1-25 pr-1-3125">
              <div className="card-name text-3xl leading-10 font-bold mb-0-125">
                Entreprise, labos,<br />associations
              </div>
              <div className="card-txt text-sm leading-4">
                Proposez un projet à nos étudiants.<br />Entrez en contact avec
                nous. Ou bien découvrez nos formations et le Fablab du campus
                Eiffel.
              </div>
            </div>
            <div className="material-icon">
                <strong className="bold-text-2">arrow_outward</strong>
              </div>
            </a
          >
          <a
            href="#"
            id="w-node-_5887fbfd-43c6-3892-49af-2bae7151e7b5-33ac0d3b"
            data-w-id="5887fbfd-43c6-3892-49af-2bae7151e7b5"
            className="card-div w-inline-block"
          >
            
            <div className="card-mage-wrapper pt-2-875">
              <img
                src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638de150c024ae45feef3adb_man-chilling-at-work-place-6816720-5603794.png"
                loading="lazy"
                alt=""
                className="card-image image test"
              />
            </div>
            <div className="card-text-block mb-2-5625 pl-1-5625 pr-1">
              <div className="card-name text-3xl leading-10 font-bold mb-0-125">
                Etudiant de l&#x27;ECE
              </div>
              <div className="card-txt text-sm leading-4">
                Déposez votre projet, Réservez le Fablab ou Découvrez les
                projets des années précédentes
              </div>
            </div>
            <div className="material-icon">
                <strong className="bold-text-2">arrow_outward</strong>
              </div>
        </a>
        </div>
      </div>
    </div>
    <div className="wf-section whitebg">
      <div className="container-1060 w-container">
        <div className="w-layout-grid numbers-grid">
          <div className="our-number-left-block">
            <h2 className="wts-head">Le pôle en chiffres</h2>
            <p className="our-numpara mt-1-75 mb-2-75">
              Depuis 2012, le programme Valorisation des Projets Etudiants (VPE)
              de l’ECE permet aux élèves ingénieurs de collaborer et
              d&#x27;accompagner les entreprises, startup, laboratoires et
              associations sur des projets d’innovations numériques, dans une
              création de valeur industrielle et académique partagée.
            </p>
            <a
              href="#"
              className="letstalk-bttn text-2xl leading-8 font-bold pt-1-1875 pb-0-8125 pl-3-8125 pr-3-9375 w-button"
              >Décourvrir la pédagogie</a
            >
          </div>
          <div className="image-wrapper">
            <img
              src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60558359d5d4c6a85409c4d3_Group%2036.png"
              loading="lazy"
              alt=""
              className="numbers-image"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="wf-section whitebg">
      <div className="container-1160 w-container">
        <div className="wtsmaindiv mt-6-125">
          <div className="card-block-wrapper">
            <div className="card-content-block">
              <h4 className="wts-head">Qu&#x27;en disent t&#x27;ils ?</h4>
              <div className="wts-text text-sm leading-5">
                2500 alumni sont passés par le pôle projets
              </div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055f280e08cca29fa33dc47_Group%2039.png"
              loading="lazy"
              alt=""
              className="message-icon-image"
            />
          </div>
          <div className="w-layout-grid review-grid">
            <div className="review pt-1-5 pl-2 pr-1-5625">
              <div className="reviewer-details">
                <div className="logo-wrapper">
                  <div className="img-div">
                    <img
                      src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d1260bea1f6baa40a3711_Ellipse%201.png"
                      loading="lazy"
                      width="48"
                      height="48"
                      alt=""
                      className="user-avatar"
                    />
                  </div>
                  <div className="alumni-name">
                    <div
                      className="wts-imgname text-base leading-5 font-medium mt-0-125"
                    >
                      Valentin Lecompte
                    </div>
                    <div className="wtsimg-job text-sm leading-5">
                      Fondateur de Kuantom
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="text-desc text-sm mt-1-125">
                “Le Fablab c’est avant tout un soutien technique dans la
                réalisation d’un produit qui a les moyens de prototyper tout ce
                que l’on peut imaginer et concevoir. Pour Kuantom, ce fût 4 ans
                de recherche, 4 prototypages au sein du Fablab de l’ECE et
                maintenant 4 brevets sur le marché.
              </div>
            </div>
            <div className="review pt-1-5 pl-2 pr-1-5625 ">
              <div className="reviewer-details">
                <div className="logo-wrapper">
                  <div className="img-div">
                    <img
                      src="/images/sarah100x100.webp"
                      loading="lazy"
                      alt=""
                      height="48"
                      width="48"
                      className="user-avatar img-rounded"
                    />
                  </div>
                  <div className="alumni-name">
                    <div
                      className="wts-imgname text-base leading-5 font-medium mt-0-125"
                    >
                      Sarah LE
                    </div>
                    <div className="wtsimg-job text-sm leading-5">
                      Fondatrice de Tiko
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="text-desc text-sm mt-1-125 mb-3-4375">
                “Le Fablab c’est avant tout un soutien technique dans la
                réalisation d’un produit qui a les moyens de prototyper tout ce
                que l’on peut imaginer et concevoir. Pour Kuantom, ce fût 4 ans
                de recherche, 4 prototypages au sein du Fablab de l’ECE et
                maintenant 4 brevets sur le marché.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div className="lastsection wf-section whitebg">
      <div className="container-1060 w-container">
        <div className="lastsecmain-div">
          <img
            src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6058007ab96d3f4025735c35_Group%2041.png"
            loading="lazy"
            alt=""
            className="letter-box-image"
          /><img
            src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6058007ab96d3f4025735c35_Group%2041.png"
            loading="lazy"
            width="320"
            alt=""
            className="post-box-image"
          />
          <div className="yellow-div">
            <h4 className="projectesti-heading">Posez nous directement vos questions</h4>
            
            <form id="cta-form" data-dashlane-rid="57dc2c4819bcf10c" action="https://formspree.io/f/myyvrnnk" method="post" data-form-type="contact" 
            name="form" 
            >
              <div className="">
                <div className="column is-6">
                  <div className=" gap-3">
                    <div className="control ">
                      <input name="Name" className="input entermail" type="text" placeholder="Votre nom" data-dashlane-rid="c9ac649c282e4a56" data-kwimpalastatus="alive" data-kwimpalaid="1670492392464-0" data-form-type="name" required/>
                    </div>
                    <div className="">
                      <div className="control">
                        <input name="Email" className="input entermail" type="email" placeholder="Votre email" data-dashlane-rid="8f8537d483b450a4" data-kwimpalastatus="alive" data-kwimpalaid="1670492392464-1" data-form-type="email" required/>
                      </div>
                    </div>
                  </div>
                  <div className=" search-div">
                    <div className="control">
                      <textarea name="Message" className="textarea entermail" placeholder="Votre message" data-dashlane-rid="45cd314440a2e16a" data-form-type="other" defaultValue="Bonjour, je suis intéressé par le Fablab de l'ECE Paris, auriez vous des portes ouvertes prévues bientôt ?"></textarea>
                    </div>
                  </div>
                  <div className="column is-align-self-flex-end">
                    <button type="submit" className="send-bttn tracking-tight text-lg leading-5 w-button" data-dashlane-rid="936df3f057465b53" data-dashlane-label="true" data-form-type="action">Envoyer</button>
                  </div>
                </div>
              </div>
            </form>
              
   
              
          </div>
        </div>
      </div>
    </div>

    <div className="lastsection wf-section whitebg">
        <div className="container-1060 mt-90 w-container">
            <div className="formblog-div">
                <h3 className="formblog-heading">L&#x27;actu</h3>
           
                <iframe src="https://my.walls.io/h5wri?nobackground=1&amp;show_header=0" width="100%" height="800" frameBorder="0" scrolling="no" allowFullScreen={true}></iframe>
                

                {/*<Actu></Actu>*/}
            </div>
        </div>
    </div>

   
    
    </PageWrapper>
  )
}
