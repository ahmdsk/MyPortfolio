import matter from "gray-matter";
import fs from "fs";
import path from "path";

type Items = {
  [key: string]: any | string;
};

type Post = {
  data: {
    [key: string]: string;
  };
  content: string;
  category?: string[];
};

const POSTS_PATH = path.join(process.cwd(), "posts");

function getPostsFilePath(): string[] {
  return fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));
}

export function getPost(slug: string): Post {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContents);

  return { data, content };
}

export function getPostItems(filePath: string, fileds: string[]): Items {
  const slug = filePath.replace(/\.mdx?$/, "");
  const { data } = getPost(slug);

  const items: Items = {};

  fileds.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fileds: string[]): Items[] {
  const filePaths = getPostsFilePath();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fileds))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
