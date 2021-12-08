<template>
	<div class="home-nav">

		<main class="main">
			<nav class="view-nav" :class="show ? '':'visible'">
				<div class="nav-list left">
					<ul>
						<li v-for="(item,i) in categoriesList" @click="handleClick(item.category_id)">
							<router-link to="" :class="'nav-item  router '+(categoryId==item.category_id?' active':'')">
								{{item.category_name}}
							</router-link>
						</li>

					</ul>
				</div>
			</nav>

			<div style="margin-top: 10rem;">
				<ul>
					<li class="" @click="subcategoryChange('全部')"
						:class="categoryActive=='全部' ? 'tag-active nav-tag':'nav-tag'">全部</li>
					<li class="nav-tag" v-for="i in category" @click="subcategoryChange(i)"
						:class="categoryActive==i ? 'tag-active nav-tag':'nav-tag'">{{i}}</li>


				</ul>
			</div>
			<div class="main-left" style="margin-top: 1rem;">
				<div class="main-left-nav">
					<ul>
						<li class="main-nav-item" @click="sortChange('hot')">
							<router-link to="" :class="'router '+(sort=='hot'?' active':'')">
								推荐
							</router-link>
						</li>
						<li class="main-nav-item router" @click="sortChange('new')">
							<router-link to="" :class="'router '+(sort=='new'?' active':'')">
								最新
							</router-link>
						</li>
						<li class="main-nav-item  router" @click="sortChange('history')">
							<router-link to="" :class="'router '+(sort=='history'?' active':'')">
								历史
							</router-link>
						</li>
					</ul>
				</div>


				<router-view ref="child"></router-view>
			</div>
		</main>
	</div>
</template>

<script>
	import Child from './List.vue';
	import {
		getCategories
	} from '../fake-api/index.js'

	export default {
		comments: {
			Child
		},
		data() {
			return {
				categoriesList: [],
				categoryId: 0,
				sort: 'hot',
				show: true,
				child: [],
				category: [],
				categoryActive: '全部'
			}
		},
		created() {
			this.getArticlesList()


		},
		mounted() {
			window.addEventListener('scroll', this.debounce(this.handleScroll, 100));

		},
		methods: {
			subcategoryChange(category) {
				this.categoryActive = category
				this.$refs.child.categoryActive = this.categoryActive

			},
			debounce(func, wait = 0) {
				if (typeof func !== 'function') {
					throw new TypeError('need a function arguments')
				}
				let timeid = null;
				let result;

				return function() {
					let context = this;
					let args = arguments;

					if (timeid) {
						clearTimeout(timeid);
					}
					timeid = setTimeout(function() {
						result = func.apply(context, args);
					}, wait);

					return result;
				}
			},
			handleClick(categoryId) {
				this.sort = 'hot'
				this.categoryActive = '全部'
				this.$refs.child.categoryActive = this.categoryActive
				this.categoryId = categoryId
				this.$refs['child'].categoryChange(categoryId)
				this.category = this.$refs.child.$data.category
			},
			sortChange(sort) {
				this.categoryActive = '全部'
				this.$refs.child.categoryActive = this.categoryActive
				this.sort = sort
				this.$refs['child'].sortChange(sort)
				this.category = this.$refs.child.$data.category
			},
			async getArticlesList() {
				const {
					data
				} = await getCategories()

				this.categoriesList = data.categories

				



				// for (let i = 0; this.articlesList.length; i++) {
				// 	console.log(getDateDiff(this.articlesList[i].article_info.ctime))
				// }

			},
			handleScroll() {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

				if (this.scrollheight > scrollTop) {
					this.show = true
				} else {
					if (scrollTop > 200) {
						this.show = false
					} else {
						this.show = true
					}
				}
				this.scrollheight = scrollTop



			},

		}
	}
</script>
<style lang="less" scoped>
	.visible {

		transform: translate3d(0, -5rem, 0) !important;

	}

	.main {
		position: relative;
		margin: 0 auto;
		width: 100%;
		max-width: 960px;
	}

	.home-nav {
		height: 3.833rem;
		position: relative;
		margin: 0 auto;
		width: 100%;
		max-width: 960px;
		line-height: 1;
		font-size: 14px;



	}

	.main {
		max-width: 960px;
		background-color: ;
		height: auto;
		margin: 0.8rem auto 0 auto;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

		.main-left {
			margin-right: 21.667rem;
			border-radius: 2px;
			width: 700px;
			height: 100%;
			background-color: #ffffff;
			padding-bottom: 2rem;

			.main-left-nav {

				padding: 1.3rem 1rem;
				border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);

				.main-nav-item {

					padding: 0 1.2rem;
					font-size: 1.16rem;
					border-right: 1px solid hsla(0, 0%, 59.2%, .2);

				}

				li:last-child {
					border-right: none;
				}

			}
		}
	}

	.view-nav,
	.view-nav:before {
		left: 0;
		background-color: #fff;
	}

	.view-nav {
		position: fixed;
		top: 5rem;
		width: 100%;
		height: 3.833rem;
		z-index: 100;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
		transition: all .2s;
		transform: translateZ(0);
	}

	.nav-list {
		position: relative;
	}

	.view-nav .nav-list {
		max-width: 960px;
		height: 100%;
		margin: auto;
		display: flex;
		align-items: center;
		line-height: 1;

		.nav-item {
			padding: 0 1.5rem 0 0;

		}

	}

	.nav-tag {

		height: 2rem;
		background-color: #fff;
		border-radius: 1rem;
		font-size: 1.1rem;
		color: #8a9aa9;
		padding: 0.2rem .83rem;
		margin-right: 1rem;
		margin-bottom: 1rem;
		cursor: pointer;
	}

	.tag-active {

		background-color: #007fff;
		color: #fff;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 5%);

	}
</style>
