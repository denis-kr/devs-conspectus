//learn about the line below
import { readFile } from "node:fs/promises";
// import { notFound } from "next/navigation";
//TODo is it too large?
import Markdown from "react-markdown";

export default async function Blog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let content = "";

  //TODO learn how this readFile works, why use utf-8???
  //TODO probably add error handling??
  try {
    content = await readFile(`./blogs/${id}.md`, "utf-8");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    // console.log(e);
    //TODO add it back
    // if (e.code === "ENOENT") {
    //   notFound()
    // }
  }

  // console.log(content, "content");

  return <Markdown>{content}</Markdown>;
}
