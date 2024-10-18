<template>
  <div class="bg-primary rounded-full"></div>
</template>

<script lang="ts" setup>
const mouseX = useState<number>("mouseX", () => 0);
const mouseY = useState<number>("mouseY", () => 0);
const mouseHover = useState<boolean>("mouseHover", () => false);
</script>
