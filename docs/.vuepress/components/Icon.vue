<template>
    <i class="icon">
      <img :src="`/icons/icon-${iconSuffix}.svg`" :alt="`icon ${iconSuffix}`" />
    </i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconSuffix: String,
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