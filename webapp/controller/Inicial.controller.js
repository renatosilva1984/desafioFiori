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
           
             alert(this.query)   
            
        }

        });    
    });
