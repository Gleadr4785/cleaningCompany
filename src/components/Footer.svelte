<script>
    export let mail;
    export let telNumber;
    export let address;
</script>

<h2 class="text-4xl text-darkBlue font-black mb-6 text-center md:text-left">
    Contact
</h2>
<div class="md:grid md:gap-4 grid-flow-row mb-4 ">
    <div
        class="row-span-2  p-8 bg-orange rounded-3xl shadow-orange text-xl md:text-2xl text-white space-y-6">
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:w-10 w-8 inline-block"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FFFFFF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg><span class="md:ml-4 ml-2">{telNumber}</span>
        </div>
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:w-10 w-8 inline-block"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FFFFFF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
            </svg><span class="ml-3">{mail}</span>
        </div>
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:w-10 w-8 inline-block"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FFFFFF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="11" r="3" />
                <path
                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg><span class="md:ml-4 ml-2">{address}</span>
        </div>
    </div>
    <div
        class="row-span-2 p-4 bg-darkBlue rounded-3xl shadow-darkBlue md:space-y-6 space-x-6 md:space-x-0 md:mr-auto
         inline-block md:block my-6 md:my-0">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 inline-block md:block"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFFFFF"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 inline-block md:block"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFFFFF"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFFFFF"
            fill="none"
            class="w-12 inline-block md:block"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
    </div>
    <div
        class=" col-span-8 p-8 bg-yellow rounded-3xl shadow-yellow mt-auto hidden md:block">
        <ul
            class="hidden md:grid grid-flow-col lg:gap-x-12 gap-x-6 text-center auto-cols-auto text-white text-xl">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Prices</li>
            <li>Booking</li>
            <li>Contact</li>
        </ul>
    </div>
</div>
<p class="text-lightBlue text-center">
    &copy; 2020 cleaning sro. All right reserved.
</p>
<p class="text-lightBlue text-center">Developed by Jan Kseňak</p>
