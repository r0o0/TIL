<template>
  <div class="recent-posts">
    <h2 class="recent-posts-title">Recent Posts</h2>
    <ul class="recent-posts__list">
      <li v-for="post in recentPosts">
        <a :href="getPostLink(post.relativePath)">
          <span class="recent-posts__list-category">{{ getPostCategory(post.relativePath) }}</span>
          <h3 class="recent-posts__list-title">{{ post.title }}</h3>
          <span class="recent-posts__list-date">{{ getUpdatedDate(post.lastUpdated) }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'recent-posts',
  state: {
    recentPosts: Array,
  },
  methods: {
    getUpdatedDate(date) {
      return moment(date).format('ll');
    },
    getPostCategory(value) {
      return value.split('/')[0];
    },
    getPostLink(path) {
      return path.split('.')[0] + '/';
    }
  },
  computed: {
    recentPosts() {
      return this.$site.pages
        .filter((page, idx) => {
          if (idx > 8) { return; }
          return page.regularPath !== '/' && moment().isAfter(moment(page.lastUpdated));
        })
        .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    },
  }
}
</script>

<style lang="scss" scoped>
.recent-posts {
  padding: 16px 0;

  &-title {
    padding-bottom: 12px;
    font-size: 20px;
    border-bottom: 1px solid #e8e8e8;
  }
}

.recent-posts__list {
  margin: 0;
  padding: 0;
  list-style: none;


  & li {
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 4px;
    transition: box-shadow 0.3s cubic-bezier(0.64,-0.07, 0.32, 0.87);

    &:hover {
      box-shadow: 0px 3px 12px -4px rgba(0,0,0,0.18), -4px 0 0 0 #1170e6;
    }
  }

  & a {
    padding: 16px 20px;

    &:hover {
      text-decoration: none;
    }
  }

  &-title {
    margin: 0 0 8px 0;
    font-size: 18px;
  }

  &-category {
    display: inline-flex;
    width: fit-content;
    margin-bottom: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 13px;
    line-height: 1;
    color: #6d6d6d;
    text-transform: capitalize;
    background: #f1f1f1;
  }

  &-date {
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 1;
    color: #5c5c5c;
  }
}
</style>