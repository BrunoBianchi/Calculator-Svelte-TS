<script lang="ts">
    export let texto:string;
    export let triplo:Boolean = false
    export let duplo:Boolean = false
    export let operacao:Boolean = false
    export let destaque:Boolean = false
    export let onClick:(valor:string)=>void =() =>{}
    function click() {
        console.log("click")
    }
</script>
<button class="botao"
on:click={()=>onClick(texto)} class:triplo class:duplo class:operacao class:destaque>  
    {texto ? texto: 'botão'}
</button>
<style>
.botao{
    margin:0;
    border:1px solid var(--cor-fundo);
    flex-basis: 25%;
}
.triplo{
    flex-basis: 75%;
}
.duplo{
    flex-basis: 50%;

}
.operacao{
    color:white;
    background-color: orange;
}
.destaque{
    color:white;
    background-color: red;
}
</style>