<script>
    import Button from "./Button.svelte";

    export let title;
    export let text;
    export let titleText;
</script>

<h2 class="text-4xl text-darkBlue font-black mb-8">{title}</h2>
<div class="md:grid md:grid-cols-2 lg:gap-x-32 md:gap-x-8">
    <div clas="object-center">
        <img
            src="build/assets/about.png"
            alt=""
            class="mb-8 sm:object-none object-center" />
    </div>
    <div class="md:py-4">
        <h2
            class="text-3xl md:text-4xl text-darkBlue font-black leading-none mb-8">
            {titleText}
        </h2>
        <p class="text-xl text-text mb-10">{text}</p>
        <Button color="bg-orange" label="Explore more" shadow="shadow-orange" />
    </div>
</div>
