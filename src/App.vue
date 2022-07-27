<template>
  <FiveProvider :work="workMock">
    <FiveCanvas :width="width" :height="height" />
    <ModeController />
  </FiveProvider>
</template>

<script setup>

import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
import { parseWork } from "@realsee/five";
import { ref } from "vue";
import useWindowDimensions from "./composables/useWindowDimensions";
import ModeController from "./components/ModeController.vue";
import { workMock } from "./mock/workMock";

const work = ref();
// const workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";

work.value = parseWork(workMock)
const { width, height } = useWindowDimensions();
</script>
