import axios from "axios";

const instance = axios.create({
  baseURL: 'https://mghjjzmyuuvrnydiaqcb.supabase.co/rest/v1',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar',
  }
});
export default instance;
