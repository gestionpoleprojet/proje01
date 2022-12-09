

const Footer = (props) => {

  return (
    <script async src={props.src} data-wallurl={props.data_wallurl} data-title="My social wall" data-width="100%" data-autoheight="1" data-height="800" data-lazyload="1"></script>
  );
  };

export async function getServerSideProps() {
  
        const res = await fetch('https://walls.io/js/wallsio-widget-1.2.js');
        const src = await res.js();
        const data_wallurl= await fectch("https://my.walls.io/h5wri?nobackground=1&amp;show_header=0&amp;initial_posts=5")
  console.log(src)
  
  return {
    props: {
      src,
      data_wallurl
    }
  }
}
export default Footer;
