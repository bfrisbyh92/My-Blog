import * as matter from "gray-matter";

const { join, resolve } = require("path");
const fs = require("fs");

export default function getBlog(req,res) {
    const resolvedPath = resolve(process.cwd(), "blogs");
    let files = [];

    try {
        fs.readdirSync(resolvedPath).forEach((file) => {
            const { data } = matter.read(join(resolvedPath, `/${file}`));
            files.push({
                file: file.split(".")[0],
                metadata: {
                    title: data.title,
                    publishedOn: data.publishedOn,
                    excerpt: data.excerpt,
                    readingTime: data.readingTime,
                },
            });
        });

        files = files.sort(function(a, b){
            return new Date(b.metadata.publishedOn) - new Date(a.metadata.publishedOn);
        })

        res.status(200).send(files)
    }    catch (e) {
        res.status(500).send(e)
    }
}