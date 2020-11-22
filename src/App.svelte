<script>
	import BookingPage from "./pages/BookingPage.svelte";
	import ServicesPage from "./pages/ServicesPage.svelte";
	import PricesPage from "./pages/PricesPage.svelte";
	import HomePage from "./pages/HomePage.svelte";

	import router from "page";

	let page;
	let params;

	router("/", () => (page = HomePage));
	router("/booking", () => (page = BookingPage));
	router("/services", () => (page = ServicesPage));
	router("/prices", () => (page = PricesPage));

	router.start();
</script>

<svelte:component this={page} {params} />
