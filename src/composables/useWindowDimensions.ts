/**
 * @Description
 * @Author youus
 * @Date 2022/7/27 20:56
 * @Version v1.0.0
 *
 * Hello, humor
 */

import { ref, onBeforeUnmount } from "vue"

export default function useWindowDimensions() {
  const width = ref<number>(window.innerWidth);
  const height = ref<number>(window.innerHeight);
  
  const listener = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }
  
  window.addEventListener("resize", listener, false)
  onBeforeUnmount(() => {
    window.removeEventListener("resize", listener, false)
  })
  return { width , height }
}
