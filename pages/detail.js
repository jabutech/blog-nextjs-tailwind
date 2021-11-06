import Head from "next/head";
import Container from "../components/organisms/Container";
import Layout from "../components/organisms/Layout";
import PostAuthor from "../components/organisms/PostAuthor";
import PostMetaTitle from "../components/organisms/PostMetaTitle";

export default function detail() {
  return (
    <Layout>
      <Head>
        <title>Detail &mdash; Jabutech</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle
            category="UI Design"
            date="July 2, 2021"
            title="Understading color theory: the color whell and finding complementary color"
            center
          />
          <PostAuthor
            authorName="Leslie Alexander"
            authorAvatar="/img/author-1.png"
            authorJob="UI Designer"
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <img
            src="/img/detail-image.png"
            alt="detail-image"
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:w-8/12  w-full mx-auto leading-relaxed">
          <p className="text-xl mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nisi
            id nulla in, amet adipisci possimus dolores impedit ut repellat? Id
            modi doloremque explicabo. Sapiente numquam beatae sunt! Error,
            voluptates!
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            dolorem voluptate rem sit? Animi saepe sequi harum inventore unde ab
            dolorum enim, aut soluta! Distinctio praesentium atque quas nesciunt
            accusantium? Dignissimos sit nostrum, earum fugiat, labore
            reprehenderit placeat fuga, quidem quos inventore corrupti iste
            vitae repellendus maxime provident laboriosam necessitatibus vero
            optio neque. Blanditiis, nisi placeat aliquid facere voluptates
            architecto!
          </p>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ea dicta minus commodi veniam quas, enim impedit, hic, atque totam
            odit consequuntur nisi. Officiis velit quia hic maxime architecto
            ducimus? Eligendi sed, tempora quam nemo natus sunt quo neque quod
            atque reiciendis voluptas nesciunt praesentium. Sit, nisi ipsa quod
            dolore quos ex, hic voluptatibus expedita possimus quasi veritatis
            ducimus laboriosam.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
