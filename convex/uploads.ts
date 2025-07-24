import { mutation, query } from "./_generated/server";




export const fetchUploads = query({
    handler: async (ctx) => {
        const uploads = await ctx.db.query("docs").collect();
        // do something with `uploads`
        return uploads;
    }
})

export const uploadFile = mutation({
    handler: async (ctx) => {
        return await ctx.storage.generateUploadUrl()
    }
})