<template>
    <div>
        <Toolbar/>
        <NavigationDrawer/>
        <Post :id="id"></Post>
        <Footer/>
    </div>
</template>

<script>
    import Toolbar from '@/components/Toolbar';
    import Post from '@/components/Post';
    import Footer from '@/components/Footer';
    import NavigationDrawer from '@/components/NavigationDrawer';

    export default {
        props: ['id'],
        components: {
            NavigationDrawer,
            Toolbar,
            Post,
            Footer
        }
    }
</script>