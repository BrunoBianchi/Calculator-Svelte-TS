<script lang="ts">
  import Calculadora from "./calculadora.svelte";

</script>

<main>
	<h1>Small Calculator Made with Svelte and TS</h1>
<Calculadora></Calculadora>
</main>

<style>
	h1{
		text-align: center;
		margin-right:10px;
	}
	:global(body){
		background-color: black;
	}
	:root{
		--cor-fundo:#555;
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height:100vh;
	}

</style>