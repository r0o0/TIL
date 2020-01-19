<template>
    <i class="icon">
      <img :src="`/icons/icon-${progLang}.svg`" :alt="{progLang}" />
    </i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    progLang: String,
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