<template>
  <div class="related-links">
    <h3 class="related-links__title">Related Links</h3>
    <ul class="related-links__list">
      <li class="related-links__item" v-for="link in links">
        <a :href="link.url" target="_blank">
          {{ link.title }}
          <span class="related-links__item-site">({{ link.site }}) <Icon class  ="related-links__icon-link" name="link" /></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from './Icon';
  export default {
    name: 'related-links',
    components: { Icon },
    props: {
      links: Array
    }
  };
</script>

<style lang="scss" scoped>
  .related-links {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 16px 0 0;
    padding: 24px;
    background-color: #fafafa;

    &__title {
      margin: 0 96px 12px 0;
      font-size: 16px;
      line-height: 1;
      color: #4e4e4e;
    }

    &__list {
      margin: 2px 0 0 0;
      padding: 0;
      list-style: none;
      font-size: 14px;
      line-height: 1;
    }

    &__item {
      display: flex;
      align-items: center;

      &::before {
        content: '';
        width: 4px;
        height: 4px;
        margin-right: 8px;
        border-radius: 50%;
        background-color: #9e9e9e;
      }

      > a {
        display: flex;
        align-items: center;
        cursor: pointer;

        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
          &::after {
            background-color: transparent;
            filter: invert(65%) sepia(0%) saturate(382%) hue-rotate(124deg)
              brightness(94%) contrast(93%);
          }
        }
      }

      &-site {
        display: flex;
        align-items: center;
        padding-left: 2px;
        font-size: 12px;
        color: hsl(0, 2%, 62%);
      }
    }
    &__icon-link {
      padding-left: 6px;
      width: 20px;
      height: 20px;
      fill: #ccc;  // change to filter
    }

    &__item:not(last-child) {
      margin-bottom: 12px;
    }
  }
</style>
