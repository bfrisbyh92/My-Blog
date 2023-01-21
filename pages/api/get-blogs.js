import * as matter from "gray-matter";

const { join, resolve } = require("path");

export default function getBlog(req,res) {
    const {blogUrl} = req.body;

    const resolvedPath = resolve(process.cwd(), "blogs");

    try {
        const file = matter.read(join(resolvedPath, `/${blogUrl}.md`));
        res.status(200).send({
            html: file.content,
            metadata: file.data
        })
    }    catch (e) {
        res.status(500).send(e)
    }
}