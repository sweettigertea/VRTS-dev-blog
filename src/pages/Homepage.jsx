import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
// import { imgPlaceholder } from "../assets/exportAssets";
import { sttAvatar } from "../assets/exportAssets";

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
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errorrr...</p>;
  if (!data) return null;

  console.log("Homepage");
  // console.log(ArticlesTest)
  // console.log('gql')
  console.log(data.articles);
  // const articles=[
  //     {
  //         'id':1,
  //         'title':'Article Title',
  //         'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit fuga ab beatae molestias perspiciatis dolorum cum similique animi deserunt esse eligendi nam iste perferendis iure! Iure natus sint quia.',
  //         'coverImg':imgPlaceholder,
  //         'contents':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio libero vel sit ut consectetur eaque nemo iure quam hic velit veritatis voluptatem, provident molestiae neque aspernatur totam qui quod laudantium? Excepturi deleniti, inventore delectus quod exercitationem distinctio cumque dignissimos esse fugiat aliquid voluptatum corrupti, facere aut vero necessitatibus aspernatur in? Tempore dolor ducimus odit accusantium eveniet eum ipsum quisquam harum minus tenetur. Reiciendis magnam tenetur tempora et quas id, aut repellat ad sapiente ea sint! Consequatur ipsam quisquam delectus deleniti illo unde, adipisci quibusdam dolor distinctio facere officiis. Possimus error veniam voluptatum ut odio culpa? Soluta sapiente dolor similique quae facilis magni, a quo, inventore tempora minima molestias odio id sit quibusdam dolore autem expedita delectus sed nisi fugit? Ipsum neque corrupti accusamus ea molestias laudantium obcaecati ratione alias aliquid autem, numquam excepturi molestiae labore sed nisi harum, architecto enim, dignissimos illum vero iusto sit magni error quis. Ad iure nostrum ab doloremque. Explicabo autem velit laudantium minus minima, quidem vitae quas animi corrupti veritatis. Corporis aperiam libero esse quisquam, doloremque nostrum quis iste ut autem earum consequuntur, unde quibusdam! At incidunt architecto sequi obcaecati, officiis officia atque. Reprehenderit, quas autem, est exercitationem molestiae fugit tempore omnis aspernatur quibusdam cumque deleniti numquam! Reiciendis ipsa iusto nihil ad soluta? Hic sed numquam, vero nobis quam debitis sint soluta dolores accusamus quibusdam natus minima quas id fugit. Officia adipisci assumenda magnam fuga, ipsam illo ad deserunt neque dolor, esse facere, suscipit debitis autem officiis odio. Tempora, dolore rerum beatae omnis iure architecto maiores in ullam quo itaque dolores hic corporis tempore provident ut similique sint veritatis debitis voluptatem harum non illo! Officia, culpa aliquam? Explicabo impedit dolores delectus ipsum quibusdam maxime repudiandae laboriosam, tenetur veritatis repellat adipisci nemo dolorem tempore mollitia exercitationem perferendis amet incidunt laborum, soluta omnis maiores sunt. Illum provident vel unde consequuntur a, nobis cum possimus commodi, aperiam, reprehenderit ipsa suscipit maxime corporis reiciendis eum consequatur nam. Hic, perferendis ea repudiandae earum labore enim voluptatem odio veniam totam nisi accusantium, eum esse doloribus molestiae nobis cum eligendi nihil maxime pariatur unde reiciendis? Eaque animi natus est nulla. Officia mollitia, sint architecto ipsa cupiditate quod error voluptates neque ea quia. Neque nesciunt, maiores iusto molestiae repellat tempora doloremque ab dignissimos voluptatum qui. Molestiae minima eos, nihil rem dignissimos quis quod nemo aperiam libero sed vitae incidunt eius nam cumque atque suscipit adipisci dolore. Aliquam, impedit. Officiis quos reprehenderit pariatur minima deleniti maxime dolorem, numquam ducimus eius hic iste nulla nostrum nihil quam quae quas sapiente consequatur cumque commodi aliquam rem perspiciatis eaque! Earum dolor iure ducimus aut ullam! Odit a ad architecto ab praesentium vero quis quisquam facilis deserunt pariatur? Dignissimos nam aspernatur obcaecati. Natus, sapiente. Magnam alias assumenda odit magni ratione adipisci, ducimus itaque voluptatem necessitatibus quaerat incidunt. Nesciunt, nemo quibusdam! Voluptatum exercitationem voluptatem pariatur iste. Quia, doloribus explicabo temporibus recusandae nisi voluptatibus. Facilis magni culpa debitis numquam ab qui beatae saepe architecto ipsam, atque asperiores? Doloremque ad quo quos, sed tempore at incidunt numquam ipsum quod quisquam?',
  //         'authorName':"Author Name",
  //         'authorImg':imgPlaceholder,
  //         'authorDesc':'Author Description',
  //     },
  //     {
  //         'id':2,
  //         'title':'Article Title',
  //         'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit fuga ab beatae molestias perspiciatis dolorum cum similique animi deserunt esse eligendi nam iste perferendis iure! Iure natus sint quia.',
  //         'coverImg':imgPlaceholder,
  //         'contents':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio libero vel sit ut consectetur eaque nemo iure quam hic velit veritatis voluptatem, provident molestiae neque aspernatur totam qui quod laudantium? Excepturi deleniti, inventore delectus quod exercitationem distinctio cumque dignissimos esse fugiat aliquid voluptatum corrupti, facere aut vero necessitatibus aspernatur in? Tempore dolor ducimus odit accusantium eveniet eum ipsum quisquam harum minus tenetur. Reiciendis magnam tenetur tempora et quas id, aut repellat ad sapiente ea sint! Consequatur ipsam quisquam delectus deleniti illo unde, adipisci quibusdam dolor distinctio facere officiis. Possimus error veniam voluptatum ut odio culpa? Soluta sapiente dolor similique quae facilis magni, a quo, inventore tempora minima molestias odio id sit quibusdam dolore autem expedita delectus sed nisi fugit? Ipsum neque corrupti accusamus ea molestias laudantium obcaecati ratione alias aliquid autem, numquam excepturi molestiae labore sed nisi harum, architecto enim, dignissimos illum vero iusto sit magni error quis. Ad iure nostrum ab doloremque. Explicabo autem velit laudantium minus minima, quidem vitae quas animi corrupti veritatis. Corporis aperiam libero esse quisquam, doloremque nostrum quis iste ut autem earum consequuntur, unde quibusdam! At incidunt architecto sequi obcaecati, officiis officia atque. Reprehenderit, quas autem, est exercitationem molestiae fugit tempore omnis aspernatur quibusdam cumque deleniti numquam! Reiciendis ipsa iusto nihil ad soluta? Hic sed numquam, vero nobis quam debitis sint soluta dolores accusamus quibusdam natus minima quas id fugit. Officia adipisci assumenda magnam fuga, ipsam illo ad deserunt neque dolor, esse facere, suscipit debitis autem officiis odio. Tempora, dolore rerum beatae omnis iure architecto maiores in ullam quo itaque dolores hic corporis tempore provident ut similique sint veritatis debitis voluptatem harum non illo! Officia, culpa aliquam? Explicabo impedit dolores delectus ipsum quibusdam maxime repudiandae laboriosam, tenetur veritatis repellat adipisci nemo dolorem tempore mollitia exercitationem perferendis amet incidunt laborum, soluta omnis maiores sunt. Illum provident vel unde consequuntur a, nobis cum possimus commodi, aperiam, reprehenderit ipsa suscipit maxime corporis reiciendis eum consequatur nam. Hic, perferendis ea repudiandae earum labore enim voluptatem odio veniam totam nisi accusantium, eum esse doloribus molestiae nobis cum eligendi nihil maxime pariatur unde reiciendis? Eaque animi natus est nulla. Officia mollitia, sint architecto ipsa cupiditate quod error voluptates neque ea quia. Neque nesciunt, maiores iusto molestiae repellat tempora doloremque ab dignissimos voluptatum qui. Molestiae minima eos, nihil rem dignissimos quis quod nemo aperiam libero sed vitae incidunt eius nam cumque atque suscipit adipisci dolore. Aliquam, impedit. Officiis quos reprehenderit pariatur minima deleniti maxime dolorem, numquam ducimus eius hic iste nulla nostrum nihil quam quae quas sapiente consequatur cumque commodi aliquam rem perspiciatis eaque! Earum dolor iure ducimus aut ullam! Odit a ad architecto ab praesentium vero quis quisquam facilis deserunt pariatur? Dignissimos nam aspernatur obcaecati. Natus, sapiente. Magnam alias assumenda odit magni ratione adipisci, ducimus itaque voluptatem necessitatibus quaerat incidunt. Nesciunt, nemo quibusdam! Voluptatum exercitationem voluptatem pariatur iste. Quia, doloribus explicabo temporibus recusandae nisi voluptatibus. Facilis magni culpa debitis numquam ab qui beatae saepe architecto ipsam, atque asperiores? Doloremque ad quo quos, sed tempore at incidunt numquam ipsum quod quisquam?',
  //         'authorName':"Author Name",
  //         'authorImg':imgPlaceholder,
  //         'authorDesc':'Author Description',
  //     },
  //     {
  //         'id':3,
  //         'title':'Article Title',
  //         'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit fuga ab beatae molestias perspiciatis dolorum cum similique animi deserunt esse eligendi nam iste perferendis iure! Iure natus sint quia.',
  //         'coverImg':imgPlaceholder,
  //         'contents':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio libero vel sit ut consectetur eaque nemo iure quam hic velit veritatis voluptatem, provident molestiae neque aspernatur totam qui quod laudantium? Excepturi deleniti, inventore delectus quod exercitationem distinctio cumque dignissimos esse fugiat aliquid voluptatum corrupti, facere aut vero necessitatibus aspernatur in? Tempore dolor ducimus odit accusantium eveniet eum ipsum quisquam harum minus tenetur. Reiciendis magnam tenetur tempora et quas id, aut repellat ad sapiente ea sint! Consequatur ipsam quisquam delectus deleniti illo unde, adipisci quibusdam dolor distinctio facere officiis. Possimus error veniam voluptatum ut odio culpa? Soluta sapiente dolor similique quae facilis magni, a quo, inventore tempora minima molestias odio id sit quibusdam dolore autem expedita delectus sed nisi fugit? Ipsum neque corrupti accusamus ea molestias laudantium obcaecati ratione alias aliquid autem, numquam excepturi molestiae labore sed nisi harum, architecto enim, dignissimos illum vero iusto sit magni error quis. Ad iure nostrum ab doloremque. Explicabo autem velit laudantium minus minima, quidem vitae quas animi corrupti veritatis. Corporis aperiam libero esse quisquam, doloremque nostrum quis iste ut autem earum consequuntur, unde quibusdam! At incidunt architecto sequi obcaecati, officiis officia atque. Reprehenderit, quas autem, est exercitationem molestiae fugit tempore omnis aspernatur quibusdam cumque deleniti numquam! Reiciendis ipsa iusto nihil ad soluta? Hic sed numquam, vero nobis quam debitis sint soluta dolores accusamus quibusdam natus minima quas id fugit. Officia adipisci assumenda magnam fuga, ipsam illo ad deserunt neque dolor, esse facere, suscipit debitis autem officiis odio. Tempora, dolore rerum beatae omnis iure architecto maiores in ullam quo itaque dolores hic corporis tempore provident ut similique sint veritatis debitis voluptatem harum non illo! Officia, culpa aliquam? Explicabo impedit dolores delectus ipsum quibusdam maxime repudiandae laboriosam, tenetur veritatis repellat adipisci nemo dolorem tempore mollitia exercitationem perferendis amet incidunt laborum, soluta omnis maiores sunt. Illum provident vel unde consequuntur a, nobis cum possimus commodi, aperiam, reprehenderit ipsa suscipit maxime corporis reiciendis eum consequatur nam. Hic, perferendis ea repudiandae earum labore enim voluptatem odio veniam totam nisi accusantium, eum esse doloribus molestiae nobis cum eligendi nihil maxime pariatur unde reiciendis? Eaque animi natus est nulla. Officia mollitia, sint architecto ipsa cupiditate quod error voluptates neque ea quia. Neque nesciunt, maiores iusto molestiae repellat tempora doloremque ab dignissimos voluptatum qui. Molestiae minima eos, nihil rem dignissimos quis quod nemo aperiam libero sed vitae incidunt eius nam cumque atque suscipit adipisci dolore. Aliquam, impedit. Officiis quos reprehenderit pariatur minima deleniti maxime dolorem, numquam ducimus eius hic iste nulla nostrum nihil quam quae quas sapiente consequatur cumque commodi aliquam rem perspiciatis eaque! Earum dolor iure ducimus aut ullam! Odit a ad architecto ab praesentium vero quis quisquam facilis deserunt pariatur? Dignissimos nam aspernatur obcaecati. Natus, sapiente. Magnam alias assumenda odit magni ratione adipisci, ducimus itaque voluptatem necessitatibus quaerat incidunt. Nesciunt, nemo quibusdam! Voluptatum exercitationem voluptatem pariatur iste. Quia, doloribus explicabo temporibus recusandae nisi voluptatibus. Facilis magni culpa debitis numquam ab qui beatae saepe architecto ipsam, atque asperiores? Doloremque ad quo quos, sed tempore at incidunt numquam ipsum quod quisquam?',
  //         'authorName':"Author Name",
  //         'authorImg':imgPlaceholder,
  //         'authorDesc':'Author Description',
  //     },
  // ]

  return (
    <div className="h-full bg-[#f9f9f9] py-[20px]">
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col space-y-6">
        <div className="flex flex-col items-center px-4 space-y-6 wrap-anywhere">
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

              <p>
                A passionate Computer Science student with a strong foundation in technology 
                and its potential to drive positive change. 
              </p>

	            <p>
                Beyond professional achievements, I take pride in continuously learning and growing both 
                personally and professionally. My capstone project on a hybrid-Agile software development 
                life-cycle demonstrates my ability to combine technical expertise with innovative thinking, 
                while my home-lab setup with Proxmox, Docker, Nginx, Nextcloud, and others showcase my commitment 
                and dedication to learning and keeping up with cutting-edge technologies for personal and professional development.
              </p>

              </div>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4 rounded-md shadow-md">
                <p className="font-bold">Alert:</p>
                <p>This site is still currently in development. Expect some errorrrs!</p>
              </div>

          </div>
        </div>
        <div className="relative px-4 wrap-anywhere">
          <div className="flex flex-wrap justify-between py-4">
            <h2 className="text-3xl">Recent</h2>
            {/* <p>Sort by: Category</p> */}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
            {data.articles.map((article) => (
              <Link
                key={article.documentId}
                to={`/articles/${article.documentId}`}
              >
                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                  <img
                    src={"http://172.27.72.25:1337" + article.cover.url}
                    alt="Image Placeholdersss"
                    className="max-h-48 w-full object-cover"
                  />
                  <div className="p-8">
                    <h3 className="font-bold text-xl my-1">{article.title}</h3>
                    <p className="text-gray-600">
                      {article.description}
                    </p>
                    <div className="flex items-center pt-4">
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
