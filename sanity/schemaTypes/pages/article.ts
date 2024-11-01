import { defineType } from "sanity";
import { Newspaper } from "lucide-react";
import { seo } from "../other/seo";
import { blockContent } from "../blocks/blockContent";

export const article = defineType({
    type: "document",
    name: "article",
    title: "Article",
    icon: Newspaper,
    groups: [
        {
            name: "general",
            title: "General",
            default: true,
        },
        {
            name: "byline",
            title: "Byline",
        },
        {
            name: "seo",
            title: "SEO",
        },
        {
            name: "bottomline",
            title: "Bunnlinje"
        }
    ],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            group: "general",
        },
        {
            name: "mainImage",
            type: "image",
            title: "Main image",
            description: "The main image of the article",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
            fields: [
                {
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                }
            ],
            group: "general",
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "string",
            group: "byline"
        },
        {
            name: "slug",
            type: "slug",
            options: {
                source: 'title',
            },
            group: "general",
        },
        //TAGS
        {
            name: "publishedAt",
            type: "datetime",
            title: "Pulisert",
            description: "Dato for publisering av artikkelen",
            group: "byline",
            initialValue: new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        },  
        {
            ...seo,
            group: "seo"
        },
        //BLOCKCONTENT
        {
            ...blockContent,
            group: "general"
        },
        //BLOCKS
        {
            name: "test",
            title: "Overskriv bunnlinje",
            type: "boolean",
            group: "bottomline"
        }
    ],
    orderings: [
        {
            title: "Publiseringsdato (nyeste først)",
            name: "publishDateDesc",
            by: [{ field: "publishedAt", direction: 'desc'}],
        },
        {
            title: "Publiseringsdato (eldste først)",
            name: "publishDateAsc",
            by: [{ field: "publishedAt", direction: "asc"}],
        },
        {
            title: "Tittel (A-Å)",
            name: "titleAsc",
            by: [{ field: "title", direction: "asc"}],
        },
        {
            title: "Tittel (A-Å)",
            name: "titleDesc",
            by: [{ field: 'title', direction: "asc"}],
        }
    ]
})