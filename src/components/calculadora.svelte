<script lang="ts">
  import Botao from "./botao.svelte";
  import Linhas from "./linhas.svelte";
  import Tela from "./tela.svelte";
  import CalculadoraModel from '../model/calculadoraModal'
  let calc = new CalculadoraModel()


</script>
<div class="calculadora">
    <Tela valor={calc.valor}/>
    <Linhas>
        <Botao destaque triplo texto='AC' onClick={()=>calc = calc.AC()}/>
        <Botao operacao texto='/' onClick={(op)=> calc = calc.opercaoDigitada(op)}/>
    </Linhas>
    <Linhas>
        <Botao texto='7' onClick={num=>calc = calc.numeroDigitado(num)}/>
        <Botao texto='8'  onClick={num=>calc = calc.numeroDigitado(num)}/>
        <Botao texto='9'  onClick={num=>calc = calc.numeroDigitado(num)}/>
        <Botao operacao texto='*'  onClick={(op)=> calc = calc.opercaoDigitada(op)}/>
    </Linhas>
    <Linhas>
        <Botao texto='4' onClick={num=>calc = calc.numeroDigitado(num)} />
        <Botao texto='5' onClick={num=>calc = calc.numeroDigitado(num)}/>
        <Botao texto='6' onClick={num=>calc = calc.numeroDigitado(num)}/>
        <Botao operacao texto='+'  onClick={(op)=> calc = calc.opercaoDigitada(op)}/>
    </Linhas>
    <Linhas>
        <Botao texto='1' onClick={num=>calc = calc.numeroDigitado(num)}/>
        <Botao texto='2' onClick={num=>calc = calc.numeroDigitado(num)}/>
        <Botao texto='3' onClick={num=>calc = calc.numeroDigitado(num)}/>
        <Botao operacao texto='-'  onClick={(op)=> calc = calc.opercaoDigitada(op)}/>
    </Linhas>
    <Linhas>
        <Botao duplo texto='0' onClick={num=>calc = calc.numeroDigitado(num)}/>
        <Botao texto=','  onClick={()=>calc = calc.pontoDigitado()}/>
        <Botao destaque texto='='  onClick={()=>calc = calc.calcular()}/>
 
    </Linhas>
</div>

<style>
    
    .calculadora{
        padding:10px;
        border-radius: 10px;
        background-color: var(--cor-fundo);
        height: 220px;
        width:150px;
        display:flex;
        flex-direction: column;
    }

</style>