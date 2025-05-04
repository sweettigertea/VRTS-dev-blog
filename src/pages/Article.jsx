import React from "react";
// import { imgPlaceholder } from "../assets/exportAssets";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// GraphQL query to fetch article details
const GET_ARTICLE = gql`
  query GetArticle($documentId: ID!) {
    article(documentId: $documentId) {
      documentId
      slug
      title
      description
      cover {
        url
      }
      author {
        name
        email
        avatar {
          url
        }
        description
      }
      content
    }
  }
`;

const Article = () => {
  // Extract documentId from URL parameters
  const { documentId } = useParams();
  // Fetch article data using Apollo Client
  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { documentId: documentId },
  });

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errorrr...</p>;
  if (!data) return null;

  // let article={}
  // if(article){
  //   let arr = data.article.filter(article=> article.slug==slug)
  //   article=arr[0]
  // } else {
  //   article={}
  // }

  // Extract article data from the query result
  let article = data.article;
  console.log("Article Details", article);

  return (
    <div className="w-full bg-[#f9f9f9] pb-10">
      <div className="mx-auto max-w-[1240px] pt-4">
        <div className="flex flex-col space-y-6 items-center mx-3">
          {/* <div className="relative w-full rounded-xl bg-white p-2 drop-shadow-md">
            Index Outline
          </div> */}
          <div className="">
            {/* Article cover image */}
            <img
              src={"http://172.27.72.25:1337" + article.cover.url}
              alt="Image Cover Placeholderrr"
              className="max-h-100 w-full bg-gray-300 object-cover rounded-lg"
            />
            {/* Article title */}
            <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
              {/* Author information */}
              <div className="flex flex-wrap items-center space-x-4 mt-4">
                <img 
                  src={"http://172.27.72.25:1337" + article.author.avatar.url} 
                  alt={article.author.name}
                  className="size-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{article.author.name}</h2>
                  <p className="text-gray-600">{article.author.email}</p>
                  <p className="text-sm text-gray-500 mt-1">{article.author.description}</p>
                </div>
            </div>
            {/* Article content */}
            <div className="prose max-w-3xl pt-6 prose-p:wrap-anywhere prose-p:indent-4">
              {/* <BlocksRenderer let content={content} /> */}
              <BlocksRenderer let content={article.content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
