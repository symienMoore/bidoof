import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema ({
    // Define your schema here
    // For example:
    // users: defineTable({
    //     // Define the fields of the users table
    //     name: v.string(),
    //     email: v.string(),
    //     createdAt: v.number(),
    //     updatedAt: v.number(),
    // }),
    messages: defineTable({
        // Define the fields of the messages table
        content: v.string(),
        sender: v.optional(v.id("users")),
        receiver: v.optional(v.id("users")),
        _creationTime: v.number(),
        updatedAt: v.number(),
        timestamp: v.number(),
    }),

    docs: defineTable({
        // Define the fields of the docs table
        title: v.string(),
        content: v.string(),
        createdAt: v.number(),
        updatedAt: v.number(),
        // user: v.id("users"), // Reference to the user who created the document
        url: v.string(),
        userId: v.string(),
        favorite: v.boolean()
    }),

    folders: defineTable({
        // Define the fields of the folders table
        name: v.string(),
        createdAt: v.number(),
        updatedAt: v.number(),
        // user: v.id("users"), // Reference to the user who created the folder
        docs: v.array(v.id("docs")), // Array of document IDs in the folder
        favorite: v.boolean()
    })
      
})