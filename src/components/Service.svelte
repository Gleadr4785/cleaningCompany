<script>
    export let label;
    export let title;
    export let bgColor;
</script>

<div class="space-y-4">
    <div class="p-6 rounded-3xl {bgColor} bg-opacity-25 inline-block">
        <slot />
    </div>
    <h3 class="text-2xl font-black text-darkBlue">{title}</h3>
    <p class="text-xl text-text">{label}</p>
</div>
