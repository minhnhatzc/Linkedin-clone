import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../action";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn onClick={() => props.signIn()}>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcom to your porfessinal community</h1>
          <img src="/images/login-hero1.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
          <Facebook>
            <img src="/images/facebook.png" alt="" />
            Sign in with Facebook
          </Facebook>
        </Form>
      </Section>
      <Content>
        <Left>
          <h2>Explore topics you are interested in</h2>
        </Left>
        <Right>
          <h2>CONTENT TOPICS</h2>
          <ul>
            <li>
              <a href="/">See All Topic</a>
            </li>
            <li>
              <a href="/">Workplace</a>
            </li>
            <li>
              <a href="/">Jobs Search</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Interviewing</a>
            </li>
            <li>
              <a href="/">Internship</a>
            </li>
            <li>
              <a href="/">Salary and Compensation</a>
            </li>
            <li>
              <a href="/">Employee Benefits</a>
            </li>
          </ul>
        </Right>
      </Content>

      <Suggested>
        <Left_suggested>
          <h2>Find the right job or internship for you</h2>
        </Left_suggested>
        <Right_suggested>
          <h2>SUGGESTED SEARCHES</h2>
          <ul>
            <li>
              <a href="/">Engineering</a>
            </li>
            <li>
              <a href="/">Business</a>
            </li>
            <li>
              <a href="/">Finance</a>
            </li>
            <li>
              <a href="/">Administrative</a>
            </li>
            <li>
              <a href="/"> Assistant Retail</a>
            </li>
            <li>
              <a href="/">Customer Services</a>
            </li>
            <li>
              <a href="/">Operations Information</a>
            </li>
          </ul>
          <button>Show more...</button>
        </Right_suggested>
      </Suggested>

      <Footer>
      <div>
        <ul>
          <img src="/images/linkedin.png" alt="" />
        </ul>
        <ul>
          <h2>General</h2>
          <h3>Sign Up</h3>
          <h3>Help Center</h3>
          <h3>About</h3>
          <h3>Press</h3>
          <h3>Blog</h3>
          <h3>Careers</h3>
          <h3>Developers</h3>
        </ul>
        <ul>

          <h2>Browse LinkedIn</h2>
          <h3>Sign Up</h3>
          <h3>Help Center</h3>
          <h3>About</h3>
          <h3>Press</h3>
          <h3>Blog</h3>
          <h3>Careers</h3>
          <h3>Developers</h3>
        </ul>


        <ul>
          <h2>Business Solutions</h2>
          <h3>Sign Up</h3>
          <h3>Help Center</h3>
          <h3>About</h3>
          <h3>Press</h3>
          <h3>Blog</h3>
          <h3>Careers</h3>
          <h3>Developers</h3>
          </ul>

        <ul>
          <h2>Directories</h2>
          <h3>Sign Up</h3>
          <h3>Help Center</h3>
          <h3>About</h3>
          <h3>Press</h3>
          <h3>Blog</h3>
          <h3>Careers</h3>
          <h3>Developers</h3>
          <h3>Sign Up</h3>
          <h3>Help Center</h3>
        </ul>
        </div>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgb(0, 0, 0, 0.6);
  margin-right: 12px;

  &:hover {
    background-color: rgb(0, 0, 0, 0.08);
    color: rgb(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgb(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`;
const Section = styled.a`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.a`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  padding-right: 35px;
  margin-bottom: 30px;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgb(0, 0, 0 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  img {
    margin: 10px;
    border-radius: 10px solid;
  }
`;

const Facebook = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgb(0, 0, 0 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  img {
    margin: 10px;
    border-radius: 5px solid;
  }
`;

const Content = styled.div`
  height: 340px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  background-color: #eae6df;
`;

const Left = styled.div`
  width: 480px;
  height: 100%;
  margin-left: 185px;
  display: flex;
  flex-shrink: 0;
  align-self: flex-start;
  margin-right: 72px;
  margin-bottom: 24px;
  margin-top: 60px;
  h2 {
    font-weight: 250;
    font-size: 48px;
    line-height: 60px;
    color: rgba(0, 0, 0, 0.9);
  }
`;

const Right = styled.a`
  width: 480px;
  height: 100%;
  margin-right: 72px;
  margin-bottom: 24px;
  margin-top: 60px;
  h2 {
    margin-bottom: 20px;
    font-weight: 250;
    font-size: 16px;
    line-height: 20px;
    margin: 10px 10px 10px 0;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    text-align: left;
    &:first-child a {
      color: #0a66c2;
      border: 2px solid #0a66c2;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 6px;
    margin-bottom: 12px;
    padding: 0 25px;
    float: left;
    text-decoration: none;
    min-height: 48px;
    border: 2px solid #000000;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    font-weight: 250;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;
const Suggested = styled.div`
  height: 440px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  background-color: #ffffff;
`;
const Left_suggested = styled.div`
  width: 480px;
  height: 100%;
  margin-left: 185px;
  display: flex;
  flex-shrink: 0;
  align-self: flex-start;
  margin-right: 72px;
  margin-bottom: 24px;
  margin-top: 60px;
  h2 {
    font-weight: 250;
    font-size: 48px;
    line-height: 60px;
    color: rgba(0, 0, 0, 0.9);
  }
`;

const Right_suggested = styled.div`
  width: 480px;
  height: 100%;
  margin-right: 72px;
  margin-bottom: 24px;
  margin-top: 60px;
  h2 {
    margin-bottom: 20px;
    font-weight: 250;
    font-size: 16px;
    line-height: 20px;
    margin: 10px 10px 10px 0;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    text-align: left;
    &:first-child a {
      color: #0a66c2;
      border: 2px solid #0a66c2;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 6px;
    margin-bottom: 12px;
    padding: 0 25px;
    float: left;
    text-decoration: none;
    min-height: 48px;
    border: 2px solid #000000;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    font-weight: 250;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  button {
    width: 124px;
    height: 48px;
    font-size: 16px;
    font-weight: 300;
    margin-left: -8px;
    padding: 0px 8px;
    border: none;
    background-color: #ffffff;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
  }
`;

const Footer = styled.div`
  height: 430px;
  width: 100%;
  background-color: #eae6df;

  div {
  margin-left: 123px;
  width: 1128px;
  height: 380px;
  padding-top: 24px;
  padding-bottom: 22px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

  }
  h2 {
    font-size: 16px;
    font-weight: 550;
    line-height: 20px;
    padding-bottom: 10px;
  }
  h3 {
    font-size: 14px;
    text-align: left;
    font-weight: 200;
    margin: 10px 0;
    line-height: 18px;
    color:rgb(0, 0, 0, 0.7);


  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
