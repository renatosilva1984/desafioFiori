sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("googleimagens.controller.Inicial", {
            onInit: function () {
          
            //Lista Array      
            var lista = [ ];    
            
            // Estrutura com Tabela(Objeto)
            let ImageList = {        
                Imagens : [
                    {
                        url :       "http://cdn.shopify.com/s/files/1/0265/3893/4330/products/coca-cola-110591_1200x1200.jpg?v=1590528264",
                        thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=158279291306047240",
                        title:      "Coca-cola White Lily Diner",
                        thumbnailWidth: "5em",
                        provider: {
                            name:"shopify"
                        }
                    },
                    {
                        url :       "https://www.mashed.com/img/gallery/elon-musks-bedside-table-is-littered-with-diet-coke-cans/l-intro-1669661425.jpg",
                        thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=1006810592191438500",
                        title:      "Elon Musk's Bedside Table Is Littered With Diet Coke Cans",
                        thumbnailWidth: "5em",
                        provider: {
                            name:"mashed"
                        }
                    },
                    {
                        url :       "https://www.mashed.com/img/gallery/elon-musks-bedside-table-is-littered-with-diet-coke-cans/l-intro-1669661425.jpg",
                        thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=1006810592191438500",
                        title:      "Elon Musk's Bedside Table Is Littered With Diet Coke Cans",
                        thumbnailWidth: "5em",
                        provider: {
                            name:"mashed"
                        }
                    }
                ]
            };
           
           // Imagens = [];
            
            //Criação do Modelo de Exibição na Tela

            let ImageModel = new JSONModel(ImageList);
            let view = this.getView().setModel(ImageModel,"ModeloImagem");
            //view.setModel(ImageModel,"ModeloImagem");
            },

            onPressBuscar: function(){
           //instancia do objeto input da tela
            let inputBusca = this.byId("inpBusca");
           // coleta o valor na variável.  
            let query = inputBusca.getValue();
           
            // alert(query)   

            const settings = {
                "async": true,
                "crossDomain": true,

            //concatenate
            
                "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=" 
                + query 
                + "&pageNumber=1&pageSize=10&autoCorrect=true",
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "9841f938dfmshc9149361c8a0717p164a9ajsna899a38fb930",
                    "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
                }
            };
            //() são parâmetros.
            // calback - função executa no final de outra função.
            $.ajax(settings).done(function (response) {
                console.log(response);
            
                //Instanciar o modelo.
                //this o objeto que está chamando a função.(arquivo)
                let oImageModel = this.getView().getModel("ModeloImagem");
                let oDadosImage = oImageModel.getData();

                //clear tabela interna  = array.

                oDadosImage.Imagens = [];

            // loop que adiociona dados de uma tabela em outra tabela.
            let listaResultados = response.value;
            let newItem;   

            //vamos ao loop = for
            
            for (var i =0; i < listaResultados.length; i++){
                //read table pelo indice.
             
             newItem = listaResultados[i];
             
            // append dos dados.
            oDadosImage.Imagens.push(newItem);

            }

            oImageModel.refresh();




            
            }.bind(this) //vai enxergar as variáveis que estão na função superior

     








            
            );      
            
        }

        });    
    });
