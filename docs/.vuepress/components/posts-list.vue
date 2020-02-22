<template>
	<div class="toc">
		<h2 class="toc__title">Table of Contents</h2>
		<ul class="toc__list" v-for="progLang in progLangList">
			<li class="toc__item prog-lang-content">
				<h3 class="prog-lang-content__title">
					<Icon
						:name="progLang.title.toLowerCase()"
						:ariaHidden="true"
						:customStyle="{ width: '22px', height: '22px', marginRight: '8px' }"
					/>
					{{ progLang.title }}
				</h3>
				<ul class="prog-lang-content__list">
					<li class="prog-lang-content__item prog-lang-content-item" v-for="content in progLangContent(progLang.title)">
						<div class="prog-lang-content-item__title-group">
							<a :href="$withBase(content.path)">
								<h4 class="prog-lang-content-item__title">
									{{ content.title }}
								</h4>
							</a>
							<span
								v-if="validDateChecker(content.lastUpdated)"
								class="prog-lang-content-item__date"
							>
                {{ formatDate(content.lastUpdated) }}
              </span>
						</div>
						<ul class="prog-lang-sub-content">
							<li
								class="prog-lang-sub-content__item"
								v-for="header in content.headers"
							>
								<h5 class="prog-lang-sub-content__title">{{ header.title }}</h5>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import moment from 'moment';
	import Icon from './Icon';

	export default {
		name: 'posts-list',
		components: {
			Icon
		},
		methods: {
			formatDate(date = 'oeu') {
				if (moment(date).format('YYYY') === moment(new Date()).format('YYYY')) {
					return moment(date).format('L');
				} else {
					return moment(date).format('YYYY');
				}
			},
			progLangContent(progLang) {
				return this.$site.pages
					.filter((page, idx) => {
						if (!page.relativePath.includes('/')) {
							return;
						}
						return page.relativePath.split('/')[0] === progLang.toLowerCase();
					})
					.sort((a, b) => a.title.localeCompare(b.title));
			},

			validDateChecker(date) {
				return moment(date).isValid();
			}
		},
		computed: {
			progLangList() {
				return this.$themeConfig.sidebar['/'][1].children;
			}
		}
	};
</script>

<style lang="scss" scoped>
	%list-style-shared {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.toc {
		&__title {
      margin: 32px 0;
      padding: 12px 0;
      border-bottom: 1px solid #e8e8e8;
			font-size: 28px;
		}

		&__list {
			@extend %list-style-shared;

      &:not(:last-child) {
        margin-bottom: 32px;
      }
		}
	}

	.prog-lang-content {
		&__title {
			display: flex;
			align-items: center;
			margin: 0 0 16px 0;
			font-size: 20px;
		}

		&__list {
			@extend %list-style-shared;

      &:not(last-child) {
        margin-left: 32px;
      }
		}

		&__item {
			margin-bottom: 16px;
		}

		@media screen and (max-width: 720px) {
			&-item {
				margin-bottom: 12px;
			}
		}
	}

	.prog-lang-content-item {
		&__title-group {
			display: flex;
			align-items: baseline;
		}

		&__title {
			margin: 0 0 10px 0;
			font-size: 16px;
		}

		&__date {
			margin-left: 8px;
			font-size: 12px;
			color: #727579;
		}

		@media screen and (max-width: 720px) {
			&__title {
				margin: 0;
			}
		}
	}

	.prog-lang-sub-content {
		@extend %list-style-shared;
		padding-left: 16px;

		&__title {
			display: flex;
			align-items: center;
			margin: 0 0 8px 0;
			font-size: 14px;
			font-weight: 400;
			color: #49494b;

			&::before {
				content: '';
				width: 3px;
				height: 3px;
				margin-right: 5px;
				border-radius: 50%;
				background-color: #49494b;
			}
		}

		@media screen and (max-width: 720px) {
			display: none;
		}
	}
</style>
