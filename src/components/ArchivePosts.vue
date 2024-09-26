<script setup lang="ts">
import { ref } from 'vue';
import type { CollectionEntry } from 'astro:content';
import moment from 'moment';
import lodash from 'lodash';

type Post = CollectionEntry<'post'>;

const props = defineProps<{
  groupedPostsByYear: [string, Post[]][];
}>();

const postGroups = ref<[string, Post[]][]>(lodash.cloneDeep(props.groupedPostsByYear).reverse());
const currentSortStatus = ref('desc');

const reversePostGroups = () => {
  currentSortStatus.value = currentSortStatus.value === 'desc' ? 'asc' : 'desc';
  postGroups.value.reverse();
};
</script>

<template>
  <h1 class="mb-6 text-center font-semibold tracking-wider text-text-light">
    所有文章
  </h1>
  <div class="mb-3 flex items-center justify-end">
    <button
      type="button"
      class="btn border-deco-light text-text-light hover:bg-deco-light"
      @click="reversePostGroups"
    >
      <span
        v-if="currentSortStatus === 'desc'"
        class="icon-[octicon--sort-desc-16]"
      />
      <span
        v-else
        class="icon-[octicon--sort-asc-16]"
      />
      {{ currentSortStatus === 'desc' ? '最新' : '最舊' }}
    </button>
  </div>

  <ol class="flex flex-col gap-10">
    <li
      v-for="[year, posts] in postGroups"
      :key="year"
    >
      <h2 class="mb-2 text-[28px] font-bold tracking-wider text-primary">
        {{ year }}
      </h2>
      <ol class="pl-1">
        <li
          v-for="post in posts"
          :key="post.id"
          class="flex items-center border-l-2 border-deco-light"
        >
          <a
            :href="`/post/${post.slug}`"
            class="-ml-[3px] flex flex-grow items-center gap-4 border-l-4 border-transparent py-2 pl-7 hover:border-l-4 hover:border-primary hover:text-deco-dark"
          >
            <time
              :datetime="post.data.createdDate.toISOString()"
              class="text-nowrap font-mono"
            >
              {{ moment(post.data.createdDate).format('MM-DD') }}
            </time>
            <h3>{{ post.data.title }}</h3>
          </a>
          <a
            :href="`/category/${post.data.category}`"
            class="text-nowrap text-[12px] text-deco-dark hover:text-primary"
          >
            {{ post.data.category }}
          </a>
        </li>
      </ol>
    </li>
  </ol>
</template>
