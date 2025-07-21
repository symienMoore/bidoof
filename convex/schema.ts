import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema ({
    // Define your schema here
    // For example:
    messages: defineTable({
        // Define the fields of the messages table
        content: v.string(),
        sender: v.id("users"),
        receiver: v.id("users"),
        createdAt: v.number(),
        updatedAt: v.number(),
        timestamp: v.number(),
    }),

    docs: defineTable({
        // Define the fields of the docs table
        title: v.string(),
        content: v.string(),
        createdAt: v.number(),
        updatedAt: v.number(),
        user: v.string(), // Reference to the user who created the document
    }),

    
      
})