
app.component('taak-toevoegen',{
    template:
    `<h1 class="shadow-lg p-3 my-5 bg-body rounded text-center">Takenlijst</h1>
        <div class="col-lg-6 offset-lg-3">
            <form @submit.prevent="onSubmit">
            <div class="input-group mb-3">
                    <input id="taak" v-model="taak" type="text" class="form-control" placeholder="Taak..." aria-label="Taak" aria-describedby="button-addon2">
                    <button @click="toevoegenEenTaak" class="btn btn-outline-secondary" type="submit" id="button-addon2"><i class="bi bi-plus-square-fill"></i></button>
            </div>
            </form>
        </div>
    `,
    data(){
        return{
            taak:'',
        }
    },
    methods:{
        onSubmit(){
            let eenTaakToevoegen = {
                taak:this.taak,
            }
            this.$emit('toevoegenEenTaak', eenTaakToevoegen)
            this.taak=''
        }
    }
})
