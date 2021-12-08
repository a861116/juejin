<template>
	<div id="app">
		<header class="main-header" :class=" show ? 'sticky':''">
			<div class="container">
				<a href="/" class="logo"><img
						src="./style/logo.png"
						alt="稀土掘金" class="logo-img"> </a>
				<nav class="main-nav">
					<ul>
						<li class="nav-item ">
							<router-link to="/" class="router active">
								首页
							</router-link>
						</li>

					</ul>
				</nav>
			</div>
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				scrollheight: 0,
				show: true
			}
		},
		created() {
			
		},
		mounted() {
			window.addEventListener('scroll', this.debounce(this.handleScroll, 100));

		},

		methods: {
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

<style lang="less">
	.sticky {
		transform: translateZ(0) !important;
	}

	.main-header {
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #fff;
		border-bottom: 1px solid #f1f1f1;
		color: #909090;
		height: 5rem;
		transition: all .2s;
		transform: translate3d(0, -100%, 0);

		.container {
			max-width: 1200px;
			margin: auto;
		}
	}

	.container {
		display: flex;
		align-items: center;
		height: 100%;
	}

	.logo {
		margin-right: 1.3rem;
	}

	.logo-img {
		display: block;
		width: 116.82px;
		height: 24px;
	}

	.main-nav {
		margin-left: 2rem;
		font-size: 16px;
		color: #86909c;

		.nav-item {

			cursor: pointer;

		}

		.nav-item:hover {
			color: #1e80ff;
		}


	}
</style>
