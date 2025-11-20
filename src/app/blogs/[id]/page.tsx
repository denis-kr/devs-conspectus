//learn about the line below
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { notFound } from "next/navigation";
//TODo is it too large?
import Markdown from "react-markdown";

export default async function Blog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let content = "";
  try {
    //todo understand how it grabs specifically /blogs/...md
    const pathToMarkdown = join(".", "blogs", `${id}.md`);
    content = await readFile(pathToMarkdown, "utf-8");
  } catch (e) {
    if (e instanceof Error && "code" in e && e.code === "ENOENT") {
      notFound();
    }
    // console.error("Error reading markdown file:", e);
  }

  return <Markdown>{content}</Markdown>;
}
