import { defineField } from "sanity";
import { quote } from "./quote";


export const blocks = defineField({
    name: "blocks",
    type: "array",
    title: "Blocks",
    of: [
        quote
    ]
})