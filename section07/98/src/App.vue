<template>
    <div class="container">
        <header-status></header-status>
        <div class="row">            
            <servers></servers>
            <server-detail></server-detail>
        </div>
        <footer-status></footer-status>
    </div>
</template>

<script>
    import HeaderStatus from './HeaderStatus.vue';
    import FooterStatus from './FooterStatus.vue';
    import Servers from './Servers.vue';
    import ServerDetail from './ServerDetail.vue';
    export default {
        components: {
            'header-status' : HeaderStatus,
            'footer-status' : FooterStatus,
            'servers' : Servers,
            'server-detail' : ServerDetail
        }
    }
</script>

<style>

</style>
