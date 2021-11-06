import { useState } from "react";
import CardPost from "../components/organisms/CardPost";
import Container from "../components/organisms/Container";
import Layout from "../components/organisms/Layout";
import SectionHeader from "../components/organisms/SectionHeader";
import mockPosts from "../utils/posts.json";
import Head from "next/head";

export default function posts() {
  // state for posts data
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Jabutech</title>
      </Head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {posts.length < 1 ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">No result</h2>
            <p className="text-xl text-white/60 md:w-6/2 w-full mx-auto">
              Tidak ada post yang cocok !
            </p>
          </div>
        ) : (
          <div className="flex -mx-2 flex-wrap mt-6">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
