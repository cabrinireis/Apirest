<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a class="brand-logo center">Produtos</a>
      </div>
    </nav>

    <div class="container">
      

      <form @submit="salvar" >

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="produto.nome" required>
          <label>Quantidade</label>
          <input type="number" placeholder="QTD" v-model="produto.quantidade" required>
          <label>Valor</label>
          <input type="text" placeholder="Valor" v-model="produto.valor" required>

          <button class="waves-effect waves-block btn-small">Salvar<i class="material-icons left">save</i></button>
      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody v-for="produto of produtos" :key="produto.id">
          <tr>
            <td>{{produto.nome}}</td>
            <td>{{produto.quantidade}}</td>
            <td>{{produto.valor}}</td>
            <td>
            <button class="waves-effect btn-small blue darken-1" @click="editar(produto)"><i class="material-icons">create</i></button>
            <button class="waves-effect btn-small red darken-1" @click="remover(produto)" ><i class="material-icons">delete_sweep</i></button>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>

  </div>
</template>
<script>
import Produto from './services/produtos'

export default {
  data(){
    return{
      produtos: [],
      erros:[],
      produto:{
        id:'',
        nome:'',
        quantidade:'',
        valor:''
      }
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },

  mounted(){
     this.listar()
  },
  methods: {
    listar(){
      Produto.listar().then(resposta =>{
      this.produtos = resposta.data
      console.log(this.produtos)
    })
    },
    salvar(){
      if(!this.produto.id){
        Produto.salvar(this.produto).then(resposta =>{
          this.produto = {}
          this.listar()
          // e.preventdefault()
        }).catch(e => {
          console.log(e.response.data.erros)
          })
      }else{
        Produto.atulizar(this.produto).then(resposta =>{
          this.produto = {}
          this.listar()
          // e.preventdefault()
        }).catch(e => {
          console.log(e.response.data.erros)
          })
      }
    },
    editar(produto){
      this.produto = produto
      console.log(this.produtos)
    },
    remover(produto){
      Produto.deletar(this.produto).then(resposta =>{
        this.listar()
      })
    },
    atualiza(){
      Produto.atulizar(this.produto).then(resposta =>{
        this.listar()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
</style>
