<script lang="ts">
  import "../app.css"
  import "bootstrap-icons/font/bootstrap-icons.css";
	import Footer from "$lib/components/organisms/Footer.svelte";
  import Header from "$lib/components/organisms/Header.svelte";
</script>

<Header />

<slot />

<Footer />