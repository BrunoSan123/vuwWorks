<template>
  
 <v-container fluid>
     <v-form>
         <v-file-input 
         multiple 
         chips
          v-model="files"
          label="selecione as legendas"
          prepend-icon="mdi-message-text"
          outlined
          append-outer-icon="mdi-send"
          @click:append-outer="processarLegenda"
          > 

         </v-file-input>
     </v-form>
  <div class="pills">
      <Pill v-for="palavra in palavrasAgrupadas" :key="palavra.nome"
      :nome="palavra.nome" :quantidade="palavra.quantidade"/>

  </div>
 </v-container>
</template>

<script>


import Pill from './pill.vue'
import {ipcRenderer} from 'electron'
export default {

    components:{Pill},

    data:function(){
        return {
            files:[],
            palavrasAgrupadas:[
                {nome:'você',quantidade:900},
                {nome:'ele',quantidade:853},
                {nome:'eu',quantidade:1234},
            ]
        }
    },
    methods:{
        processarLegenda(){
            console.log(this.files)

            ipcRenderer.send('comunicate','ping')
            ipcRenderer.on('comunicate',(event,resp)=>{
                console.log(resp)
            })

        }
    }

}
</script>

<style>

.pills{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>