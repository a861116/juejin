<template>
	<div>
		<main class="main" style="padding-bottom: 5rem;margin-top: 6rem;">
			<div class="main-left" style="padding: 0 2rem;">
				<div class="author-info">

					<div class="author-info-box">
						<a>
							<img :src="article.author_user_info.avatar_large" class="avatar" />
						</a>

					</div>
					<div class="author-name">
						<div>{{article.author_user_info.user_name}}</div>
						<div style="font-size: 1.1rem;color: #909090;font-weight: 500;margin-top: .25rem;"><span
								style="margin-right: 1rem;letter-spacing: 1px;">{{article.article_info.ctime | Timer(article.article_info.ctime)}}</span><span>阅读
								{{article.article_info.view_count}}</span></div>
					</div>
					<button class="follow-button"><span>关注</span></button>
				</div>
				<div>
					<img :src="article.article_info.cover_image" class="cover" />
				</div>
				<div class="title">{{article.article_info.title}}</div>
				<div v-html="article.article_content">
				</div>
				<div class="tag-list">
					<div class="tag-title">文章分类</div>
					<div class="tag">{{article.category_info.first_category_name}}</div>
					<div class="tag">{{article.category_info.second_category_name}}</div>

				</div>

				<div class="author-info"
					style="padding: 15px 17px;border-radius: 2px;background-color: #f4f5f5;margin-bottom: 2.67rem;">

					<div class="author-info-box">
						<a>
							<img :src="article.author_user_info.avatar_large" class="avatar" />
						</a>

					</div>
					<div class="author-name">
						<div>{{article.author_user_info.user_name}}<span
								class="level">Lv{{article.author_user_info.level}}</span><span class="info"
								style="margin-left: 0.7rem;">{{article.author_user_info.company}}</span></div>
						<div style="font-size: 1.1rem;color: #909090;font-weight: 500;margin-top: .25rem;"><span
								style="margin-right: 1rem;">发布了 {{article.author_user_info.post_article_count}} 篇文章 · 获得
								{{article.author_user_info.got_digg_count}} 点赞 · 获得
								{{article.author_user_info.got_view_count}} 阅读</span></div>
					</div>
					<button class="follow-button"><span>关注</span></button>
				</div>
				<div class="comment-form">
					<div class="avatar-box">
						<img src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e30559a8dc5b1a0ea4b8b2a485d34018.svg"
							alt="" class="avatar">
					</div>
					<div class="comment-box" style="margin-right: 2rem;">
						<input style="width: 100%;height: 72px;border: 0;background-color: #f4f5f5;" class="input-class"
							placeholder="输入评论（Enter换行，Ctrl + Enter发送)" />
						<div class="submit" style="float:right;margin-top: 1rem;">发表评论</div>

					</div>

				</div>
				<div class="comment-container">
					<div class="comment-title">
						全部评论（{{comment.total}}）
					</div>
					<div class="comment-list">
						<div class="comment" v-for="item in comment.data.comments">
							<div class="avatar-box"><img :src="item.user_info.avatar_large" alt="" class="avatar"></div>
							<div class="comment-detail">
								<div class="username">{{item.user_info.user_name}}<span class="divide"
										v-if="item.user_info.job_title!=''"></span><span
										class="title">{{item.user_info.job_title}}</span><span
										class="divide"></span><span
										class="title">{{item.comment_info.ctime | Timer1(item.comment_info.ctime)}}</span>
								</div>
								<div class="content">{{item.comment_info.comment_content}}</div>
								<div style="margin-top: 1rem;"><span class="action"><svg data-v-6213122e="" width="16"
											height="16" viewBox="0 0 16 16" fill="#86909c"
											xmlns="http://www.w3.org/2000/svg" class="">
											<path data-v-6213122e="" fill-rule="evenodd" clip-rule="evenodd"
												d="M8.89171 0.830428L9.01333 0.887423C9.82397 1.27824 11.0012 2.06718 11.0012 3.33376C11.0012 3.83594 10.7783 4.50196 10.3324 5.33182H12.8585C14.8478 5.33182 15.3046 7.08773 14.8478 8.40345L12.8585 13.6402C12.6904 14.2493 12.1306 14.6718 11.4918 14.6718H3.32843V5.33182H4.69308L7.65979 1.1115C7.84711 0.813472 8.35277 0.584994 8.89171 0.830428ZM2.33333 5.33268V14.666H1V5.33268H2.33333ZM8.55916 2.15072L5.3856 6.66528H4.66176V13.3386H11.4918C11.5331 13.3386 11.5653 13.3143 11.5732 13.2856L11.5899 13.2253L13.5938 7.94998C13.8572 7.17389 13.5945 6.66528 12.8585 6.66528H8.10231L9.15785 4.70085C9.50885 4.0476 9.66789 3.57253 9.66789 3.33389C9.66789 2.94703 9.2534 2.50946 8.55916 2.15072Z">
											</path>
										</svg>点赞</span>
									<span class="action"><svg data-v-6213122e="" width="16" height="16"
											viewBox="0 0 16 16" fill="#86909c" xmlns="http://www.w3.org/2000/svg"
											class="">
											<path data-v-6213122e="" fill-rule="evenodd" clip-rule="evenodd"
												d="M14 1C14.3682 1 14.6667 1.29848 14.6667 1.66667V12.3333C14.6667 12.7015 14.3682 13 14 13H10.5924L8.44602 14.932C8.19248 15.1601 7.8076 15.1601 7.55406 14.932L5.40737 13H2.00004C1.63185 13 1.33337 12.7015 1.33337 12.3333V1.66667C1.33337 1.29848 1.63185 1 2.00004 1H14ZM13.3334 2.33333H2.6667V11.6667H5.919L8 13.5395L10.0807 11.6667H13.3334V2.33333ZM11.3334 6.66667C11.3334 6.48257 11.1841 6.33333 11 6.33333H5.00003C4.81594 6.33333 4.6667 6.48257 4.6667 6.66667V7.33333C4.6667 7.51743 4.81594 7.66667 5.00003 7.66667H11C11.1841 7.66667 11.3334 7.51743 11.3334 7.33333V6.66667Z">
											</path>
										</svg>回复</span>
								</div>
								<div class="subcomment-container" style="margin-top: 1rem;">
									<div class="subcomment-list">
										<div class="subcomment" v-for="i1 in item.reply_infos">
											<div class="avatar-box">
												<img :src="i1.user_info.avatar_large" alt="" class="avatar1">
											</div>
											<div class="comment-detail">
												<div class="username">{{i1.user_info.user_name}}<span class="divide"
														v-if="i1.user_info.job_title!=''"></span><span
														class="title">{{i1.user_info.job_title}}</span><span
														class="divide"></span><span
														class="title">{{i1.reply_info.ctime | Timer1(i1.reply_info.ctime)}}</span>
												</div>
												<div class="content">{{i1.reply_info.reply_content}}</div>
												<div style="margin-top: 1rem;"><span class="action"><svg
															data-v-6213122e="" width="16" height="16"
															viewBox="0 0 16 16" fill="#86909c"
															xmlns="http://www.w3.org/2000/svg" class="">
															<path data-v-6213122e="" fill-rule="evenodd"
																clip-rule="evenodd"
																d="M8.89171 0.830428L9.01333 0.887423C9.82397 1.27824 11.0012 2.06718 11.0012 3.33376C11.0012 3.83594 10.7783 4.50196 10.3324 5.33182H12.8585C14.8478 5.33182 15.3046 7.08773 14.8478 8.40345L12.8585 13.6402C12.6904 14.2493 12.1306 14.6718 11.4918 14.6718H3.32843V5.33182H4.69308L7.65979 1.1115C7.84711 0.813472 8.35277 0.584994 8.89171 0.830428ZM2.33333 5.33268V14.666H1V5.33268H2.33333ZM8.55916 2.15072L5.3856 6.66528H4.66176V13.3386H11.4918C11.5331 13.3386 11.5653 13.3143 11.5732 13.2856L11.5899 13.2253L13.5938 7.94998C13.8572 7.17389 13.5945 6.66528 12.8585 6.66528H8.10231L9.15785 4.70085C9.50885 4.0476 9.66789 3.57253 9.66789 3.33389C9.66789 2.94703 9.2534 2.50946 8.55916 2.15072Z">
															</path>
														</svg>点赞</span>
													<span class="action"><svg data-v-6213122e="" width="16" height="16"
															viewBox="0 0 16 16" fill="#86909c"
															xmlns="http://www.w3.org/2000/svg" class="">
															<path data-v-6213122e="" fill-rule="evenodd"
																clip-rule="evenodd"
																d="M14 1C14.3682 1 14.6667 1.29848 14.6667 1.66667V12.3333C14.6667 12.7015 14.3682 13 14 13H10.5924L8.44602 14.932C8.19248 15.1601 7.8076 15.1601 7.55406 14.932L5.40737 13H2.00004C1.63185 13 1.33337 12.7015 1.33337 12.3333V1.66667C1.33337 1.29848 1.63185 1 2.00004 1H14ZM13.3334 2.33333H2.6667V11.6667H5.919L8 13.5395L10.0807 11.6667H13.3334V2.33333ZM11.3334 6.66667C11.3334 6.48257 11.1841 6.33333 11 6.33333H5.00003C4.81594 6.33333 4.6667 6.48257 4.6667 6.66667V7.33333C4.6667 7.51743 4.81594 7.66667 5.00003 7.66667H11C11.1841 7.66667 11.3334 7.51743 11.3334 7.33333V6.66667Z">
															</path>
														</svg>回复</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="more" v-if="show" @click='getMore()'>查看全部 {{comment.total}} 条回复<svg data-v-0f4877d6=""
						width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
						class="">
						<path data-v-0f4877d6="" fill-rule="evenodd" clip-rule="evenodd"
							d="M8 10.5759L13.4212 5.15476C13.5513 5.02459 13.7624 5.02459 13.8926 5.15476L14.364 5.62616C14.4941 5.75634 14.4941 5.96739 14.364 6.09757L8.4714 11.9901C8.21106 12.2505 7.78894 12.2505 7.5286 11.9901L1.63604 6.09757C1.50586 5.96739 1.50586 5.75634 1.63604 5.62616L2.10744 5.15476C2.23762 5.02459 2.44867 5.02459 2.57885 5.15476L8 10.5759Z"
							fill="#4E5969"></path>
					</svg></div>
				<div style="padding-bottom: 2rem;"></div>
			</div>

		</main>
	</div>
