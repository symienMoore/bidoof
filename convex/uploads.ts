import { v } from "convex/values";
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

export const saveDocument = mutation({
    args: {
      storageId: v.id("_storage"),
      title: v.string(),
      user: v.string(),
      // add other fields as needed
    },
    handler: async (ctx, args) => {
      return await ctx.db.insert("docs", {
        title: args.title,
        content: args.storageId, // or any other content
        createdAt: Date.now(),
        updatedAt: Date.now(),
        // Removed 'user' property as it does not exist in the "docs" table schema
        // storageId is not a valid property for the "docs" table schema, so we remove it
      });
    },
  });