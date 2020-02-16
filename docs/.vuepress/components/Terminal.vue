<template>
  <div class="terminal-box">
    <pre class="terminal-box__content terminal">
      <code v-for="command in commands" class="terminal__code">
        <span class="terminal__directory">~/r0o0/{{ currentPage }}</span>
        <span><span class="terminal__start-symbol">></span> {{ command }}</span>
      </code><code class="terminal__code">
        <span class="terminal__directory">~/r0o0/{{ currentPage }}</span>
        <span class="terminal__start-symbol">></span> <span class="terminal__cursor">_</span>
      </code>
    </pre>
    <!-- TODO: show list of commands able to copy and make single copy of each line -->
    <div class="copy-box">
      <Button class="btn-copy" v-on:click.native="onClick" text="Copy" />
      <!-- TODO: add tooltip component -->
      <div v-if="isCopied" class="tooltip">Copied</div>
    </div>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'Terminal',
  props: {
    commands: Array,
  },
  data() {
    return {
      isCopied: false,
    };
  },
  methods: {
    getCurrentDirectory(title) {
      return title.toLowerCase().split(' ').join('-');
    },
    copyCommand() {
      this.$copyText(this.commands[0])
      .then((e) => {
        this.isCopied = true;

        setTimeout(() => {
          this.isCopied = false;
          e.clearSelection();
        }, 2000);
      })
      .catch((error) => console.error(error));
    },
    onClick: function () {
      console.log('btn click');
      this.copyCommand();
    },
  },
  computed: {
    currentPage() {
      return this.getCurrentDirectory(this.$page.frontmatter.title);
    }
  }
}
</script>

<style lang="scss" scoped>
.terminal-box {
  position: relative;
  &__content {
    white-space: pre-line !important;
    color: white;
    background-color: #262626;
  }
}

.terminal {
  &__code {
    white-space: pre-line !important;
  }

  &__directory {
    font-weight: bold;
    color: #2bb8f0;
  }

  &__start-symbol, &__cursor {
    font-weight: bold;
    color: #18d56d;
  }

  &__cursor {
    animation: blink 1s infinite;
    animation-timing-function: cubic-bezier(0.85, 0.35, 0.19, 0.93);
  }

  @keyframes blink {
    10% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
  }

}

.copy-box {
  position: absolute;
  right: 16px;
  top: 16px;
}

.btn-copy {
  position: relative;
  width: 54px;
  height: 25px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: #1170e6;

  &:hover {
    background-color: transparent;
    color: #fff;
    transition: color .45s cubic-bezier(0.27, 0.92, 0.52, 0.9);
    &::after {
      content: '';
      position: absolute;
      left: 3px;
      bottom: -2px;
      width: 48px;
      height: 2px;
      background-color: #fff;
      border-radius: 4px;
      transition: all .45s cubic-bezier(0.2, 0.87, 0.73, 0.6);
    }
  }
}

.tooltip {
  position: absolute;
  top: 1px;
  left: -54px;
  margin-left: -12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #fff;
  font-size: 12px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -4px;
    width: 0;
    height: 0;
    transform: translateY(-50%);

    border-left: 4px solid #fff;

    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
}
</style>