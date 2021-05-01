<template>
  <!-- 上位にdivを加えて、urlにpostがない場合の対応をする -->
  <div>
    <div v-if="!post" class="subtitle is-4 px-4 py-4">
      <p class="py-4">
        記事が見つかりません
      </p>
      <h1 class="title px-6">
        <nuxt-link :to="`/`">ホームへ</nuxt-link>
      </h1>
    </div>
    <!-- mx-0 px-0  -->
    <section v-else class="section has-background-light mx-0 px-0">
      <div class="columns">
        <!--  -->
        <div class="column is-8 is-offset-2 card has-background-info">
          <div class="columns">
            <figure class="image">
              <datocms-image :data="post.coverImage.responsiveImage" />
            </figure>
          </div>
          <div class="columns">
            <div class="column has-background-white mx-0 my-0 px-4 py-4">
              <!-- タイトル -->
              <h3 class="title is-size-3 mx-0 my-0 px-0 py-0">
                <nuxt-link :to="`/posts/${post.slug}`" class="has-text-dark">{{
                  post.title
                }}</nuxt-link>
              </h3>
              <!--          -->
              <!-- タグ -->
              <!-- <button @click="info">タグ</button> -->
              <!--      -->
              <div
                class="columns mt-4 mb-0 is-vcentered"
                style="line-height:1px"
              >
                <!-- 追加: is-offset-2 -->
                <div class="column is-narrow pt-0">
                  <div class="columns is-mobile is-vcentered">
                    <div class="column is-narrow pr-0 is-flex">
                      <font-awesome-icon
                        class="icon is-small mr-2"
                        :icon="['far', 'calendar']"
                      />
                    </div>
                    <time class="column pl-0 is-narrow" :datetime="post.date"
                      ><span>{{ post.date }}</span></time
                    >
                  </div>
                </div>
                <div class="column pt-0">
                  <div class="columns is-mobile is-vcentered">
                    <div class="column is-narrow pr-0 is-flex">
                      <font-awesome-icon
                        class="icon is-small mr-2"
                        :icon="['fas', 'tag']"
                      />
                    </div>
                    <ul class="tags column pl-0">
                      <li
                        v-for="el in post.searchtags"
                        class="tag is-light"
                        :key="el.name"
                      >
                        <!-- <a class="has-text-dark" :href="`/tags/${el.name}/`"
                          >{{el.name}}</a
                        > -->
                        <span class="has-text-dark">{{ el.name }}</span>
                      </li>
                      <!-- <li class="tag is-light">
                        <a class="has-text-dark" href="/tags/Development/"
                          >Development</a
                        >
                      </li>
                      <li class="tag is-light">
                        <a class="has-text-dark" href="/tags/Nuxt/">Nuxt</a>
                      </li>
                      <li class="tag is-light">
                        <a class="has-text-dark" href="/tags/Bulma/">Bulma</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </div>
              <!-- 本文 -->
              <!-- <div class="columns"> -->
              <!-- <div class="column is-8 is-offset-2"> -->
              <!-- is-medium -->
              <div class="my-2 px-2 py-2 content">
                <datocms-structured-text
                  :data="post.content"
                  :renderBlock="renderBlock"
                />
              </div>
              <!-- </div> -->
              <!-- </div> -->
              <!-- This is columns This is columnsThis is columnsThis is columnsThis
              is columnsThis is columnsThis is columnsThis is columnsThis is
              columnsThis is columnsThis is columnsThis is columnsThis is
              columnsThis is columnsThis is columnsThis is columnsThis is
              columnsThis is columnsThis is columns -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 前の書き方 -->
    <section v-if="0" class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <!-- is-128x128 -->
              <figure class="image">
                <datocms-image :data="post.coverImage.responsiveImage" />
              </figure>
            </div>
            <!-- <datocms-image :data="post.coverImage.responsiveImage" /> -->
          </div>

          <!-- テストセクション -->
          <!-- <section class="section">
            <div class="columns">
              <div class="card-content">
                This is Card
              </div>
            </div>
          </section> -->
          <!-- 追加 card mx-0 my-0 py-0 -->
          <section class="section card mx-0 my-0 py-0">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <!-- 移植 -->
                <div
                  class="columns mt-0 mb-0 is-vcentered"
                  style="line-height:1px"
                >
                  <!-- タイトルをここへ持ってきた -->
                  <div class="column is-narrow my-4 py-0">
                    <h3 class="title is-size-4 mt-0 py-0">
                      <nuxt-link
                        :to="`/posts/${post.slug}`"
                        class="has-text-dark"
                        >{{ post.title }}</nuxt-link
                      >
                    </h3>
                  </div>

                  <div class="column is-narrow pt-0">
                    <div class="columns is-mobile is-vcentered">
                      <div class="column is-narrow pr-0 is-flex">
                        <!-- カレンダー(regular) -->
                        <font-awesome-icon
                          class="icon is-small mr-3"
                          :icon="['far', 'calendar']"
                        />
                        <!-- オリジナル -->
                        <span v-if="0" class="icon is-small mr-3"
                          ><svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="clock"
                            class="svg-inline--fa fa-clock fa-w-16 "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                            ></path></svg
                        ></span>
                      </div>
                      <time class="column pl-0 is-narrow" :datetime="post.date"
                        ><span>{{ post.date }}</span></time
                      >
                    </div>
                  </div>
                  <div class="column pt-0">
                    <div class="columns is-mobile is-vcentered">
                      <div class="column is-narrow pr-0 is-flex">
                        <span class="icon is-small mr-2"
                          ><svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="tag"
                            class="svg-inline--fa fa-tag fa-w-16 "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
                            ></path></svg
                        ></span>
                      </div>
                      <ul class="tags column pl-0">
                        <!-- <li class="tag is-light">
                          <a class="has-text-dark" href="/tags/Development/"
                            >Development</a
                          >
                        </li>
                        <li class="tag is-light">
                          <a class="has-text-dark" href="/tags/Gatsby.js/"
                            >Gatsby.js</a
                          >
                        </li>
                        <li class="tag is-light">
                          <a class="has-text-dark" href="/tags/Bulma/">Bulma</a>
                        </li> -->
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- ここまで -->
                <!-- 追加 px-2 py-2 (cardは上位に付けた) -->
                <div class="px-2 py-2 content is-medium">
                  <!-- xxxx年 xx月 xx日表記 -->
                  <h2 v-if="0" class="is-size-6">
                    {{ formatDateJP(post.date).yyyymmdd }}
                    <span class="is-size-6">
                      {{ formatDateJP(post.date).yobi }}
                    </span>
                    <!-- {{ formatDate(post.publicationDate) }} -->
                  </h2>
                  <!-- h1 -> h2へ -->
                  <!-- has-text-dark 追加 -->
                  <!-- タイトル位置をもっと外へ移動 -->
                  <!-- <h3 class="title mt-2 mb-4">
                    <nuxt-link
                      :to="`/posts/${post.slug}`"
                      class="has-text-dark"
                      >{{ post.title }}</nuxt-link
                    >
                  </h3> -->
                  <datocms-structured-text
                    :data="post.content"
                    :renderBlock="renderBlock"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { request, gql, imageFields, seoMetaTagsFields } from '~/lib/datocms'
