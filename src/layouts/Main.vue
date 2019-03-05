<template>
    <div>
        <Toolbar/>
        <PostsList/>
        <Footer/>
    </div>
</template>

<script>
    import Toolbar from '@/components/Toolbar'
    import PostsList from '@/components/PostsList'
    import Footer from '@/components/Footer'

    export default {
        components: {
            Toolbar,
            PostsList,
            Footer
        }
    }
</script>
