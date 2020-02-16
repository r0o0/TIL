<template>
  <a
    v-if="type === 'link'"
    :role="type"
    target="_blank"
    :href="link"
  >
    <Icon v-if="icon" :name="icon" style="width: inherit; height: inherit" />
    <span v-else>{{ text }}</span>
  </a>
  <button
    v-else
    v-bind="$attrs"
    :type="type"
  >
    <Icon v-if="icon" :name="icon" />
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
import Icon from './Icon';

export default {
  name: 'Button',
  inheritAttrs: false,
  props: {
    icon: String,
    type: {
      default: 'button',
      type: String,
    },
    link: String,
    text: String,
  }
}
</script>