<template>
	<div>
		<div class="article-list" v-for="(item,i) in articlesList" @click='selectArticle(item.article_id)'>
			<div class="list-header">
				<div class="user">
					{{item.author_user_info.user_name}}
				</div>
				<div class="dividing"></div>
				<div style="color: #86909c;">{{item.article_info.ctime | Timer(item.article_info.ctime)}}</div>
				<div class="dividing"></div>
				<div>

					<ul>
						<li class="category">{{item.category_info.first_category_name}}</li>
						·
						<li class="category">{{item.category_info.second_category_name}}</li>
					</ul>
				</div>
			</div>
			<div class="list-main">
				<div class="list-left" :style="{'width': item.article_info.cover_image =='' ? '660px':'510px'}">
					<div class="article-title">
						{{item.article_info.title}}
					</div>
					<div class="brief">
						{{item.article_info.brief_content}}
					</div>
					<div class="action-list">
						<ul>
							<li class="action-list-item"><i
									style="background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png);"></i>{{item.article_info.view_count}}
							</li>
							<li class="action-list-item"><i style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC);
"></i>{{item.article_info.digg_count}}</li>
							<li class="action-list-item"><i
									style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=);"></i>{{item.article_info.comment_count}}
							</li>
						</ul>
					</div>
				</div>
				<div class="list-right" v-if="item.article_info.cover_image != ''">
					<img class="article-cover" :src="item.article_info.cover_image" />
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import {
		getArticles,
		getArticleById
	} from '../fake-api/index.js'
	import {
		timeago
	} from '../api/timeHandler.js'
	export default {
		name: 'child',
		data() {
			return {
				discussList: [],
				articlesList: [],
				categoryId: 0,
				sortBy: 'hot',
				offset: 0,
				limit: 10,
				category: [],
				categoryActive: ''
			}
		},
		created() {
			this.getArticlesList(this.categoryId, this.sortBy, this.offset, this.limit)

		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true)
		},
		filters: {

			Timer: function(str) {

				let times = Number(str) * 1000;
				return timeago(times);
			}
		},
		methods: {
			async sortChange(sort) {
				this.category = []
				if (sort == 'history') {
					window.removeEventListener('scroll', this.handleScroll, true)
					this.articlesList = []
					this.sortBy = 'hot'
					this.offset = 0
					let templist = JSON.parse(localStorage.getItem("historyId") || "[]");
					for (let n = 0; n < templist.length; n++) {
						const {
							data
						} = await getArticleById(templist[n])
						const {
							article
						} = data

						this.articlesList.push(article)


					}
				} else {
					window.removeEventListener('scroll', this.handleScroll, true)
					window.addEventListener('scroll', this.handleScroll, true)
					this.articlesList = []
					this.sortBy = sort
					this.offset = 0
					this.getArticlesList(this.categoryId, sort, 0, 10)
				}

			},
			categoryChange(categoryId) {
				this.category = []
				window.removeEventListener('scroll', this.handleScroll, true)
				window.addEventListener('scroll', this.handleScroll, true)
				this.articlesList = []
				this.categoryId = categoryId
				this.sortBy = 'hot'
				this.offset = 0
				this.getArticlesList(categoryId, 'hot', 0, 10)
			},
			selectArticle(id) {
				this.$router.push("/post/" + id);
				let templist = JSON.parse(localStorage.getItem("historyId") || "[]");
				let i = templist.indexOf(id)

				if (i > -1) {

					templist.splice(i, 1)
					templist.unshift(id)
				} else {
					templist.unshift(id);
				}
				localStorage.setItem("historyId", JSON.stringify(templist));

			},
			handleScroll() {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;

				var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

				if (scrollTop + windowHeight == scrollHeight) {

					this.getArticlesList(this.categoryId, this.sortBy, this.offset, this.limit)
				}

			},
			async getArticlesList(categoryId, sortBy, offset, limit) {
				const {
					data
				} = await getArticles(categoryId, sortBy, offset, limit)
				const {
					articles
				} = data

				this.articlesList = [
					...this.articlesList,
					...articles
				]

				this.offset++


				for (let i = 0; this.articlesList.length; i++) {

					if (this.category.indexOf(this.articlesList[i].category_info.second_category_name) == -1) {
						this.category.push(this.articlesList[i].category_info.second_category_name)
					} else {

					}
				}



			}

		}
	}
</script>

<style lang="less" scoped>
	.article-list {
		height: 140px;
		width: 660px;
		border-bottom: 1px solid #f1f1f1;
		cursor: pointer;
		padding: 12px 20px 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		.list-header {
			display: flex;
			align-items: center;

			.user {
				font-size: 13px;
				line-height: 22px;
				color: #4e5969;
				white-space: nowrap;
				text-overflow: ellipsis;
				word-break: break-all;


			}

			.category {
				color: #86909c;
			}

			.category:hover {
				color: #007fff;
			}
		}

		.list-main {
			display: flex;

			.list-left {
				width: 510px;

				.action-list {
					margin-top: 10px;

					.action-list-item {


						margin-right: 20px;
						font-size: 13px;
						line-height: 20px;
						color: #4e5969;
						vertical-align: middle;

						i {

							display: inline-block;
							width: 17px;
							height: 17px;
							line-height: 25px;
							background-size: cover;
							vertical-align: top;
							margin-right: 5px;
						}
					}
				}
			}

			.list-right {
				.article-cover {

					flex: 0 0 auto;
					width: 120px;
					height: 80px;
					margin-left: 24px;
					border-radius: 2px;

				}
			}

			padding-bottom: 12px;

			margin-top: 10px;
			width: 100%;

			.article-title {

				font-weight: 700;
				font-size: 16px;
				line-height: 24px;
				color: #1d2129;
				width: 100%;
				display: flex;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
			}

			.brief {
				margin-top: 8px;
				display: inline-block;
				white-space: nowrap;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				font-weight: 400;
				font-size: 13px;
				line-height: 22px;
				color: #86909c;

			}
		}
	}

	.article-list:hover {
		background-color: #f4f5f5;
	}
</style>
