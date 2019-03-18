<template>
    <div>
        <Toolbar/>
        <NavigationDrawer/>
        <PostsList/>
        <Footer/>
    </div>
</template>

<script>
    import Toolbar from '@/components/Toolbar';
    import PostsList from '@/components/PostsList';
    import Footer from '@/components/Footer';
    import NavigationDrawer from '@/components/NavigationDrawer';

    export default {
        components: {
            NavigationDrawer,
            Toolbar,
            PostsList,
            Footer
        }
    }
</script>
