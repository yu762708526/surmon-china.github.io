<script lang="ts" setup>
  import { PROJECTS, getLegacyURL } from '@/config'
  import { useMeta } from '@/composables/meta'
  import { getExampleComponent } from '@/transforms/example'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExamples from '@/components/homepage/examples.vue'
  import exampleComponents from '@examples/vue-awesome-swiper'

  const { repository, packages } = PROJECTS.VueAwesomeSwiper
  const examples = exampleComponents.map(getExampleComponent)

  useMeta({
    title: getMetaTitle(repository),
    keywords: [getMetaKeywords(repository), `How to use Swiper on vue3?`].join(','),
    description: getMetaDescription(repository)
  })
</script>

<template>
  <vue-renderer :repository="repository">
    <homepage :repository="repository" :packages="packages">
      <template #actions>
        <homepage-link icon="doc" text="Vue(2) Examples" :href="getLegacyURL(repository)" />
        <homepage-link
          icon="doc"
          text="Swiper API Documentation"
          href="https://swiperjs.com/swiper-api"
        />
        <homepage-link
          icon="doc"
          text="Swiper Vue(3) Component"
          href="https://swiperjs.com/vue"
        />
        <homepage-link
          icon="discussions"
          text="Swiper Discussions"
          href="https://github.com/nolimits4web/swiper/discussions"
        />
      </template>
      <template #content>
        <homepage-examples :examples="examples">
          <template #component="payload">
            <div class="swiper-example">
              <component :is="payload.component" />
            </div>
          </template>
        </homepage-examples>
      </template>
    </homepage>
  </vue-renderer>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .swiper-example {
    width: 100%;
    background-color: $header-bg;
  }
</style>