import { toHead } from 'vue-datocms'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
// 追加
import ja from 'date-fns/locale/ja'

export default {
  async asyncData({ params }) {
    // date追加
    // metadateのtags追加
    if (params && params.id) {
      const data = await request({
        query: gql`
          query BlogPostQuery($slug: String!) {
            site: _site {
              favicon: faviconMetaTags {
                ...seoMetaTagsFields
              }
            }

            post(filter: { slug: { eq: $slug } }) {
              seo: _seoMetaTags {
                ...seoMetaTagsFields
              }
              id
              title
              slug
              date
              singlelink {
                name
              }
              tags {
                name
              }
              category {
                name
              }
              searchtags {
                name
              }
              publicationDate: _firstPublishedAt
              content {
                value
                blocks {
                  __typename
                  ... on ImageBlockRecord {
                    id
                    image {
                      responsiveImage(
                        imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }
                      ) {
                        ...imageFields
                      }
                    }
                  }
                }
              }
              coverImage {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "16:9", w: 860 }
                ) {
                  ...imageFields
                }
              }
              author {
                name
                picture {
                  responsiveImage(
                    imgixParams: { fit: crop, ar: "1:1", w: 40 }
                  ) {
                    ...imageFields
                  }
                }
              }
            }
          }

          ${imageFields}
          ${seoMetaTagsFields}
        `,
        variables: {
          slug: params.id
        }
      })

      return { ready: !!data, ...data }
    } else {
      // 独自処理追加
      // postsのidが指定されない、または不正な値の場合は
      // throwして404とするか、空にするか
      // throw({ statusCode: 404, message: 'Post not found' })
      return { post: undefined }
    }
  },
  data() {
    return {}
  },
  methods: {
    info() {
      // console.log('tags:', this.post.tags)
      console.log('this.post.singlelink: ', this.post.singlelink)
      console.log('this.post.tags: ', this.post.tags)
      console.log('this.post.category: ', this.post.category)
      console.log('this.post.searchtags: ', this.post.searchtags)
    },
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    },
    // 独自追加
    formatDateJP(date) {
      let yobi = format(new Date(date), '（E曜日）', { locale: ja })
      console.log('yobi: ', yobi)
      let result = format(new Date(date), 'yyyy年MM月dd日', { locale: ja })
      let rep = result.replace('年0', '年 ')
      return { yyyymmdd: rep, yobi }
    },
    renderBlock: ({ record, h }) => {
      if (record.__typename === 'ImageBlockRecord') {
        return h('div', { class: 'mb-5' }, [
          h('datocms-image', { props: { data: record.image.responsiveImage } })
        ])
      }

      return h('div', {}, [
        h('p', {}, "Don't know how to render a block!"),
        h('pre', {}, JSON.stringify(record, null, 2))
      ])
    }
  },
  head() {
    if (!this.ready) {
      return
    }

    return toHead(this.post.seo, this.site.favicon)
  }
}
</script>

<style>
.dummy-class {
  font-size: 1rem;
}
/* .content.is-medium {
    font-size: 1.1rem;
} */
/* datoCMSのスタイル上書き */
mark {
  background-color: #bbb;
  padding: 2px 4px;
}
</style>
