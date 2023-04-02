<style scoped></style>

<template>
  <div class="component-child">
    Child counter : {{ num }} <br />
    <button name="child" v-on:click="addCounter">+</button>
    <button name="child" v-on:click="subCounter">-</button>
  </div>
</template>

<script>
export default {
  /* pdtmc^2w */
  props: ['num'],
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    addCounter(e) {
      debugger;
      console.log(e.target);

      // 부모에게 addCounter 이벤트를 발생시킨다.
      // +1 인자로 넘기시오
      debugger;
      this.$emit('addCounter', +1);
    },
    subCounter(e) {
      debugger;
      console.log(e.target);

      // 부모에게 subCounter 이벤트를 발생시킨다.
      // -1 인자로 넘기시오
      debugger;
      this.$emit('subCounter', -1);
    },
  },
};
</script>
