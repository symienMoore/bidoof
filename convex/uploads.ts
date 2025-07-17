import { query } from "./_generated/server";




export const fetchUploads = query({
    handler: async (ctx) => {
        const uploads = await ctx.db.query("docs").collect();
        // do something with `uploads`
        return uploads;
    }
})