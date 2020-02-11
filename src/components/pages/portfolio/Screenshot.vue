<template>
  <div class="screenshot">
    <h3 class="screenshot__title">{{ project.node.title }}</h3>
    <div class="screenshot__wrapper">
      <div class="screenshot__desktop">
        <div class="screenshot__desktop-menu">
          <div class="screenshot__desktop-menu-btn" />
          <div class="screenshot__desktop-menu-btn" />
          <div class="screenshot__desktop-menu-btn" />
          <div class="screenshot__desktop-menu-bar" />
        </div>
        <g-image :src="project.node.desktop" class="screenshot__desktop-image" />
      </div>
      <div class="screenshot__mobile">
        <div class="screenshot__mobile-notch" />
        <g-image :src="project.node.mobile" class="screenshot__mobile-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.screenshot {
  background-color: $color-white;
  display: flex;
  flex-grow: none;
  flex-direction: column;
  padding: 1rem 1rem 0;

  &__title {
    font-size: 1.4rem;
    margin-bottom: 0;
  }

  &__wrapper {
    position: relative;
    width: 100%;
    max-width: 300px;
    height: 210px;
    overflow-x: visible;
    overflow-y: hidden;
  }

  &__desktop {
    position: absolute;
    border: 5px solid $color-dark-grey;
    border-bottom: 1px solid $color-dark-grey;
    background-color: $color-dark-grey;
    overflow: hidden;
    width: 90%;
    top: 20px;

    &-menu {
      display: flex;
      justify-content: flex-start;
      padding: 0 0 0.3rem 0;

      &-btn {
        width: 5px;
        height: 5px;
        background-color: $color-grey;
        margin-right: 3px;
      }

      &-bar {
        width: 80%;
        height: 5px;
        background-color: $color-grey;
        margin-right: 3px;
      }
    }
  }

  &__mobile {
    position: absolute;
    border: 5px solid $color-dark-grey;
    right: 0px;
    top: 60px;
    overflow: hidden;
  }
}
</style>
