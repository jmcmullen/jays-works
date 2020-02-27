<template>
  <g-link class="card" :to="`/portfolio/${project.node.slug}`">
    <div class="card__image-wrap">
      <g-image
        v-if="project.node.desktop"
        :src="project.node.desktop"
        class="card__image"
      />
    </div>
    <div class="card__label">
      <h3 class="card__title">{{ project.node.title }}</h3>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease 0s;
  cursor: pointer;
  margin-bottom: 2rem;

  &__image {
    width: 100%;
    box-shadow: 0 13px 34px 0 rgba(0, 0, 0, 0.1);

    &-wrap {
      padding: 1rem 1rem 0;
    }
  }

  &__label {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -25px;
    z-index: 1;
    margin: -1.5rem 3rem;
    padding: 0.5rem;
    background: white;
    box-shadow: 0 13px 34px 0 rgba(0, 0, 0, 0.1);
  }

  &__title {
    margin: 0;
    text-align: center;
  }
}
</style>
