<script>
    //importing components
    import Menu from "../components/Menu.svelte";
    import Button from "../components/Button.svelte";
    import Service from "../components/Service.svelte";
    import About from "../components/About.svelte";
    import Footer from "../components/Footer.svelte";
    import Booking from "../components/Booking.svelte";

    export let content;
</script>

<header
    class="px-6 pt-10 md:px-12 md:pt-8 bg-cover md:bg-bottom md:h-lg h-sm md:bg-hero-lg bg-hero-sm">
    <Menu />
    <div class="text-center pt-24 md:pt-48">
        <span
            class="text-lightBlue text-2xl lg:text-3xl ">{content.header.smallTitle}</span>
        <h1
            class=" text-4xl lg:text-7xl font-black text-white leading-none mb-10">
            {content.header.mainTitle}
        </h1>
        <div class="space-x-4">
            <Button color="bg-orange" shadow="shadow-orange" label="Services" />
            <Button color="bg-blue" shadow="shadow-blue" label="Book Now" />
        </div>
    </div>
</header>

<main class="lg:px-36 md:px-16 px-6 lg:mt-24 space-y-24" id="aboutUs">
    <section class=" text-center md:text-left ">
        <h2 class="text-4xl text-darkBlue font-black leading-tight mb-16 ">
            Making Your House As Good As new
        </h2>
        <div
            class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-24 space-y-12">
            <Service
                label="We combine your needs and wants with our time-tested cleaning method to create your very own cleaning plan"
                title="Office Cleaning"
                bgColor="bg-blue">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Capa_1"
                    enable-background="new 0 0 512 512"
                    class="w-24 h-24 fill-blue"
                    viewBox="0 0 512 512"><g>
                        <g>
                            <g>
                                <path
                                    d="m487 444.811h-6.347v-123.851c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v123.852h-159.104v-203.88h152.975c3.38 0 6.13 2.75 6.13 6.129v38.565c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-38.565c0-11.651-9.479-21.129-21.13-21.129h-152.975v-136.294c0-10.913-8.491-20.13-19.352-21.049v-15.045c0-10.956-8.556-20.209-19.479-21.065l-194.24-15.224c-12.265-.969-22.78 8.758-22.78 21.065v12.011c-11.123.95-19.351 10.254-19.351 21.05v373.429h-6.347c-13.785 0-25 11.215-25 25s11.215 25 25 25h462c13.785 0 25-11.215 25-25s-11.215-24.999-25-24.999zm-421.302-406.49c0-3.592 3.057-6.392 6.609-6.111l194.24 15.223c3.168.249 5.65 2.933 5.65 6.111v13.863l-206.5-16.184v-12.902zm-19.351 33.061c0-3.621 3.097-6.399 6.608-6.111l232.942 18.256c3.169.249 5.651 2.933 5.651 6.111v355.173h-20.957v-107.38c0-6.826-5.553-12.379-12.379-12.379h-69.68c-6.826 0-12.379 5.553-12.379 12.379v48.653c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-46.032h64.438v104.759h-64.438v-23.664c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v23.664h-129.806zm440.653 408.429h-462c-5.514 0-10-4.486-10-10s4.486-10 10-10h462c5.514 0 10 4.486 10 10s-4.486 10-10 10z" />
                                <path
                                    d="m75.905 162.943h30.358c7.137 0 12.943-5.806 12.943-12.942v-23.357c0-7.136-5.806-12.942-12.943-12.942h-30.358c-7.136 0-12.942 5.806-12.942 12.942v23.357c0 7.136 5.806 12.942 12.942 12.942zm2.058-34.242h26.244v19.242h-26.244z" />
                                <path
                                    d="m151.599 162.943h30.358c7.136 0 12.942-5.806 12.942-12.942v-23.357c0-7.136-5.806-12.942-12.942-12.942h-30.358c-7.136 0-12.942 5.806-12.942 12.942v23.357c-.001 7.136 5.805 12.942 12.942 12.942zm2.057-34.242h26.243v19.242h-26.243z" />
                                <path
                                    d="m227.292 162.943h30.358c7.137 0 12.942-5.806 12.942-12.942v-23.357c0-7.136-5.806-12.942-12.942-12.942h-30.358c-7.136 0-12.942 5.806-12.942 12.942v23.357c-.001 7.136 5.805 12.942 12.942 12.942zm2.057-34.242h26.243v19.242h-26.243z" />
                                <path
                                    d="m75.905 230.38h30.358c7.137 0 12.943-5.806 12.943-12.942v-23.358c0-7.136-5.806-12.942-12.943-12.942h-30.358c-7.136 0-12.942 5.806-12.942 12.942v23.357c0 7.137 5.806 12.943 12.942 12.943zm2.058-34.242h26.244v19.242h-26.244z" />
                                <path
                                    d="m151.599 230.38h30.358c7.136 0 12.942-5.806 12.942-12.942v-23.358c0-7.136-5.806-12.942-12.942-12.942h-30.358c-7.136 0-12.942 5.806-12.942 12.942v23.357c-.001 7.137 5.805 12.943 12.942 12.943zm2.057-34.242h26.243v19.242h-26.243z" />
                                <path
                                    d="m227.292 230.38h30.358c7.137 0 12.942-5.806 12.942-12.942v-23.358c0-7.136-5.806-12.942-12.942-12.942h-30.358c-7.136 0-12.942 5.806-12.942 12.942v23.357c-.001 7.137 5.805 12.943 12.942 12.943zm2.057-34.242h26.243v19.242h-26.243z" />
                                <path
                                    d="m75.905 297.816h30.358c7.137 0 12.943-5.806 12.943-12.942v-23.357c0-7.136-5.806-12.942-12.943-12.942h-30.358c-7.136 0-12.942 5.806-12.942 12.942v23.357c0 7.136 5.806 12.942 12.942 12.942zm2.058-34.242h26.244v19.242h-26.244z" />
                                <path
                                    d="m144.551 325.052h-67.188c-7.94 0-14.4 6.46-14.4 14.4v20.442c0 7.94 6.46 14.4 14.4 14.4h67.188c7.94 0 14.4-6.46 14.4-14.4v-20.442c0-7.94-6.46-14.4-14.4-14.4zm-.6 34.242h-65.988v-19.242h65.988z" />
                                <path
                                    d="m151.599 297.816h30.358c7.136 0 12.942-5.806 12.942-12.942v-23.357c0-7.136-5.806-12.942-12.942-12.942h-30.358c-7.136 0-12.942 5.806-12.942 12.942v23.357c-.001 7.136 5.805 12.942 12.942 12.942zm2.057-34.242h26.243v19.242h-26.243z" />
                                <path
                                    d="m227.292 297.816h30.358c7.137 0 12.942-5.806 12.942-12.942v-23.357c0-7.136-5.806-12.942-12.942-12.942h-30.358c-7.136 0-12.942 5.806-12.942 12.942v23.357c-.001 7.136 5.805 12.942 12.942 12.942zm2.057-34.242h26.243v19.242h-26.243z" />
                                <path
                                    d="m380.573 291.297c0-7.607-6.189-13.797-13.797-13.797h-30.628c-7.607 0-13.797 6.189-13.797 13.797v24.293c0 7.607 6.189 13.797 13.797 13.797h30.628c7.607 0 13.797-6.189 13.797-13.797zm-15 23.09h-28.222v-21.887h28.222z" />
                                <path
                                    d="m366.776 346.717h-30.628c-7.607 0-13.797 6.189-13.797 13.797v24.293c0 7.607 6.189 13.797 13.797 13.797h30.628c7.607 0 13.797-6.189 13.797-13.797v-24.293c0-7.608-6.189-13.797-13.797-13.797zm-1.203 36.887h-28.222v-21.887h28.222z" />
                                <path
                                    d="m450.333 291.297c0-7.607-6.189-13.797-13.797-13.797h-30.627c-7.607 0-13.797 6.189-13.797 13.797v24.293c0 7.607 6.189 13.797 13.797 13.797h30.627c7.607 0 13.797-6.189 13.797-13.797zm-15 23.09h-28.221v-21.887h28.221z" />
                                <path
                                    d="m436.536 346.717h-30.627c-7.607 0-13.797 6.189-13.797 13.797v24.293c0 7.607 6.189 13.797 13.797 13.797h30.627c7.607 0 13.797-6.189 13.797-13.797v-24.293c0-7.608-6.189-13.797-13.797-13.797zm-1.203 36.887h-28.221v-21.887h28.221z" />
                            </g>
                        </g>
                    </g></svg>
            </Service>
            <Service
                label="We combine your needs and wants with our time-tested cleaning method to create your very own cleaning plan"
                title="Apartman Cleaning"
                bgColor="bg-orange">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    enable-background="new 0 0 512 512"
                    class="h-24 w-24 fill-orange"
                    viewBox="0 0 512 512"><g>
                        <g>
                            <path
                                d="m197.5 107c0-4.142-3.358-7.5-7.5-7.5h-54c-4.142 0-7.5 3.358-7.5 7.5v50c0 4.142 3.358 7.5 7.5 7.5h54c4.142 0 7.5-3.358 7.5-7.5zm-15 42.5h-39v-35h39z" />
                            <path
                                d="m383.5 107c0-4.142-3.358-7.5-7.5-7.5h-54c-4.142 0-7.5 3.358-7.5 7.5v50c0 4.142 3.358 7.5 7.5 7.5h54c4.142 0 7.5-3.358 7.5-7.5zm-15 42.5h-39v-35h39z" />
                            <path
                                d="m290.5 107c0-4.142-3.358-7.5-7.5-7.5h-54c-4.142 0-7.5 3.358-7.5 7.5v50c0 4.142 3.358 7.5 7.5 7.5h54c4.142 0 7.5-3.358 7.5-7.5zm-15 42.5h-39v-35h39z" />
                            <path
                                d="m197.5 193c0-4.142-3.358-7.5-7.5-7.5h-54c-4.142 0-7.5 3.358-7.5 7.5v50c0 4.142 3.358 7.5 7.5 7.5h54c4.142 0 7.5-3.358 7.5-7.5zm-15 42.5h-39v-35h39z" />
                            <path
                                d="m383.5 193c0-4.142-3.358-7.5-7.5-7.5h-54c-4.142 0-7.5 3.358-7.5 7.5v50c0 4.142 3.358 7.5 7.5 7.5h54c4.142 0 7.5-3.358 7.5-7.5zm-15 42.5h-39v-35h39z" />
                            <path
                                d="m290.5 193c0-4.142-3.358-7.5-7.5-7.5h-54c-4.142 0-7.5 3.358-7.5 7.5v50c0 4.142 3.358 7.5 7.5 7.5h54c4.142 0 7.5-3.358 7.5-7.5zm-15 42.5h-39v-35h39z" />
                            <path
                                d="m190 272.5h-54c-4.142 0-7.5 3.358-7.5 7.5v50c0 4.142 3.358 7.5 7.5 7.5h54c4.142 0 7.5-3.358 7.5-7.5v-50c0-4.142-3.358-7.5-7.5-7.5zm-7.5 50h-39v-35h39z" />
                            <path
                                d="m376 272.5h-54c-4.142 0-7.5 3.358-7.5 7.5v50c0 4.142 3.358 7.5 7.5 7.5h54c4.142 0 7.5-3.358 7.5-7.5v-50c0-4.142-3.358-7.5-7.5-7.5zm-7.5 50h-39v-35h39z" />
                            <path
                                d="m283 272.5h-54c-4.142 0-7.5 3.358-7.5 7.5v50c0 4.142 3.358 7.5 7.5 7.5h54c4.142 0 7.5-3.358 7.5-7.5v-50c0-4.142-3.358-7.5-7.5-7.5zm-7.5 50h-39v-35h39z" />
                            <path
                                d="m488.5 435.5h-68v-368.5c0-4.142-3.358-7.5-7.5-7.5h-28.615c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h21.115v361h-51v-72.5c0-4.142-3.358-7.5-7.5-7.5h-50.769c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h9.269v65h-99v-65h57.423c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-98.923c-4.142 0-7.5 3.358-7.5 7.5v72.5h-51v-47.526c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v47.526h-68c-12.958 0-23.5 10.542-23.5 23.5s10.542 23.5 23.5 23.5h465c12.958 0 23.5-10.542 23.5-23.5s-10.542-23.5-23.5-23.5zm-168-65h19v65h-19zm-148 0h19v65h-19zm316 97h-465c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5h465c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5z" />
                            <path
                                d="m99 363.68c4.142 0 7.5-3.358 7.5-7.5v-281.68h244.654c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-151.654v-22.5c0-4.142-3.358-7.5-7.5-7.5h-60c-4.142 0-7.5 3.358-7.5 7.5v22.5h-25.5c-4.142 0-7.5 3.358-7.5 7.5v289.18c0 4.142 3.358 7.5 7.5 7.5zm40.5-319.18h45v15h-45z" />
                        </g>
                    </g></svg>
            </Service>
            <Service
                label="We combine your needs and wants with our time-tested cleaning method to create your very own cleaning plan"
                title="House Cleaning"
                bgColor="bg-yellow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Capa_1"
                    enable-background="new 0 0 512 512"
                    class="h-24 w-24 fill-yellow"
                    viewBox="0 0 512 512"><g>
                        <g>
                            <path
                                d="m494.398 167.687h-4.887l-45.821-123.365c-4.012-10.801-14.448-18.058-25.97-18.058h-323.441c-11.521 0-21.958 7.257-25.97 18.058l-45.82 123.365h-4.887c-9.706 0-17.602 7.896-17.602 17.602v14.142c0 9.706 7.896 17.602 17.602 17.602h2.602v164.39c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-164.39h117.76c6.59 0 12.786-2.566 17.447-7.227l85.589-85.591 85.591 85.591c4.66 4.66 10.856 7.226 17.446 7.226h117.76v19.884c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-19.884h2.602c9.705 0 17.602-7.896 17.602-17.602v-14.142c-.001-9.705-7.897-17.601-17.603-17.601zm-412.028-118.143c1.84-4.953 6.626-8.28 11.909-8.28h323.441c5.283 0 10.069 3.328 11.909 8.28l43.881 118.143h-104.253l-95.811-95.81c-4.66-4.66-10.855-7.227-17.446-7.227s-12.786 2.566-17.446 7.227l-95.811 95.81h-104.254zm414.63 149.887c0 1.435-1.167 2.602-2.602 2.602h-135.361c-2.584 0-5.014-1.006-6.84-2.833l-90.894-90.894c-1.407-1.407-3.314-2.197-5.304-2.197s-3.896.79-5.304 2.197l-90.893 90.894c-1.827 1.827-4.257 2.833-6.841 2.833h-135.359c-1.435 0-2.602-1.167-2.602-2.602v-14.142c0-1.435 1.167-2.602 2.602-2.602h128.248c1.989 0 3.896-.79 5.304-2.197l98.008-98.007c1.826-1.827 4.255-2.833 6.839-2.833s5.013 1.006 6.839 2.833l98.008 98.007c1.407 1.407 3.314 2.197 5.304 2.197h128.248c1.435 0 2.602 1.167 2.602 2.602v14.142z" />
                            <path
                                d="m450.962 425.126c4.143 0 7.5-3.358 7.5-7.5v-133.341c0-4.142-3.357-7.5-7.5-7.5h-101.017c-4.143 0-7.5 3.358-7.5 7.5v133.341c0 4.142 3.357 7.5 7.5 7.5zm-7.5-47.325h-35.509v-35.508h35.509zm-50.509 0h-35.508v-35.508h35.508zm50.509 32.325h-86.017v-17.325h86.017zm0-82.834h-35.509v-35.508h35.509zm-50.509-35.507v35.508h-35.508v-35.508z" />
                            <path
                                d="m162.055 425.126c4.143 0 7.5-3.358 7.5-7.5v-133.341c0-4.142-3.357-7.5-7.5-7.5h-101.017c-4.143 0-7.5 3.358-7.5 7.5v133.341c0 4.142 3.357 7.5 7.5 7.5zm-7.5-47.325h-35.508v-35.508h35.508zm-50.508 0h-35.509v-35.508h35.509zm50.508 32.325h-86.017v-17.325h86.017zm0-82.834h-35.508v-35.508h35.508zm-50.508-35.507v35.508h-35.509v-35.508z" />
                            <path
                                d="m280.244 309.11h-48.488c-4.143 0-7.5 3.358-7.5 7.5v32.325c0 4.142 3.357 7.5 7.5 7.5h48.488c4.143 0 7.5-3.358 7.5-7.5v-32.325c0-4.142-3.357-7.5-7.5-7.5zm-7.5 32.325h-33.488v-17.325h33.488z" />
                            <path
                                d="m295.825 214.583c0-21.959-17.865-39.825-39.825-39.825s-39.825 17.866-39.825 39.825 17.865 39.826 39.825 39.826 39.825-17.866 39.825-39.826zm-64.65 0c0-13.688 11.137-24.825 24.825-24.825s24.825 11.137 24.825 24.825-11.137 24.826-24.825 24.826-24.825-11.137-24.825-24.826z" />
                            <path
                                d="m504.5 436.39h-12.703v-164.39c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v164.39h-156.728v-152.105c0-4.142-3.357-7.5-7.5-7.5h-113.138c-4.143 0-7.5 3.358-7.5 7.5v152.105h-156.728v-19.884c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v19.884h-12.703c-4.143 0-7.5 3.358-7.5 7.5v34.346c0 4.142 3.357 7.5 7.5 7.5h497c4.143 0 7.5-3.358 7.5-7.5v-34.346c0-4.142-3.357-7.5-7.5-7.5zm-297.569-54.701h10.684c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-10.684v-74.904h98.139v144.605h-98.139zm290.069 89.047h-482v-19.346h482z" />
                        </g>
                    </g></svg>
            </Service>
        </div>
    </section>
    <section class="text-center md:text-left ">
        <About
            title="About us"
            text={content.aboutUs.aboutUsText}
            titleText={content.aboutUs.aboutUsTitle} />
    </section>
    <section>
        <Booking />
    </section>
</main>
<footer class="mt-24  md:px-16 px-6 lg:px-36 mb-4" id="contact">
    <Footer
        mail={content.footer.email}
        telNumber={content.footer.telNumber}
        address={content.footer.address} />
</footer>
