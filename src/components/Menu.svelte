<script>
    let menuActive = "false";
    import * as animateScroll from "svelte-scrollto";
</script>

<nav class="fixed z-50">
    <div class="flex flex- space-x-4">
        <div
            class="md:hidden auto-cols-min"
            on:click={() => (menuActive = !menuActive)}>
            {#if !menuActive}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bg-white p-5 rounded-3xl shadow-darkBlue w-20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#023047"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            {:else}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bg-white p-5 rounded-3xl shadow-darkBlue w-20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#023047"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            {/if}
        </div>
        <div
            class="bg-white p-8 text-xl shadow-darkBlue rounded-3xl text-darkBlue md:hidden"
            class:hidden={menuActive}>
            <ul class="space-y-3">
                <li
                    class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
                    <a href="/">Home</a>
                </li>
                <li
                    class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
                    <a
                        href=" "
                        on:click={() => animateScroll.scrollTo({
                                element: '#aboutUs',
                            })}>About Us</a>
                </li>
                <li
                    class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
                    <a href="/services">Services</a>
                </li>
                <li
                    class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
                    <a href="/prices">Prices</a>
                </li>
                <li
                    class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
                    <a href="/booking">Booking</a>
                </li>
                <li
                    class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
                    <a
                        href=" "
                        on:click={() => animateScroll.scrollTo({
                                element: '#contact',
                            })}>Contact</a>
                </li>
            </ul>
        </div>
    </div>

    <ul
        class="hidden md:grid grid-flow-col lg:gap-x-12 gap-x-6 text-center shadow-darkBlue bg-white px-16 py-6 rounded-3xl text-darkBlue text-xl">
        <li
            class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
            <a href="/">Home</a>
        </li>
        <li
            class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
            <a
                href=" "
                on:click={() => animateScroll.scrollTo({
                        element: '#aboutUs',
                    })}>About Us</a>
        </li>
        <li
            class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
            <a href="/services">Services</a>
        </li>
        <li
            class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
            <a href="/prices">Prices</a>
        </li>
        <li
            class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
            <a href="/booking">Booking</a>
        </li>
        <li
            class="hover:bg-orange hover:text-orange hover:bg-opacity-25 p-2 rounded-xl">
            <a
                href=" "
                on:click={() => animateScroll.scrollTo({
                        element: '#contact',
                    })}>Contact</a>
        </li>
    </ul>
</nav>
