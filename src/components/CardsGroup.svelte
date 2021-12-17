<script lang="ts">
    import Card from "./Card.svelte";

    export let cards: any[];
</script>

<section class="cards-group-container">
    {#each cards as card}
        <Card {card} />
    {/each}
</section>

<style lang="scss">
    .cards-group-container {
        display: grid;
        grid-template-columns: repeat(5, 20%);
        grid-row-gap: 10px;
        justify-content: center;
    }
</style>
