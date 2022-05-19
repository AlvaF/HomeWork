<template>
  <div class="context" v-if="show">
    <div
      v-for="item in items"
      :key="item.text"
      class="item"
      @click="onClick(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            show: false,
            items: [],
        }
    },
    methods: {
        onClick(item){
            item.action()
        },
        onShow(items){
            this.items = items
            this.show = true
        },
        onHide(){
            this.show = false
            this.items = []
        }
    },
    mounted(){
        this.$contextMenu.EventBus.$on('show', this.onShow)
        this.$contextMenu.EventBus.$on('hide', this.onHide)
    },
    beforeDestroy(){
        this.$contextMenu.EventBus.$off('show', this.onShow)
        this.$contextMenu.EventBus.$$off('hide', this.onHide)
    }
};
</script>
<style scoped>
.context {
  position: absolute;
  background: rgb(209, 207, 207);
  cursor: pointer;
}
</style>