<script lang="ts">
    let isOpen: boolean = false;
</script>

{#if isOpen}
    <div class="sidebar">
        <h1>Sidebar</h1>
    </div>
{/if}

<button class="bg-blue-500 text-white p-2 rounded-md h-10 w-10" on:click={() => (isOpen = !isOpen)}>
    <span class="material-icons">
        {isOpen ? "close" : "menu"}
    </span>
</button>