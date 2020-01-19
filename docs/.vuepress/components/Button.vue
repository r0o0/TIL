<template>
  <a
    v-if="type === 'link'"
    role="button"
    target="_blank"
    :href="link"
  >
    <Icon :iconSuffix="icon" style="width: inherit; height: inherit" />
  </a>
  <button v-else>
    <Icon :iconSuffix="icon" />
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