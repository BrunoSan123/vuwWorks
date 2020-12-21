<template>
<div class="pill">
    <span class="nome">{{nome}}</span>
    <span class="quantidade">{{quantidade}}</span>
</div>
  
</template>

<script>
export default {
    props:['nome','quantidade']

}
</script>

<style>
.pill{
    background-color: crimson;
    color:#fff;
    margin:10px;
    height: 55px;
    border-radius: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;

}

.pill .nome{
    margin-left: 15px;


}

.pill .quantidade{
    margin:10px;
    padding:5px;
    height: 35px;
    width: 35px;
    border-radius: 18px;

    background-color: #fff;
    color:crimson;
    font-size: 14px;
    display:flex;
    justify-content: center;
    align-items: center;

}
</style>