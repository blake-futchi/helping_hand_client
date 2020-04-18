import LazyHero from 'react-lazy-hero';
import React from 'react';
import { Header } from 'semantic-ui-react'

 const Hero = () => {
  return (
    <LazyHero imageSrc="https://cdn.hipwallpaper.com/i/35/78/jhYV6A.jpg" style={{ marginTop: '-15px', opacity: 1, minHeight: '90vh'}}>
      <Header>Get your basic needs and shopping taken care of from the comfort of your home</Header>
    </LazyHero>
  );
}

export default Hero