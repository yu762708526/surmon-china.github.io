<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { useMeta } from '@/composables/meta'
  import { getExampleComponent } from '@/transforms/example'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageExamples from '@/components/homepage/examples.vue'
  import exampleComponent from '@examples/naivebayes/index.vue'
  import exampleComponentString from '@examples/naivebayes/index.vue?raw'

  const { repository, packages } = PROJECTS.NaiveBayes
  const example = getExampleComponent({
    component: exampleComponent,
    raw: exampleComponentString,
    language: 'vue'
  })

  useMeta({
    title: getMetaTitle(repository),
    keywords: getMetaKeywords(repository).join(','),
    description: getMetaDescription(repository)
  })
</script>

<template>
  <vue-renderer :repository="repository">
    <homepage :repository="repository" :packages="packages">
      <template #content>
        <homepage-examples :examples="[example]" :disabled-auto-ad="true">
          <template #component="payload">
            <div class="naivebayes-example">
              <component :is="payload.component" />
            </div>
          </template>
        </homepage-examples>
      </template>
    </homepage>
  </vue-renderer>
</template>
