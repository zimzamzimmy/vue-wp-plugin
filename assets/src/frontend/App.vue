<template>
    <div id="vue-frontend-app">

        <router-link to="/">Home</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/lube-tools">Lube Tools</router-link>

        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

</style>
