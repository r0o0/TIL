<template>
    <i class="icon" :aria-hidden="ariaHidden" :style="customStyle">
      <img :src="$withBase(`/icons/icon-${name}.svg`)" :alt="`icon ${name}`" />
    </i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    ariaHidden: Boolean,
    customStyle: Object,
  },
}
</script>

<style lang="scss" scoped>
  .icon {
    display: flex;
    width: 36px;
    height: 36px;
    > img {
      width: 100%;
    }
  }
</style>