</template>

<script>
	import {
		getArticleById,
		getCommentsByArticleId
	} from '../fake-api/index.js'
	import {
		format,
		timeago
	} from '../api/timeHandler.js'
	export default {
		data() {
			return {
				article: [],
				comment: [],
				show: true
			}
		},
		created() {
			this.getArticle(this.$route.params.articleId)
			this.getComment(this.$route.params.articleId)
		},
		filters: {

			Timer: function(str) {

				let times = Number(str) * 1000;
				return format(times);
			},
			Timer1: function(str) {

				let times = Number(str) * 1000;
				return timeago(times);
			}
		},
		methods: {

			async getArticle(id) {
				const {
					data
				} = await getArticleById(id)

				this.article = data.article


			},
			async getComment(id) {

				this.comment = await getCommentsByArticleId(id, 0, 15)


			},
			async getMore() {
				const {
					data
				} = await getCommentsByArticleId(this.$route.params.articleId, 1, this.comment.total - 15)
				const {
					comments
				} = data
				this.comment.data.comments = [
					...this.comment.data.comments,
					...comments
				]

				this.show = false
			}

		}
	}
</script>


<style lang="less" scoped>
	.cover {
		margin-bottom: 2rem;
		width: 100%;

	}

	.title {
		margin: .67em 0;
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.5;
	}

	.author-info {
		padding-top: 2rem;
		display: flex;
		margin-bottom: 2rem;
		align-items: center;

		.avatar {
			flex: 0 0 auto;
			margin-right: 1rem;
			width: 3.333rem;
			height: 3.333rem;
			border-radius: 50%;
		}

		.author-name {
			flex-flow: column;
			display: flex;
			flex: 1;
			font-size: 1.3rem;
			font-weight: 700;
			color: #333;
		}

		.follow-button {
			margin: 0 0 0 auto;
			padding: 0;
			width: 55px;
			height: 26px;
			font-size: 13px;
			border: 1px solid #6cbd45;
			color: #6cbd45;
			background-color: #fff;

		}

		.follow-button:hover {
			color: #76cc4a;
		}
	}

	.tag-list {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		margin-bottom: 1.6rem;
		padding: 2rem 0;
		border-top: 1px solid #e5e6eb;

		.tag-title {
			display: flex;
			font-size: 1.167rem;
			line-height: 2.286;
		}

		.tag {
			font-size: 1.167rem;
			line-height: 2.667rem;
			background-color: #fafafa;
			margin: 0 1rem;
			padding: 0 0.5rem;
			cursor: pointer;
		}

		.tag:hover {
			background-color: #f5f5f5;
		}
	}

	.level {
		margin-left: 0.8rem;
		background-color: #599dff;
		color: white;
		font-weight: 600;
		font-size: 2px;
		padding: 0 3px;
		border-radius: 2px;
	}

	.info {

		font-size: 1.1rem;
		color: #909090;
		font-weight: 500;
	}

	.comment-form {
		display: flex;
		border-bottom: 1px solid #e5e6eb;
		padding-top: 32px;
		padding-bottom: 28px;
		border-radius: 2px;
	}

	.avatar {
		margin-right: 16px;

		width: 32px;
		height: 32px;
		border-radius: 50%;
	}

	.avatar1 {
		margin-right: 16px;

		width: 24px;
		height: 24px;
		border-radius: 50%;
	}

	.avatar-box {
		flex: 0 0 auto;

	}

	.comment-box {

		flex: 1 1 auto;

	}

	.input-class {
		vertical-align: text-top;
		padding: 8px 0 8px 0;
		color: #1d2129;

		min-height: 72px;

		line-height: 20px;
		font-size: 14px;

	}

	.submit {



		width: 92px;
		text-align: center;
		font-size: 14px;
		line-height: 36px;
		background: #c9cdd4;
		border-radius: 2px;
		color: #fff;
		padding: 0;
		cursor: pointer;
	}

	.comment-container {
		padding-top: 28px;
		padding-bottom: 8px;

		.comment-title {
			position: relative;
			line-height: 24px;
			font-weight: 500;
			font-size: 16px;
			color: #1d2129;
			width: 100%;
			padding-bottom: 8px;
		}

		.comment-list {
			.comment {
				display: flex;
				border-bottom: 1px solid #e5e6eb;
				padding-top: 32px;
				padding-bottom: 18px;
				border-radius: 2px;

				.comment-detail {
					flex: 1 1 auto;
					flex-direction: column;

					.content {
						font-size: 14px;
						line-height: 22px;
						color: #4e5969;
						margin-top: 8px;
						-webkit-line-clamp: 6;
					}

					.username {
						display: block;
						font-weight: 500;
						font-size: 14px;
						color: #1d2129;
						vertical-align: middle;

						.title {
							font-size: 14px;
							color: #86909c;
							font-weight: 500;
						}
					}
				}

				.avatar-box {
					flex: 0 0 auto;

					.avatar {
						margin-right: 16px;

						width: 32px;

						border-radius: 50%;
					}
				}
			}
		}
	}

	.divide {
		display: inline-block;
		width: 1px;
		height: 15px;
		background: #e5e6eb;
		margin: -2px 10px;

	}

	.action {
		margin-right: 16px;
		line-height: 20px;
		font-size: 12px;
		cursor: pointer;
		color: #86909c;
		vertical-align: middle;

		svg {

			display: inline-block;
			width: 17px;
			height: 17px;
			line-height: 25px;
			background-size: cover;
			vertical-align: top;
			margin-right: 5px;
		}
	}

	.subcomment-container {
		background-color: #f7f8fa;


		.subcomment-title {
			position: relative;
			line-height: 24px;
			font-weight: 500;
			font-size: 16px;
			color: #1d2129;
			width: 100%;
			padding-bottom: 8px;
		}

		.subcomment-list {
			.subcomment {
				display: flex;
				border-bottom: 1px solid #e5e6eb;
				padding-top: 12px;
				padding-bottom: 18px;
				border-radius: 2px;

				.subcomment-detail {
					flex: 1 1 auto;
					flex-direction: column;

					.content {
						font-size: 14px;
						line-height: 22px;
						color: #4e5969;
						margin-top: 8px;
						-webkit-line-clamp: 6;
					}

					.username {
						display: block;
						font-weight: 500;
						font-size: 14px;
						color: #1d2129;
						vertical-align: middle;

						.title {
							font-size: 14px;
							color: #86909c;
							font-weight: 500;
						}
					}
				}

				.avatar-box {
					flex: 0 0 auto;
					margin-left: 1rem;

					.avatar {
						margin-right: 16px;

						width: 32px;

						border-radius: 50%;
					}
				}
			}
		}
	}

	.more {

		text-align: center;
		color: #4e5969;
		font-size: 14px;
		height: 22px;
		padding-top: 10px;
		cursor: pointer;

		margin: 0;
		vertical-align: middle;

		svg {

			display: inline-block;
			width: 17px;
			height: 17px;
			line-height: 25px;
			background-size: cover;
			vertical-align: top;
			margin-left: 16px;
		}
	}
</style>
