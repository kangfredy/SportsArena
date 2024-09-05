<script>

    import { Link } from "svelte-routing"

</script>
<div class="w-screen h-screen bg-primary ">
    <div class="flex flex-col gap-2  justify-center items-center w-full h-full z-0">
        <h1 class="text-white font-poppins">Welcome..</h1>
        <h2 class="text-white font-poppins">to Sports Arena</h2>
        <div class="flex mb-10 w-[35%] h-[10%] justify-start px-10 pb-5 absolute bottom-0 items-end gap-10 rounded-lg bg-white opacity-50 drop-shadow-lg">
            <div><Link to="/" class="text-boldGray">Home</Link></div>
            <div><Link to="/about" class="text-boldGray">About</Link></div>
            <div><Link to="/contact" class="text-boldGray">Contact</Link></div>
            <div><Link to="/Relations" class="text-boldGray">Relations</Link></div>
            <div><Link to="/Relations" class="text-boldGray">Events</Link></div>
            <div><Link to="/Relations" class="text-boldGray">Stream</Link></div>
        </div>
    </div>

    
    
</div>