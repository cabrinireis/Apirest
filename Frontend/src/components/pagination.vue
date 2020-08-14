<template>
<vueye-table 
     checkable 
     tableStyle="bordered" 
     :theme="theme2" 
     :per-page-values="[3,6]"
     title="TODOS"  
    :rows_data="produtos" 
    
    ></vueye-table>
</template>
<script>
import VueyeTable from "vueye-datatable";
import Produto from './services/produtos'
export default {
    name: "app",
     data() {
    return {
        produtos: [],
      erros:[],
      produto:{
        id:'',
        nome:'',
        quantidade:'',
        valor:''
      },
     todos: [],
     theme2: {
            backgroundColor: "#141413",
            color: "#ffe",
            rows:{
                borderBottom: "1px solid #eee"
        },
      rowClick: {
                backgroundColor: "#0D0A2F"
            }
            },
     theme3: {
            backgroundColor: "#141443",
            color: "#eee",
            rows:{
                borderBottom: "1px solid #eee"
        },
      rowClick: {
                backgroundColor: "#0D0B2F"
            }
            }
    };
  },
  components: {
    VueyeTable
  },
    components:{
    VueyeTable
    },
     mounted(){
     this.listar()
  },
    methods: {
    listar(){
      Produto.listar().then(resposta =>{
      this.produtos = resposta.data
      console.log(this.produtos.findIndex)
    })
    },
    onrowclick(row){
        //
    }
  },
};
</script>
