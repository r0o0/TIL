<template>
  <a
    v-if="type === 'link'"
    role="button"
    target="_blank"
    :href="link"
  >
    <Icon :name="icon" style="width: inherit; height: inherit" />
  </a>
  <button v-else>
    <Icon :name="icon" />
  </button>
</template>

<script>
import Icon from './Icon';
export default {
  name: 'Button',
  props: {
    icon: String,
    type: String,
    link: String,
  }
}
</script>