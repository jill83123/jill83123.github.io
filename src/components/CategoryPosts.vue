<script setup lang="ts">
import { ref, computed } from 'vue';
import lodash from 'lodash';
import type { CollectionEntry } from 'astro:content';
import PostList from '@/components/PostList.vue';

type Post = CollectionEntry<'post'>;

const props = defineProps<{
  currentPosts: Post[];
}>();

const posts = ref<Post[]>(lodash.cloneDeep(props.currentPosts));

const tags: string[] = Array.from(
  posts.value.reduce((tags, post) => {
    post.data.tags.forEach((tag: string) => tags.add(tag));
    return tags;
  }, new Set<string>())
);

const currentTag = ref('全部');

const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    if (currentTag.value === '全部') {
      return post;
    }
    return post.data.tags.some((tag: string) => tag === currentTag.value);
  });
});
</script>

<template>
  <ul class="mb-10 flex flex-wrap items-center gap-2 text-[12px]">
    <li>
      <button
        type="button"
        class="tag"
        :class="currentTag === '全部' ? 'active' : ''"
        @click="currentTag = '全部'"
      >
        全部
      </button>
    </li>
    <li
      v-for="tag in tags"
      :key="tag"
    >
      <button
        type="button"
        class="tag"
        :class="currentTag === tag ? 'active' : ''"
        @click="currentTag = tag"
      >
        # {{ tag }}
      </button>
    </li>
  </ul>

  <PostList :posts="filteredPosts" />
</template>
