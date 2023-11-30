<template>
    <div class="navbar">
        <button style="float:right" @click="openSiderBar">三</button>
    </div>
</template>
<script>
export default {
    methods: {
        // open siderBar
        openSiderBar() {
            this.$store.commit('SIDEBAR_ACTIVE', true)
        }
    }
}
</script>
<style>
.navbar {
    background-color: white;
    padding: 0.2rem;
    height: 30px;
}
</style>