<script lang="ts">
    import { Card } from "../types";

    export let card: Card;
</script>

<article class="card-container">
    <div class="card-image-container">
        <img class="card-image" src={card.path} alt="logo" />
    </div>
    <span class="card-title">{card.title}</span>
</article>

<style lang="scss">
    .card-container {
        aspect-ratio: 0.618;
        padding: 20px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        border-radius: 30px;
        background-color: #2d2d2d;
        box-shadow: black 5px 5px 20px 0px;

        transition: 200ms;

        margin: 30px 10px 0 10px;

        &:hover {
            margin-top: 0;
            margin-bottom: 30px;
            transform: rotate(3deg);
        }

        .card-image-container {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 100%;

            .card-image {
                width: 100%;
                filter: drop-shadow(0 0 5px black);
            }
        }
    }
</style>
