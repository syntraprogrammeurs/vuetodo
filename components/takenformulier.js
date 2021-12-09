app.component('taken-formulier',{
    template:
    `
        <taak-toevoegen @toevoegenEenTaak="eenTaakToevoegen"></taak-toevoegen>  
        <hr>       
       <div class="col-lg-6 offset-lg-3">
        
               <div v-for="(taak, index) in taken" :key="index" class="input-group mb-3">
                   <div class="input-group-text">
                       <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
                   </div>
                   <input v-model="taak.taak" type="text" value="{{taak.taak}}" class="form-control" aria-label="Text input with checkbox">            
               </div>
       </div>
    `,
    data(){
      return{
          taken: [],
      }
    },
    methods:{
        eenTaakToevoegen(taak){
            this.taken.push(taak)
        },
    }
})