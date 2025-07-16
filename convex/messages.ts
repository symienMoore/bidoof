import { query } from "./_generated/server";


export const TestApi = () => {
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  return null;
}

export const fetchData = query({
  handler: async (ctx) => {
    const messages = await ctx.db.query("messages").collect();
    // do something with `tasks`
    return messages;
  }
})


