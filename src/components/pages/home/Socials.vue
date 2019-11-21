<template>
  <div class="socials">
    <a class="socials__link" href="https://github.com/jmcmullen" target="_blank">
      <Github class="socials__icon" />
    </a>
    <a class="socials__link" href="https://linkedin.com/in/j-mcmullen" target="_blank">
      <LinkedIn class="socials__icon" />
    </a>
    <a class="socials__link" href="https://twitter.com/jaymcmullen10" target="_blank">
      <Twitter class="socials__icon" />
    </a>
    <a class="socials__link" href="https://instagram.com/jjmcmullen" target="_blank">
      <Instagram class="socials__icon" />
    </a>
    <a class="socials__link" href="https://soundcloud.com/jjmcmullen" target="_blank">
      <Soundcloud class="socials__icon" />
    </a>
  </div>
</template>

<script>
  import Github from '../../../assets/images/icons/github.svg';
  import LinkedIn from '../../../assets/images/icons/linkedin.svg';
  import Twitter from '../../../assets/images/icons/twitter.svg';
  import Instagram from '../../../assets/images/icons/instagram.svg';
  import Soundcloud from '../../../assets/images/icons/soundcloud.svg';

  export default {
    components: {
      Github,
      LinkedIn,
      Twitter,
      Instagram,
      Soundcloud,
    },
  };
</script>

<style lang="scss">
  .socials {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 3rem;

    &__link {
      margin-top: 0.5rem;
    }

    &__icon {
      width: 24px;
    }
  }
</style>
