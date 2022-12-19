// Post service handles all calls to the Express backend
import axios from "axios";

// Temporary proxy
const url = "http://localhost:5001/openai/generateimage/";
class PostService {
  // Get Image

  // Post Prompt
  static insertPrompt(prompt:string) {
    return axios.post(url, {
      prompt: prompt,
    })
    
    .then(function(response) {     
      console.log(response.data);
    })
    
    .catch(function(error) {
      console.log(error);
    });
  }
}

export default PostService;
