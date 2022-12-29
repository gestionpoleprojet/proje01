import Image from 'next/image'
import { PageWrapper } from '../../components/PageWrapper';
import TestimonialCardList from '../../components/TestimonialCardList';
import TestimonialCard from '../../components/TestimonialCard';
import { indexQueryTestimonialFablab } from '../../lib/queries';
import { getClient } from '../../lib/sanity-server';
import { Testimonial } from '../../lib/types';

export default async function Fablab() {

  async function getTestimonials() {
    const testimonials: Testimonial[] = await getClient(false).fetch(indexQueryTestimonialFablab,{ cache: 'no-cache' });
    return testimonials;
  }
  
  const testimonials: Testimonial[] = await getTestimonials();
  console.log(testimonials);
  
  return (
  <PageWrapper>
  <div className="hero-section wf-section red-fablab">
    <div className="container-1060 w-container">
      <div className="hero-block">
        <div className="w-layout-grid hero-grid">
          <div className="card-image-block mb-0-875">
            <img
              src="./images/trophy-printer.webp"
              width="480"
              alt="3D-icon-printer"
              className="wtc-image-large"
            />
          </div>
          <div
            id="w-node-c2326c45-130c-31dc-a559-bdbd2d6eb97b-33ac0d3b"
            className="hero-wrapper"
          >
            <h1 className="hero-title mb-2 hero-mobile">
              Un atelier dernière génération pour vos projets
            </h1>
            <div className="hero-text text-base leading-4">
              
              Ouvert aux étudiants ainsi qu’aux entreprises à la recherche de solutions de prototypage rapide permettant de donner vie à leur idées.<br></br>
              Il équipé d’outils traditionnels et numériques comme des imprimantes 3D, découpes laser et fraiseuses à commande numériques
            </div>
            <a href="#" className="getstarted-bttn text-2xl leading-8 w-button"
              ><strong className="bold-text">Réserver une machine</strong></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="logo-section wf-section">
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
            alt="logo orange"
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
  <div className="cards-section wf-section">
    <div className="container-1060 w-container">
      <div className="w-layout-grid cards-grid">
        <div
          id="w-node-_5887fbfd-43c6-3892-49af-2bae7151e79d-33ac0d3b"
          data-w-id="5887fbfd-43c6-3892-49af-2bae7151e79d"
          className="card-div"
        >
         
          <div className="card-mage-wrapper pt-2-875">
            <img
              src="./images/chip.webp"
              loading="lazy"
              
              alt=""
              className="chip card-image"
            />
          </div>
          <div className="card-text-block mb-2-5625 pl-1-25 pr-1-25">
            <div className="card-name text-3xl leading-10 font-bold mb-0-125">
              Circuits imprimés
            </div>
            <div className="card-txt text-sm leading-4">
              Découvrez notre pédagogie par projets et le programme de
              l&#x27;école.<br />Participez dès maintenant à nos événements
              (ECE Awards, ECE Cup)
            </div>
          </div>
        </div>
        <a
          id="w-node-_1f9cbec7-895c-2802-1aed-ffbd63ac71cf-33ac0d3b"
          data-w-id="1f9cbec7-895c-2802-1aed-ffbd63ac71cf"
          href="#"
          className="card-div w-inline-block"
          >
          <div className="card-mage-wrapper pt-2-875">
            <img
              src="./images/laser.webp"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, 200px"
              
              alt=""
              className="card-image laser"
            />
          </div>
          <div className="card-text-block mb-2-5625 pl-1-25 pr-1-3125">
            <div className="card-name text-3xl leading-10 font-bold mb-0-125">
              Découpes laser
            </div>
            <div className="card-txt text-sm leading-4">
              Proposez un projet à nos étudiants.<br />Entrez en contact avec
              nous. Ou bien découvrez nos formations et le Fablab du campus
              Eiffel.
            </div>
          </div></a
        >
        <div
          id="w-node-_5887fbfd-43c6-3892-49af-2bae7151e7b5-33ac0d3b"
          data-w-id="5887fbfd-43c6-3892-49af-2bae7151e7b5"
          className="card-div"
        >
         
          <div className="card-mage-wrapper pt-2-875">
            <img
              src="./images/3dprinter.webp"
              loading="lazy"
              alt=""
              className="card-image dprinter"
            />
          </div>
          <div className="card-text-block mb-2-5625 pl-1-5625 pr-1">
            <div className="card-name text-3xl leading-10 font-bold mb-0-125">
              Impressions 3D
            </div>
            <div className="card-txt text-sm leading-4">
              Déposez votre projet, Réservez le Fablab ou Découvrez les
              projets des années précédentes
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="wf-section whitebg">
    <div className="container-1060 w-container">
      <div className="w-layout-grid numbers-grid">
        <div className="our-number-left-block">
          <h2 className="wts-head">Les ECE Makers</h2>
          <p className="our-numpara mt-1-75 mb-2-75">
            Le FabLab “ECE Makers“ c’est également un espace d’exposition des projets et plus largement un espace de rencontres, de collaborations et de créations pour bénéficier de conseils et d’expertises ou pour trouver réponse à ses questions. Son équipe, les “ ECE Makers “, sont des élèves-ingénieurs prêts à vous accueillir et à vous aider dans la réalisation de vos projets (prototypes, petites séries).
          </p>
          <a
            href="#"
            className="red-fablab letstalk-bttn text-2xl leading-8 font-bold pt-1-1875 pb-0-8125 pl-3-8125 pr-3-9375 w-button "
            >Réserver une machine</a
          >
        </div>
        <div className="image-wrapper">
          <img
            src="./images/barcelona.jpg"
            loading="lazy"
            alt=""
            className="numbers-image "
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
            <h2 className="wts-head">Qu&#x27;en disent t&#x27;ils ?</h2>
            <div className="wts-text text-sm leading-5">
              2500 alumni sont passés par le Fablab
            </div>
          </div>
          
        </div>
        <div className="w-layout-grid review-grid">
           <TestimonialCardList testimonials={testimonials} /> 
        </div>
      </div>
    </div>
  </div>
  </PageWrapper>
  )
}
