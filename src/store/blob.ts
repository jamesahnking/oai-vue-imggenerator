// stores/blob.ts
import { ref } from "vue";
import axios from "axios";
const url = "https://oai-express-serve.herokuapp.com/openai/generateimage/";

// blob.sendText
export const blob = ref({
    prompt: '',
    resImage: '',
    imageHeight: '500px',
    loading: false,
    error: false,
    tags:['Hello','Goodbye'],
    displayBasic: false,

    openBasic() {
        this.displayBasic = true;
    },

    async sendText() {
        try {
            this.loading = true;
            const res = await axios.post(url, {
                prompt: this.prompt,
            })

            this.resImage = res.data.data;
            // this.blob = this.resImage;
            this.loading = false;
            console.log(`Hey its RESIMAGE ${this.resImage} this.loading = ${this.loading}`)

        } catch (err) {

            this.loading = false;
            this.error = true;
            this.openBasic();
            console.log(`Error - YOu need to add text for this to work`)
        }
    }
});