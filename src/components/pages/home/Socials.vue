<template>
  <div class="socials">
    <a
      class="socials__link"
      href="https://www.upwork.com/o/profiles/users/~01a20265fabe11c1dd/"
      rel="noreferrer"
      target="_blank"
      aria-label="open my upwork"
    >
      <UpWork class="socials__icon" />
    </a>
    <a
      class="socials__link"
      href="https://github.com/jmcmullen"
      rel="noreferrer"
      target="_blank"
      aria-label="open my github"
    >
      <Github class="socials__icon" />
    </a>
    <a
      class="socials__link"
      href="https://linkedin.com/in/j-mcmullen"
      rel="noreferrer"
      target="_blank"
      aria-label="open my linkedin"
    >
      <LinkedIn class="socials__icon" />
    </a>
  </div>
</template>

<script>
import Github from '../../../assets/images/icons/github.svg';
import LinkedIn from '../../../assets/images/icons/linkedin.svg';
import Twitter from '../../../assets/images/icons/twitter.svg';
import Instagram from '../../../assets/images/icons/instagram.svg';
import Soundcloud from '../../../assets/images/icons/soundcloud.svg';
import UpWork from '../../../assets/images/icons/upwork.svg';

export default {
  components: {
    Github,
    LinkedIn,
    Twitter,
    Instagram,
    Soundcloud,
    UpWork,
  },
};
</script>

<style lang="scss">
.socials {
  display: flex;
  flex: 20 1 auto;

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
