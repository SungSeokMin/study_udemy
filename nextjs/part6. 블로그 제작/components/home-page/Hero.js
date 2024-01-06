import Image from 'next/image';

import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/sung.png" alt="image" width={300} height={300} />
      </div>

      <h1>Hi, I'm Sung</h1>

      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
