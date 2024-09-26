<script setup lang="ts">
import moment from 'moment';
import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'post'>;

const props = defineProps<{
  posts: Post[];
}>();
</script>

<template>
  <p class="pl-1 text-[14px] text-deco-dark">
    共 {{ props.posts.length }} 篇文章
  </p>

  <ul class="flex flex-col pl-1">
    <li
      v-for="post in props.posts"
      :key="post.id"
      class="card relative border-b border-deco-light py-8 transition-colors hover:text-deco-dark"
    >
      <h2 class="mb-1 text-[26px] font-semibold">
        {{ post.data.title }}
      </h2>

      <div class="mb-5 flex items-center gap-1 text-[14px] text-deco-dark">
        <span class="icon-[mingcute--time-line]" />
        <time
          :datetime="post.data.createdDate.toISOString()"
          class="font-mono"
        >
          {{ moment(post.data.createdDate.toISOString()).format('YYYY-MM-DD') }}
        </time>
      </div>

      <p class="mb-5 line-clamp-2">
        {{ post.data.description }}
      </p>

      <ul class="flex flex-wrap gap-x-2 gap-y-1 text-[12px] text-deco-dark">
        <li
          v-for="tag in post.data.tags"
          :key="tag"
        >
          <a
            :href="`/tag/${tag}`"
            class="relative z-10 hover:text-primary"
          ># {{ tag }}</a>
        </li>
      </ul>

      <a
        :href="`/post/${post.slug}`"
        class="absolute inset-0"
      />
    </li>
  </ul>
</template>

<style>
.card:hover {
  h2 {
    color: var(--color-primary);
    transition: color 0.15s ease;
  }
}
</style>
