<script>
    import Button from "./Button.svelte";
    import Select from "svelte-select";

    let items = ["stadart", "premium", "whatever"];

    let reservation = {
        type: "standart",
        bedrooms: 0,
        bathrooms: 0,
    };
</script>

<div class="md:grid md:grid-cols-2 gap-x-6 space-y-6 md:space-y-0">
    <div
        class="bg-darkBlue py-10 px-8 md:px-12 lg:px-16 rounded-3xl shadow-darkBlue">
        <div class="text-center md:text-left text-white">
            <h2 class="text-4xl font-medium">Book online</h2>
            <p class="text-xl">
                Save your time and Money with online booking and flat your rate
                pricing!
            </p>
        </div>
        <div class="mt-8 space-y-6">
            <div class="flex">
                <div class="mr-11">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80.001"
                        height="80"
                        viewBox="0 0 80.001 80">
                        <g
                            id="Group_183"
                            data-name="Group 183"
                            transform="translate(0 0)">
                            <path
                                id="Path_37"
                                data-name="Path 37"
                                d="M111.986,53.433V52a14.367,14.367,0,1,0-28.729,0v5.333H78.035a1.32,1.32,0,0,0-1.306,1.333V64a1.32,1.32,0,0,0,1.306,1.333h.131l1.237,12H74.117V20a3.918,3.918,0,1,0-7.835,0V77.333H53.223A2.643,2.643,0,0,0,50.612,80v3.836L48.039,94.343a1.355,1.355,0,0,0,.238,1.144A1.3,1.3,0,0,0,49.306,96h61.375a1.32,1.32,0,0,0,1.306-1.333V89.4l1.843-17.879a4.1,4.1,0,0,0,2.074-3.6V58.333a4.984,4.984,0,0,0-3.918-4.9ZM85.87,52a11.755,11.755,0,1,1,23.505,0v1.333H97.3a4.931,4.931,0,0,0-4.8,4H85.87ZM79.34,60H92.4v2.667H79.34Zm1.45,5.333H92.4v2.593a4.175,4.175,0,0,0,1.2,2.923A3.812,3.812,0,0,0,96.376,72a3.89,3.89,0,0,0,2.552-1.021,3.851,3.851,0,0,0,5.223,0,3.851,3.851,0,0,0,5.222,0,3.849,3.849,0,0,0,1.79.929L109.505,88h-18.7l-1.02-4.164V80a2.643,2.643,0,0,0-2.612-2.667H82.027ZM68.894,20a1.306,1.306,0,1,1,2.612,0V77.333H68.894ZM53.223,80H87.175v2.667H53.223ZM56.2,93.333l1.959-8h2.531l-1.959,8Zm-3.265-8h2.531l-1.959,8H50.978Zm10.447,0h2.725l-.979,8h-3.7Zm4.377,8,.979-8h2.918l.979,8Zm7.509,0-.979-8h2.725l1.959,8Zm6.4,0-1.959-8h2.531l1.959,8Zm5.223,0-1.959-8h2.531l1.959,8Zm22.486,0H92.112l-.653-2.667h17.915ZM113.292,64v3.925a1.377,1.377,0,0,1-1.241,1.407,1.291,1.291,0,0,1-.965-.366,1.347,1.347,0,0,1-.406-.966V62.667h-2.612V68a1.306,1.306,0,1,1-2.612,0V62.667h-2.612V68a1.306,1.306,0,1,1-2.612,0V62.667H97.622V68a1.319,1.319,0,0,1-1.285,1.333h-.018a1.244,1.244,0,0,1-.883-.383,1.463,1.463,0,0,1-.424-1.023V58.333A2.312,2.312,0,0,1,97.3,56h13.711a2.312,2.312,0,0,1,2.285,2.333Z"
                                transform="translate(-41.952 -16)"
                                fill="#8ecae6" />
                            <path
                                id="Path_38"
                                data-name="Path 38"
                                d="M70.124,214.087a1.512,1.512,0,0,0,2.869,0A8.089,8.089,0,0,1,78.085,209a1.512,1.512,0,0,0,0-2.869,8.089,8.089,0,0,1-5.092-5.092,1.512,1.512,0,0,0-2.869,0,8.089,8.089,0,0,1-5.092,5.092,1.512,1.512,0,0,0,0,2.869A8.089,8.089,0,0,1,70.124,214.087Zm1.434-9.254a11.19,11.19,0,0,0,2.728,2.728,11.191,11.191,0,0,0-2.728,2.728,11.19,11.19,0,0,0-2.728-2.728A11.19,11.19,0,0,0,71.559,204.833Z"
                                transform="translate(-54.926 -170.156)"
                                fill="#fff" />
                            <path
                                id="Path_39"
                                data-name="Path 39"
                                d="M430.085,110.127a8.089,8.089,0,0,1-5.092-5.092,1.512,1.512,0,0,0-2.869,0,8.089,8.089,0,0,1-5.092,5.092,1.512,1.512,0,0,0,0,2.869,8.089,8.089,0,0,1,5.092,5.092,1.512,1.512,0,0,0,2.869,0A8.089,8.089,0,0,1,430.085,113a1.512,1.512,0,0,0,0-2.869Zm-6.526,4.162a11.189,11.189,0,0,0-2.728-2.728,11.189,11.189,0,0,0,2.728-2.728,11.191,11.191,0,0,0,2.728,2.728A11.19,11.19,0,0,0,423.559,114.289Z"
                                transform="translate(-351.118 -89.728)"
                                fill="#fff" />
                            <path
                                id="Path_40"
                                data-name="Path 40"
                                d="M23.559,311.121a1.512,1.512,0,0,0,1.434-1.034A8.089,8.089,0,0,1,30.085,305a1.512,1.512,0,0,0,0-2.869,8.089,8.089,0,0,1-5.092-5.092,1.512,1.512,0,0,0-2.869,0,8.089,8.089,0,0,1-5.092,5.092,1.512,1.512,0,0,0,0,2.869,8.089,8.089,0,0,1,5.092,5.092A1.512,1.512,0,0,0,23.559,311.121Zm0-10.288a11.191,11.191,0,0,0,2.728,2.728,11.19,11.19,0,0,0-2.728,2.728,11.19,11.19,0,0,0-2.728-2.728,11.19,11.19,0,0,0,2.728-2.728Z"
                                transform="translate(-15.998 -250.585)"
                                fill="#fff" />
                        </g>
                    </svg>
                </div>
                <div class="w-full border-b-2 border-lightBlue space-y-2">
                    <p class="font-medium text-xl text-white">
                        Type of cleanig
                    </p>
                    <div class="text-xl text-yellow">
                        <Select
                            showIndicator={true}
                            isSearchable={false}
                            {items}
                            bind:selectedValue={reservation.type}
                            isClearable={false}
                            containerClasses={'bg-darkBlue'} />
                        <!--   
                        <span
                            class="text-orange text-black text-xl">Standart</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="rounded-full border-2 border-lightBlue w-8 inline-block justify-self-end cursor-pointer"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#FFFFFF"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M18 15l-6-6l-6 6h12"
                                transform="rotate(180 12 12)" />
                        </svg>
                    -->
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="mr-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="92.308"
                        height="80"
                        viewBox="0 0 92.308 80">
                        <g
                            id="Group_180"
                            data-name="Group 180"
                            transform="translate(0 0)">
                            <g id="Group_182" data-name="Group 182">
                                <g
                                    id="Group_21"
                                    data-name="Group 21"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_42"
                                        data-name="Path 42"
                                        d="M90.769,78.154H89.231V73.538a7.692,7.692,0,0,0-4.615-7.04V42.769a1.539,1.539,0,0,0-.923-1.409,6.09,6.09,0,0,0,.923-3.206,6.154,6.154,0,0,0-12.308,0,6.091,6.091,0,0,0,.855,3.077H19.145A6.091,6.091,0,0,0,20,38.154a6.154,6.154,0,0,0-12.308,0,6.09,6.09,0,0,0,.923,3.206,1.539,1.539,0,0,0-.923,1.409V66.5a7.692,7.692,0,0,0-4.615,7.04v4.615H1.538A1.539,1.539,0,0,0,0,79.692v21.538a1.539,1.539,0,0,0,1.538,1.538H3.077v7.692A1.539,1.539,0,0,0,4.615,112h6.154a1.539,1.539,0,0,0,1.538-1.538v-7.692H80v7.692A1.539,1.539,0,0,0,81.538,112h6.154a1.539,1.539,0,0,0,1.538-1.538v-7.692h1.538a1.539,1.539,0,0,0,1.538-1.538V79.692A1.539,1.539,0,0,0,90.769,78.154ZM78.462,35.077a3.077,3.077,0,1,1-3.077,3.077A3.077,3.077,0,0,1,78.462,35.077Zm-64.615,0a3.077,3.077,0,1,1-3.077,3.077A3.077,3.077,0,0,1,13.846,35.077Zm-3.077,9.231H81.538V65.846H75.345a7.612,7.612,0,0,0,1.578-4.615V58.154a7.7,7.7,0,0,0-7.692-7.692H56.923a7.7,7.7,0,0,0-7.692,7.692v3.077a7.612,7.612,0,0,0,1.578,4.615H41.5a7.612,7.612,0,0,0,1.578-4.615V58.154a7.7,7.7,0,0,0-7.692-7.692H23.077a7.7,7.7,0,0,0-7.692,7.692v3.077a7.612,7.612,0,0,0,1.578,4.615H10.769ZM73.846,58.154v3.077a4.615,4.615,0,0,1-4.615,4.615H56.923a4.615,4.615,0,0,1-4.615-4.615V58.154a4.615,4.615,0,0,1,4.615-4.615H69.231A4.615,4.615,0,0,1,73.846,58.154ZM40,58.154v3.077a4.615,4.615,0,0,1-4.615,4.615H23.077a4.615,4.615,0,0,1-4.615-4.615V58.154a4.615,4.615,0,0,1,4.615-4.615H35.385A4.615,4.615,0,0,1,40,58.154ZM6.154,73.538a4.615,4.615,0,0,1,4.615-4.615H81.538a4.615,4.615,0,0,1,4.615,4.615v4.615h-80Zm3.077,35.385H6.154v-6.154H9.231Zm76.923,0H83.077v-6.154h3.077Zm3.077-9.231H3.077V81.231H89.231Z"
                                        transform="translate(0 -32)"
                                        fill="#8ecae6" />
                                </g>
                                <g
                                    id="Group_24"
                                    data-name="Group 24"
                                    transform="translate(6.013 61.595)">
                                    <g id="Group_23" data-name="Group 23">
                                        <path
                                            id="Path_43"
                                            data-name="Path 43"
                                            d="M39.516,352H33.5a1.5,1.5,0,0,0,0,3.006h6.013a1.5,1.5,0,0,0,0-3.006Z"
                                            transform="translate(-32 -352)"
                                            fill="#fff" />
                                    </g>
                                </g>
                                <g
                                    id="Group_26"
                                    data-name="Group 26"
                                    transform="translate(20.157 61.595)">
                                    <g id="Group_25" data-name="Group 25">
                                        <path
                                            id="Path_44"
                                            data-name="Path 44"
                                            d="M160.635,352H97.5a1.5,1.5,0,0,0,0,3.006h63.132a1.5,1.5,0,0,0,0-3.006Z"
                                            transform="translate(-96 -352)"
                                            fill="#fff" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class=" w-full border-b-2 border-lightBlue space-y-2">
                    <p class="font-medium text-xl text-white">Bedrooms</p>
                    <div class="space-x-2">
                        <svg
                            on:click={() => reservation.bedrooms++}
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block w-8 cursor-pointer"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#8ECAE6"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="9" y1="12" x2="15" y2="12" />
                            <line x1="12" y1="9" x2="12" y2="15" />
                        </svg>
                        <span class="text-white">{reservation.bedrooms}</span>
                        <svg
                            on:click={() => {
                                if (reservation.bedrooms > 0) reservation.bedrooms--;
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block w-8 cursor-pointer"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#8ECAE6"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="9" y1="12" x2="15" y2="12" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="mr-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="103.975"
                        height="80"
                        viewBox="0 0 103.975 80">
                        <g
                            id="Group_184"
                            data-name="Group 184"
                            transform="translate(0 0)">
                            <g
                                id="Group_30"
                                data-name="Group 30"
                                transform="translate(61.332 63.517)">
                                <g
                                    id="Group_29"
                                    data-name="Group 29"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_46"
                                        data-name="Path 46"
                                        d="M301.872,369.223h-.095a1.715,1.715,0,0,0,0,3.43h.095a1.715,1.715,0,1,0,0-3.43Z"
                                        transform="translate(-300.062 -369.223)"
                                        fill="#8ecae6" />
                                </g>
                            </g>
                            <g
                                id="Group_32"
                                data-name="Group 32"
                                transform="translate(73.022 51.45)">
                                <g
                                    id="Group_31"
                                    data-name="Group 31"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_47"
                                        data-name="Path 47"
                                        d="M349.606,301.59a1.715,1.715,0,0,0-1.715,1.715,9.894,9.894,0,0,1-9.883,9.883h-4.794a1.715,1.715,0,1,0,0,3.43h4.794A13.328,13.328,0,0,0,351.321,303.3,1.715,1.715,0,0,0,349.606,301.59Z"
                                        transform="translate(-331.5 -301.59)"
                                        fill="#8ecae6" />
                                </g>
                            </g>
                            <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M99.507,85.354V66.949a7.929,7.929,0,0,0-7.92-7.92H77.2a7.96,7.96,0,0,0-7.951,7.951v1.8a2.031,2.031,0,0,0,2.031,2.031h15.84a.61.61,0,0,1,.609.609V85.025H6.507A6.506,6.506,0,0,0,4.468,97.71v17.612a19.079,19.079,0,0,0,16.5,18.88l-1.361,1.361a2.031,2.031,0,1,0,2.872,2.872l4.061-4.061H77.433l4.061,4.061a2.031,2.031,0,0,0,2.872-2.872L83.006,134.2a19.079,19.079,0,0,0,16.5-18.88V97.71a6.505,6.505,0,0,0,0-12.356ZM87.119,66.746h-13.8A3.894,3.894,0,0,1,77.2,63.09H91.587a3.863,3.863,0,0,1,3.858,3.858V85.023H91.79V71.417A4.676,4.676,0,0,0,87.119,66.746ZM15.028,89.087H49.957v26.557l-.286-.148a9.107,9.107,0,0,0-8.376,0l-.014.008a5,5,0,0,1-4.608-.007,9.034,9.034,0,0,0-8.331-.016l-.024.012a5.037,5.037,0,0,1-4.625,0l-.008,0a9.1,9.1,0,0,0-8.372,0l-.285.148ZM4.062,91.532a2.448,2.448,0,0,1,2.445-2.445h4.459v4.891H6.507A2.448,2.448,0,0,1,4.062,91.532Zm91.384,23.79a15.006,15.006,0,0,1-14.989,14.989H23.519A15.006,15.006,0,0,1,8.529,115.322V98.039h2.437V118.8a2.144,2.144,0,0,0,3.13,1.9l3.086-1.6a5.037,5.037,0,0,1,4.625,0l.009,0a9.1,9.1,0,0,0,8.365,0l.024-.012a4.973,4.973,0,0,1,4.587.007,9.063,9.063,0,0,0,8.362.01l.014-.007a5.038,5.038,0,0,1,4.632,0l3.087,1.6a2.143,2.143,0,0,0,3.131-1.9V98.039H95.445Zm2.023-21.344H54.018V89.087h43.45a2.445,2.445,0,1,1,0,4.891Z"
                                transform="translate(0 -59.029)"
                                fill="#8ecae6" />
                            <g
                                id="Group_34"
                                data-name="Group 34"
                                transform="translate(67.307 19.308)">
                                <g
                                    id="Group_33"
                                    data-name="Group 33"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_48"
                                        data-name="Path 48"
                                        d="M331.73,153.218a1.714,1.714,0,0,0-2.179,1.064l-.279.811a1.715,1.715,0,1,0,3.243,1.115l.279-.811A1.715,1.715,0,0,0,331.73,153.218Z"
                                        transform="translate(-329.178 -153.124)"
                                        fill="#fff" />
                                </g>
                            </g>
                            <g
                                id="Group_36"
                                data-name="Group 36"
                                transform="translate(69.634 12.516)">
                                <g
                                    id="Group_35"
                                    data-name="Group 35"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_49"
                                        data-name="Path 49"
                                        d="M343.11,120.12a1.715,1.715,0,0,0-2.179,1.064l-.279.811a1.715,1.715,0,1,0,3.243,1.115l.279-.811A1.715,1.715,0,0,0,343.11,120.12Z"
                                        transform="translate(-340.558 -120.026)"
                                        fill="#fff" />
                                </g>
                            </g>
                            <g
                                id="Group_38"
                                data-name="Group 38"
                                transform="translate(74.489 19.745)">
                                <g
                                    id="Group_37"
                                    data-name="Group 37"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_50"
                                        data-name="Path 50"
                                        d="M366.215,155.243a1.715,1.715,0,0,0-1.715,1.715v.857a1.715,1.715,0,0,0,3.43,0v-.857A1.715,1.715,0,0,0,366.215,155.243Z"
                                        transform="translate(-364.5 -155.243)"
                                        fill="#fff" />
                                </g>
                            </g>
                            <g
                                id="Group_40"
                                data-name="Group 40"
                                transform="translate(74.489 12.562)">
                                <g
                                    id="Group_39"
                                    data-name="Group 39"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_51"
                                        data-name="Path 51"
                                        d="M366.215,120.243a1.715,1.715,0,0,0-1.715,1.715v.857a1.715,1.715,0,0,0,3.43,0v-.857A1.715,1.715,0,0,0,366.215,120.243Z"
                                        transform="translate(-364.5 -120.243)"
                                        fill="#fff" />
                                </g>
                            </g>
                            <g
                                id="Group_42"
                                data-name="Group 42"
                                transform="translate(81.452 19.308)">
                                <g
                                    id="Group_41"
                                    data-name="Group 41"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_52"
                                        data-name="Path 52"
                                        d="M401.972,155.093l-.279-.811a1.715,1.715,0,1,0-3.243,1.115l.279.811a1.715,1.715,0,1,0,3.243-1.115Z"
                                        transform="translate(-398.357 -153.124)"
                                        fill="#fff" />
                                </g>
                            </g>
                            <g
                                id="Group_44"
                                data-name="Group 44"
                                transform="translate(79.125 12.516)">
                                <g
                                    id="Group_43"
                                    data-name="Group 43"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_53"
                                        data-name="Path 53"
                                        d="M390.593,122l-.279-.811a1.715,1.715,0,1,0-3.243,1.115l.279.811A1.715,1.715,0,0,0,390.593,122Z"
                                        transform="translate(-386.977 -120.027)"
                                        fill="#fff" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class=" w-full border-b-2 border-lightBlue space-y-2">
                    <p class="font-medium text-xl text-white">Bathrooms</p>
                    <div class="space-x-2">
                        <svg
                            on:click={() => reservation.bathrooms++}
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block w-8 cursor-pointer"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#8ECAE6"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="9" y1="12" x2="15" y2="12" />
                            <line x1="12" y1="9" x2="12" y2="15" />
                        </svg>
                        <span class="text-white">{reservation.bathrooms}</span>
                        <svg
                            on:click={() => {
                                if (reservation.bathrooms > 0) reservation.bathrooms--;
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block w-8 cursor-pointer"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#8ECAE6"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="9" y1="12" x2="15" y2="12" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="mr-11">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80.004"
                        height="80.004"
                        viewBox="0 0 80.004 80.004">
                        <g
                            id="Group_186"
                            data-name="Group 186"
                            transform="translate(-209.524 -4052.422)">
                            <g
                                id="Group_51"
                                data-name="Group 51"
                                transform="translate(226.715 4081.962)">
                                <g
                                    id="Group_50"
                                    data-name="Group 50"
                                    transform="translate(0 0)">
                                    <path
                                        id="Path_56"
                                        data-name="Path 56"
                                        d="M378.657,336.407H377.25v-3.281a3.125,3.125,0,0,0-6.25,0v6.407a3.125,3.125,0,0,0,3.125,3.125h4.531a3.125,3.125,0,1,0,0-6.25Z"
                                        transform="translate(-330.219 -307.976)"
                                        fill="#fff" />
                                    <circle
                                        id="Ellipse_10"
                                        data-name="Ellipse 10"
                                        cx="2.791"
                                        cy="2.791"
                                        r="2.791"
                                        transform="translate(13.026 0)"
                                        fill="#8ecae6" />
                                    <circle
                                        id="Ellipse_12"
                                        data-name="Ellipse 12"
                                        cx="2.791"
                                        cy="2.791"
                                        r="2.791"
                                        transform="translate(26.052)"
                                        fill="#8ecae6" />
                                    <circle
                                        id="Ellipse_13"
                                        data-name="Ellipse 13"
                                        cx="2.791"
                                        cy="2.791"
                                        r="2.791"
                                        transform="translate(39.078)"
                                        fill="#8ecae6" />
                                    <circle
                                        id="Ellipse_14"
                                        data-name="Ellipse 14"
                                        cx="2.791"
                                        cy="2.791"
                                        r="2.791"
                                        fill="#8ecae6" />
                                </g>
                            </g>
                            <g
                                id="Group_185"
                                data-name="Group 185"
                                transform="translate(209.524 4052.422)">
                                <path
                                    id="Path_55"
                                    data-name="Path 55"
                                    d="M288.907,270a18.907,18.907,0,1,0,18.907,18.907A18.929,18.929,0,0,0,288.907,270Zm0,31.564a12.657,12.657,0,1,1,12.657-12.657A12.671,12.671,0,0,1,288.907,301.564Z"
                                    transform="translate(-227.81 -227.811)"
                                    fill="#fff" />
                                <path
                                    id="Path_54"
                                    data-name="Path 54"
                                    d="M67.5,6.25H63.441V3.125a3.125,3.125,0,0,0-6.25,0V6.25H42.971V3.125a3.125,3.125,0,1,0-6.25,0V6.25H22.657V3.125a3.125,3.125,0,0,0-6.25,0V6.25H12.5A12.515,12.515,0,0,0,0,18.751V67.5A12.515,12.515,0,0,0,12.5,80H36.408a3.125,3.125,0,1,0,0-6.25H12.5A6.257,6.257,0,0,1,6.25,67.5V18.751A6.257,6.257,0,0,1,12.5,12.5h3.906v3.125a3.125,3.125,0,1,0,6.25,0V12.5H36.721v3.125a3.125,3.125,0,1,0,6.25,0V12.5H57.19v3.125a3.125,3.125,0,1,0,6.25,0V12.5H67.5a6.257,6.257,0,0,1,6.25,6.25V36.564a3.125,3.125,0,0,0,6.25,0V18.751A12.515,12.515,0,0,0,67.5,6.25Z"
                                    fill="#8ecae6" />
                                <circle
                                    id="Ellipse_15"
                                    data-name="Ellipse 15"
                                    cx="2.791"
                                    cy="2.791"
                                    r="2.791"
                                    transform="translate(17.191 42.567)"
                                    fill="#8ecae6" />
                                <circle
                                    id="Ellipse_16"
                                    data-name="Ellipse 16"
                                    cx="2.791"
                                    cy="2.791"
                                    r="2.791"
                                    transform="translate(30.217 42.567)"
                                    fill="#8ecae6" />
                                <circle
                                    id="Ellipse_17"
                                    data-name="Ellipse 17"
                                    cx="2.791"
                                    cy="2.791"
                                    r="2.791"
                                    transform="translate(17.191 55.592)"
                                    fill="#8ecae6" />
                                <circle
                                    id="Ellipse_18"
                                    data-name="Ellipse 18"
                                    cx="2.791"
                                    cy="2.791"
                                    r="2.791"
                                    transform="translate(30.217 55.592)"
                                    fill="#8ecae6" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="w-full">
                    <p class="font-medium text-white text-xl">May 2020</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div
            class="bg-blue py-10 px-8 md:px-12 lg:px-16 rounded-3xl shadow-blue">
            <div class="leading-none text-center md:text-left">
                <p class="text-white text-2xl">Subtotal</p>
                <p class="text-white font-medium text-7xl">91€</p>
            </div>
            <div class="grid grid-rows-5 text-white text-xl space-y-4">
                <div class="border-b-2 border-lightBlue mt-4 p-2 pl-0">
                    <span>{reservation.type.value}</span>
                </div>
                <div
                    class="border-b-2 border-lightBlue p-2 pl-0 grid grid-cols-2">
                    <span>Bedrooms</span>
                    <span class="justify-self-end">{reservation.bedrooms}</span>
                </div>
                <div
                    class="border-b-2 border-lightBlue p-2 pl-0 grid grid-cols-2">
                    <span>Bathrooms</span>
                    <span
                        class="justify-self-end">{reservation.bathrooms}</span>
                </div>
                <div
                    class="border-b-2 border-lightBlue p-2 pl-0 grid grid-cols-2">
                    <span>Date</span>
                    <span class="justify-self-end">12 May 2020</span>
                </div>
            </div>
            <div>
                <Button color="bg-lightBlue" label="Continue Booking" />
            </div>
        </div>
    </div>
</div>
