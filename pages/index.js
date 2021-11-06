import { useState } from "react";
import Layout from "../components/organisms/Layout";
import CardPost from "../components/organisms/CardPost";
import Container from "../components/organisms/Container";
import FeaturedPost from "../components/organisms/FeaturedPost";
import mockPosts from "../utils/posts.json";
import Head from "next/head";

export default function Home() {
  // state for posts data
  const [posts, setPosts] = useState(mockPosts);

  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Layout>
        <Head>
          <title>Home &mdash; Jabutech</title>
        </Head>
        <Container>
          <FeaturedPost />
          <div className="flex -mx-2 flex-wrap mt-6">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </div>
  );
}
