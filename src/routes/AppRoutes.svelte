<script lang="ts">
    import {Router, Route} from 'svelte-routing'
    import Home from '../page/Home.svelte'
    import About from '../page/About.svelte'
    export let url: string
</script>

<Router url={url}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
</Router>
