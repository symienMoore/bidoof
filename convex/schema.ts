import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema ({
    // Define your schema here
    // For example:
    messages: defineTable({
        // Define the fields of the messages table
        content: v.string(),
        sender: v.string(),
        timestamp: v.number(),
    })
      
})