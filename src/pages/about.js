import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
import Img from 'gatsby-image';
import {graphql} from 'gatsby'

export const query = graphql`
query {
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        
        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
    console.log(query)
    return (
        <Layout>
            <h2>Hello , my name is Developer</h2>

            <div className={aboutStyle.main}>
            

            <div className={aboutStyle.izquierda}>
                <div className={aboutStyle.imagen}> <Img className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} /></div>
                <div className={aboutStyle.texto}>

                <div className={aboutStyle.iconos}><i className="fas fa-map-marker-alt fa-sm"></i><p>Location, Country</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-graduation-cap fa-sm"></i><p>University of life</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-code fa-sm"></i><p>HTML, JS, CSS, noSQL</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-language fa-sm"></i><p>English, Spanish, Portuguese and Latin</p></div>
            


                </div>
          
            </div>
            <div className={aboutStyle.derecha}>
            <p>
            Healthy float waves wrap gnarley Trestles oil water indy? Clamped blonde rigs capped out socked in, blown out fresh stick healthy float stall, waves Taj Burrow. Fan a spray foam ball clamped rip the pit shacked priority frothy top dry hair paddle out insider. Oil barreling, carve crumbly lip in the bricks white water sand bar fighting for the peak. Twin fin freshie reef urll make the paddle layback hammer blonde rigs slob priority. Drifting the tail rinsed salt water pit above the lip. Stab mag, double up nice little fish kook legend J.O.B. rock-n-roll socked in.
            </p><p>
Stomps it stale send it loc vertical backside hack out the back rookie drifting the tail crumbly lip. Oil barny nutty Jordy Smith clamped ripping the pit, best section combos wind swell best section. Chunky keyhole shutting down ripping bumps crumble sand bottom. Jamie O'Brien psyched pit critical Margaret River good-epic Pipe, good-epic flow. Firing shorebreak stuffs the rail claw hands rail dig speed tube barn dog a-frame claim. Firing wave so pitted wave green room green room foam climb tides insider. Rights cranking nice little amped barn dog bumps hack a thon don.
</p><p>
Fog Eddie would go layback daggers barreling backside board lefts. Pitted silky smooth John John Florence reef brah, pump. Rippin blow tail fins free reef ripping knee high full mad air reverse? Paddle out Simpo psyching tri fin, down the line, no kooks speed hack waves. Pump send it sand bottom section Jordy Smith insider no kooks, over the reef epic snake.
</p>
               
                <div className={aboutStyle.logoContainer}>
                <p>Some of the tech I like:</p>
                <img alt="javascript" className={aboutStyle.logo} src="./logos/javascript.svg" />
                <img alt="Gatsby" className={aboutStyle.logo} src="./logos/gatsby.svg" />
                <img alt="GraphQl" className={aboutStyle.logo} src="./logos/graphql.svg" />
                <img alt="React" className={aboutStyle.logo} src="./logos/react.svg" />
                <img alt="nodeJs" className={aboutStyle.logo} src="./logos/nodejs-icon.svg" />
                <img alt="Mongo" className={aboutStyle.logo} src="./logos/mongodb.png" />
                <img alt="Sass" className={aboutStyle.logo} src="./logos/sass-1.svg" />
                </div>

           
                <div className={aboutStyle.socialContainer}>
                <p>Send me a message!</p>
                <a className={aboutStyle.social} href="https://github.com/martin2844"><i className="fab fa-github"></i></a>
            <a className={aboutStyle.social} href="https://www.instagram.com/codigo.mate/"><i className="fab fa-instagram"></i></a>
            <a className={aboutStyle.social} href="https://www.youtube.com/channel/UC9nNIxlNohIoIrjtC4ueIOA"><i className="fab fa-youtube"></i></a>
                <a className={aboutStyle.social} href="https://www.twitter.com/codigomate"><i class="fab fa-twitter"></i></a>
                </div>


            </div>

            </div>
        </Layout>
    )
}

export default About