import React from "react";
import {
  Row,
  //  Container,
  Col,
} from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import RevealContent from "components/reveal-content";
import AnimationContainer from "components/animation-container";
import Particles from "react-particles-js";
// import Counter from 'components/counter'

class AboutTwo extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const Section = styled.section`
      position: relative;
      overflow: hidden;
      background-color: #000;
      .particles {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    `;

    const AboutCol = styled(Col)`
      display: flex;
      align-items: center;
    `;

    const ImageCol = styled(Col)`
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        .image-col {
          text-align: center;
        }
      }
    `;

    const ImageWrapper = styled.div`
      @media (min-width: 768px) and (max-width: 1024px) {
        height: 300px;
        width: 300px;
        display: flex;
        align-items: center;
      }

      @media (min-width: 1025px) and (max-width: 1500px) {
        height: 500px;
        width: 500px;
        display: flex;
        align-items: center;
      }
      @media (max-width: 500px) {
        * {
          text-align: center;
        }
      }
    `;
    const Main = styled.div`
      padding: 270px 0 150px 0;
      @media (max-width: 767px) {
        padding: 100px 0;
      }
      @media (min-width: 768px) and (max-width: 1500px) {
        padding: 300px 0 0px 0;
      }
      @media (min-width: 1501px) and (max-width: 1600px) {
        padding: 200px 0;
      }
    `;

    const Overlay = styled.div`
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      background-color: rgba(0, 0, 0, 0.9);
    `;
    const Heading = styled.h1`
      font-size: 70px;
      line-height: 70px;
      font-family: Teko;
      color: #fff;
      text-transform: uppercase;
      @media (min-width: 768px) and (max-width: 1600px) {
        font-size: 35px;
        line-height: 40px;
      }
      @media (max-width: 767px) {
        font-size: 30px;
        line-height: 30px;
        text-align: left;
      }
    `;
    // const Color = styled.span`
    //   color: #04e5e5;
    //   font-size: 75px;
    //   line-height: 70px;
    //   font-family: Teko;
    //   text-transform: uppercase;
    //   letter-spacing: 2px;
    //   @media (min-width: 768px) and (max-width: 1600px) {
    //     font-size: 40px;
    //     line-height: 40px;
    //   }
    //   @media (max-width: 767px) {
    //     font-size: 40px;
    //     line-height: 40px;
    //   }
    // `;

    const Image = styled.img`
      max-height: 500px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 28px 60px rgb(4, 229, 229, 0.2);
      @media (max-width: 767px) {
        margin: 20px 0;
        width: 90%;
        max-height: 200px;
      }
      @media (min-width: 768px) and (max-width: 1024px) {
        max-height: 300px;
        max-width: 300px;
      }
      @media (min-width: 1025px) and (max-width: 1600px) {
        max-height: 500px;
        max-width: 500px;
      }
    `;

    const AboutContent = styled.div`
      padding: 0 20%;
      @media (max-width: 500px) {
        padding: 0 5%;
      }
      @media (min-width: 501px) and (max-width: 1600px) {
        padding: 0 5%;
      }
    `;

    const Separator = styled.div`
      height: 5px;
      width: 50px;
      background-color: #04e5e5;
      margin-bottom: 20px;
    `;

    const Text = styled.p`
      font-size: 16px;
      font-weight: 400;
      color: #c5c5c5;
    `;

    //   const CounterRow = styled(Row)`
    //       background-color: #000;
    //       padding: 50px 0 100px 0;
    //   `

    //   const CounterComponent = styled.div`
    //       margin: 10px 0;
    //       text-align: center;
    //       @media (max-width:767px) {
    //           margin: 50px 0;
    //           text-align:center;
    //       }
    //       .value {
    //           font-size: 120px;
    //           font-family: Teko;
    //           color: #fff;
    //           line-height: 90px;
    //       }
    //       .text {
    //           font-size: 20px;
    //           color: #fff;
    //       }
    //       .symbol {
    //           color: #04e5e5;
    //           position: absolute;
    //           font-size: 39px;
    //           top: -28px;
    //       }
    // `

    return (
      <Section id="about">
        <Overlay />
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 2000,
                },
              },
              color: {
                value: ["#03afaf", "#04e5e5"],
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#fff",
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 8.017060304327615,
                random: true,
                anim: {
                  enable: true,
                  speed: 12.181158184520175,
                  size_min: 0.1,
                  sync: true,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: this.context.theme === "dark" ? "#fff" : "#555",
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <Main>
          <Row>
            <AboutCol md={6}>
              <Col md={12}>
                <AnimationContainer animation="fadeIn" delay={1500}>
                  <AboutContent>
                    <Heading>
                     About us
                     {/* <Color></Color> */}
                     {/* ,a company that transform{" "}
                      <Color>Technolgy</Color> */}
                    </Heading>
                    <Separator />
                    <Text>
                    Welcome to Bitechly Ltd! We are a team of experts dedicated to helping businesses achieve their goals through strategic advice and custom software development. We understand that in today's fast-paced world, staying competitive requires continuous innovation and improvement. That's where we come in.

With our extensive experience in software development and business strategy, we help our clients uncover opportunities for improved operations and efficiencies. Whether you need to modernise existing infrastructure or outdated systems, or you have a vision for a completely new way of working, we work hand in hand with your teams to deliver these changes in a safe and cost-effective way.

Our goal is to empower our clients with the tools they need to succeed in their respective industries. We pride ourselves on our ability to understand the unique challenges that our clients face and provide tailored solutions that meet their specific needs.

At our core, we are committed to delivering exceptional results and building long-term partnerships with our clients. Contact us today to learn more about how we can help your business reach its full potential.
                    </Text>
                  </AboutContent>
                </AnimationContainer>
              </Col>
            </AboutCol>
            <ImageCol md={6}>
              <ImageWrapper>
                <RevealContent>
                  <Image
                    src={this.props.image.childImageSharp.fluid.src}
                    alt="about"
                  />
                </RevealContent>
              </ImageWrapper>
            </ImageCol>
          </Row>
        </Main>
        {/* <CounterRow>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={5} duration={5} delay={1000} symbol="+" text="5 Years of Experience" />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={100} duration={5} delay={1000} symbol="+" text="Clients Worked With" />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={5} duration={5} delay={1000} text="Certifications" />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={10} duration={5} delay={1000} symbol="+" text="Honourable Awards" />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </CounterRow> */}
      </Section>
    );
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "building.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 2000) {
              src
            }
          }
        }
      }
    `}
    render={({ image, abstract }) => (
      <AboutTwo image={image} abstract={abstract} {...props} />
    )}
  />
);
