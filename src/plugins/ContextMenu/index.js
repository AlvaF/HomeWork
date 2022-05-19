export default{
    install(Vue){
        if(this.installed){
            return
        }
        this.installed = true
        Vue.prototype.$ContextMenu ={
            EventBus: new Vue(),
            show(items){
                this.EventBus.$emit('show', items)
            },

            hide(){
                this.EventBus.$emit('hide')
            }
        }
    }
}