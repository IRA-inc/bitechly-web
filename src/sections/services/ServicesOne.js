import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import AnimationContainer from "components/animation-container";
import AnimatedHeading from "components/animated-heading";

class ServicesOne extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            width: 100%;
            .heading {
                width: 100%;
            }
          }
        `;

    const ServiceContainer = styled.div`
      background-color: rgba(0, 0, 0, 0.9);
      padding: 100px 0;
    `;

    const ServiceElement = styled.div`
      margin-bottom: 20px;
      text-align: left;
      padding: 40px;
      border-radius: 20px;
      transition: 0.2s;
      &:hover {
        background-color: #000;
        box-shadow: 0 28px 60px rgb(4, 229, 229, 0.1);
        transform: translateY(-10px);
      }
    `;
    const ServiceHeading = styled.h4`
      font-size: 30px;
      font-weight: 500;
      font-family: Teko;
      color: #fff;
      width: 100%;
    `;
    const ServiceSeparator = styled.div`
      height: 5px;
      width: 100%;
      background-color: #04e5e5;
      margin-bottom: 10px;
      margin: auto;
    `;
    const ServiceIcon = styled.div`
      margin-bottom: 20px;
      img {
        max-height: 70px;
      }
    `;

    const ServiceList = styled.ul`
      padding: 0;
      margin: 11px 0 0 0;
    `;

    const ServiceListElement = styled.li`
      list-style: none;
      color: #c5c5c5;
      font-weight: 300;
      font-size: 15px;
      margin: 5px 0px;
      &::before {
        display: inline-block;
        content: "";
        border-radius: 2.5px;
        height: 5px;
        width: 5px;
        margin-right: 10px;
        background-color: #04e5e5;
        position: relative;
        bottom: 2.5px;
      }
    `;

    return (
      <Section id="services">
        <ServiceContainer>
          <Container>
            <AnimatedHeading text="Our Services" />
            <Row>
              <Col md={4}>
                <AnimationContainer animation="fadeInLeft" delay={200}>
                  <ServiceElement>
                    <ServiceIcon>
                      <img
                        src={this.props.mobile.childImageSharp.fluid.src}
                        alt="Software Development"
                      />
                    </ServiceIcon>
                    <ServiceHeading>Software Development</ServiceHeading>
                    <ServiceSeparator />
                    <ServiceList>
                      <ServiceListElement>
                      Mobile Application devpt
                      </ServiceListElement>
                      <ServiceListElement>
                      Cloud platform devpt & Integration
                      </ServiceListElement>
                      <ServiceListElement>
                      Web application devpt
                      </ServiceListElement>
                    </ServiceList>
                  </ServiceElement>
                </AnimationContainer>
              </Col>
              <Col md={4}>
                <AnimationContainer animation="fadeInDown" delay={400}>
                  <ServiceElement>
                    <ServiceIcon>
                      <img
                        src={this.props.web.childImageSharp.fluid.src}
                        alt="Resource Augmentation"
                      />
                    </ServiceIcon>
                    <ServiceHeading>Resource Augmentation</ServiceHeading>
                    <ServiceSeparator />
                    <ServiceList>
                      <ServiceListElement>
                      Team augmentation
                      </ServiceListElement>
                      <ServiceListElement>
                      Product ownership
                      </ServiceListElement>
                      <ServiceListElement>
                      Agile products teams
                      </ServiceListElement>
                      <ServiceListElement>
                      DevOps
                      </ServiceListElement>
                      <ServiceListElement>
                      Systems integration
                      </ServiceListElement>
                      <ServiceListElement>
                      Cloud migration
                      </ServiceListElement>
                    </ServiceList>
                  </ServiceElement>
                </AnimationContainer>
              </Col>
              {/* <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.email.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Email Marketing
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.seo.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Search Engine Optimization
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                           */}
              <Col md={4}>
                <AnimationContainer animation="fadeInRight" delay={1200}>
                  <ServiceElement>
                    <ServiceIcon>
                      <img
                        src={this.props.ui.childImageSharp.fluid.src}
                        alt="Design"
                      />
                    </ServiceIcon>
                    <ServiceHeading>Design</ServiceHeading>
                    <ServiceSeparator />
                    <ServiceList>
                      <ServiceListElement>
                      UI/UX Development
                      </ServiceListElement>
                      <ServiceListElement>
                      Wireframes
                      </ServiceListElement>
                      <ServiceListElement>
                      User flows designs
                      </ServiceListElement>
                      <ServiceListElement>
                      Digital Marketing
                      </ServiceListElement>
                    </ServiceList>
                  </ServiceElement>
                </AnimationContainer>
              </Col>
              <Col md={4}>
                <AnimationContainer animation="fadeInUp" delay={1000}>
                  <ServiceElement>
                    <ServiceIcon>
                      <img
                        src={this.props.network.childImageSharp.fluid.src}
                        alt="Consultancy & Strategy"
                      />
                    </ServiceIcon>
                    <ServiceHeading>
                    Consultancy & Strategy
                    </ServiceHeading>
                    <ServiceSeparator />
                    <ServiceList>
                      <ServiceListElement>
                      Product planning & Discovery
                      </ServiceListElement>
                      <ServiceListElement>
                      Customer Journey
                      </ServiceListElement>
                      <ServiceListElement>
                      Project Estimation & Strategic Priotization
                      </ServiceListElement>
                      <ServiceListElement>
                      Technical research
                      </ServiceListElement>
                      <ServiceListElement>
                      Risk analysis
                      </ServiceListElement>
                    </ServiceList>
                  </ServiceElement>
                </AnimationContainer>
              </Col>
              <Col md={4}>
                <AnimationContainer animation="fadeInUp" delay={1000}>
                  <ServiceElement>
                    <ServiceIcon>
                      <img
                        src={this.props.network.childImageSharp.fluid.src}
                        alt="Support"
                      />
                    </ServiceIcon>
                    <ServiceHeading>
                    Support
                    </ServiceHeading>
                    <ServiceSeparator />
                    <ServiceList>
                      <ServiceListElement>
                      Tailored Development support
                      </ServiceListElement>
                      <ServiceListElement>
                      Retained maintenance
                      </ServiceListElement>
                    </ServiceList>
                  </ServiceElement>
                </AnimationContainer>
              </Col>
            </Row>
          </Container>
        </ServiceContainer>
      </Section>
    );
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "bg2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }
        web: file(relativePath: { eq: "icons/web.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobile: file(relativePath: { eq: "icons/mobile.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seo: file(relativePath: { eq: "icons/seo2.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        email: file(relativePath: { eq: "icons/email.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        ui: file(relativePath: { eq: "icons/sketch.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        network: file(relativePath: { eq: "icons/network.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    `}
    render={({ background, web, mobile, seo, email, ui, network }) => (
      <ServicesOne
        background={background}
        web={web}
        mobile={mobile}
        seo={seo}
        email={email}
        ui={ui}
        network={network}
        {...props}
      />
    )}
  />
);
