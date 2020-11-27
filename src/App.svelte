<script>
	import BookingPage from "./pages/BookingPage.svelte";
	import ServicesPage from "./pages/ServicesPage.svelte";
	import PricesPage from "./pages/PricesPage.svelte";
	import HomePage from "./pages/HomePage.svelte";

	import router from "page";

	let page;
	let pageContent;
	let content;
	let params;

	router("/", () => ((page = HomePage), (pageContent = "home")));
	router("/booking", () => ((page = BookingPage), (pageContent = "booking")));
	router(
		"/services",
		() => ((page = ServicesPage), (pageContent = "services"))
	);
	router("/prices", () => ((page = PricesPage), (pageContent = "prices")));
	router.start();

	//importing axios for request to cms (strapi)
	import axios from "axios";
	import { onMount } from "svelte";

	let urlHomePage = "http://localhost:1337/" + pageContent;

	onMount(async () => {
		try {
			const res = await axios.get(urlHomePage);
			content = res.data;
		} catch (e) {
			error = e;
		}
	});
</script>

{#if content}
	<svelte:component this={page} {content} />
{/if}
