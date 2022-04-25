<template>
    <div class="PaymentList">
        <div class="PaymentItem" v-for="(item, idx) in items" :key="idx">
            {{ item }}
        </div>
    </div>
</template>
<script>
export default {
    name: "PaymentsDisplay",
    props:{
        items:{
            type: Array,
            default: ()=>[]
        }
    }
}
</script>