import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
// import { imgPlaceholder } from "../assets/exportAssets";
import { sttAvatar } from "../assets/exportAssets";

// GraphQL query to fetch articles data
const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      documentId
      slug
      title
      description
      cover {
        url
      }
      author {
        name
        avatar {
          url
        }
        description
      }
      content
    }
  }
`;

export default function Homepage() {
  // Execute the GraphQL query
  const { loading, error, data } = useQuery(GET_ARTICLES);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errorrr...</p>;
  if (!data) return null;

  console.log("Homepage");
  // console.log(ArticlesTest)
  // console.log('gql')
  console.log(data.articles);

  return (
    <div className="h-full bg-[#f9f9f9] py-[20px]">
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col space-y-6">
        <div className="flex flex-col items-center px-4 space-y-6 wrap-anywhere">
          {/* Author profile section */}
          <div className="flex" >
            <img
              src={sttAvatar}
              alt="User Profile Picture"
              className="max-h-80 rounded-xl"
            />
          </div>
          <div>
            <h1 className="text-4xl">SweetTigerTea's DevBlog</h1>
            <div className="mt-4 prose">

              {/* Author bio */}
              <p>
                A passionate Computer Science student with a strong foundation in technology 
                and its potential to drive positive change. 
              </p>

	            <p>
                I take pride in continuously learning and growing both 
                personally and professionally. My capstone project using the hybrid-Agile software development 
                life-cycle demonstrates my ability to combine technical expertise with innovative thinking, 
                while my home-lab setup with Proxmox, Docker, Nginx, Nextcloud, and others showcase my commitment 
                and dedication to learning and keeping up with cutting-edge technologies for personal and professional development.
              </p>

              <p>
                Please browse around the blog to discover articles and insights on various topics related to computer science, technology, and development!
              </p>

              </div>

              {/* Development alert */}
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-8 rounded-md shadow-md">
                <p className="font-bold">Alert:</p>
                <p>This site is still currently in development. Expect some errorrrs!</p>
              </div>
          </div>
        </div>

        {/* Recent articles section */}
        <div className="relative px-4 wrap-anywhere">
          <div className="flex flex-wrap justify-between py-4">
            <h2 className="text-3xl">Recent Articles:</h2>
            {/* Placeholder for future sorting functionality */}
            {/* <p>Sort by: Category</p> */}
          </div>
          {/* Grid of article cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
            {data.articles.map((article) => (
              <Link
                key={article.documentId}
                to={`/articles/${article.documentId}`}
              >
                {/* Article card */}
                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md h-[380px]">
                  {/* Article cover image */}
                  <img
                    src={"http://172.27.72.25:1337" + article.cover.url}
                    alt="Image Placeholdersss"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    {/* Article title */}
                    <h3 className="font-bold text-xl my-1 line-clamp-2">{article.title}</h3>
                    {/* Article description */}
                    <p className="text-gray-600 line-clamp-2">
                      {article.description}
                    </p>
                    {/* Author info */}
                    <div className="flex items-center pt-4 absolute bottom-4">
                      <img
                        src={"http://172.27.72.25:1337" + article.author.avatar.url}
                        alt={article.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span>
                        {article.author.name}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
