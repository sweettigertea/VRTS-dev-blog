import React from "react";
// import { imgPlaceholder } from "../assets/exportAssets";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

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
  const { documentId } = useParams();
  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { documentId: documentId },
  });

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

  let article = data.article;
  console.log("Article Details");
  console.log(article);

  // const content = [
  //   {
  //     type: 'paragraph',
  //     children: [{ type: 'text', text: 'A simple paragraph' }],
  //   },
  // ];

  // const articles=[
  //        {
  //             'id':1,
  //             'title':'Article Title',
  //             'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit fuga ab beatae molestias perspiciatis dolorum cum similique animi deserunt esse eligendi nam iste perferendis iure! Iure natus sint quia.',
  //             'coverImg':imgPlaceholder,
  //             'contents':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio libero vel sit ut consectetur eaque nemo iure quam hic velit veritatis voluptatem, provident molestiae neque aspernatur totam qui quod laudantium? Excepturi deleniti, inventore delectus quod exercitationem distinctio cumque dignissimos esse fugiat aliquid voluptatum corrupti, facere aut vero necessitatibus aspernatur in? Tempore dolor ducimus odit accusantium eveniet eum ipsum quisquam harum minus tenetur. Reiciendis magnam tenetur tempora et quas id, aut repellat ad sapiente ea sint! Consequatur ipsam quisquam delectus deleniti illo unde, adipisci quibusdam dolor distinctio facere officiis. Possimus error veniam voluptatum ut odio culpa? Soluta sapiente dolor similique quae facilis magni, a quo, inventore tempora minima molestias odio id sit quibusdam dolore autem expedita delectus sed nisi fugit? Ipsum neque corrupti accusamus ea molestias laudantium obcaecati ratione alias aliquid autem, numquam excepturi molestiae labore sed nisi harum, architecto enim, dignissimos illum vero iusto sit magni error quis. Ad iure nostrum ab doloremque. Explicabo autem velit laudantium minus minima, quidem vitae quas animi corrupti veritatis. Corporis aperiam libero esse quisquam, doloremque nostrum quis iste ut autem earum consequuntur, unde quibusdam! At incidunt architecto sequi obcaecati, officiis officia atque. Reprehenderit, quas autem, est exercitationem molestiae fugit tempore omnis aspernatur quibusdam cumque deleniti numquam! Reiciendis ipsa iusto nihil ad soluta? Hic sed numquam, vero nobis quam debitis sint soluta dolores accusamus quibusdam natus minima quas id fugit. Officia adipisci assumenda magnam fuga, ipsam illo ad deserunt neque dolor, esse facere, suscipit debitis autem officiis odio. Tempora, dolore rerum beatae omnis iure architecto maiores in ullam quo itaque dolores hic corporis tempore provident ut similique sint veritatis debitis voluptatem harum non illo! Officia, culpa aliquam? Explicabo impedit dolores delectus ipsum quibusdam maxime repudiandae laboriosam, tenetur veritatis repellat adipisci nemo dolorem tempore mollitia exercitationem perferendis amet incidunt laborum, soluta omnis maiores sunt. Illum provident vel unde consequuntur a, nobis cum possimus commodi, aperiam, reprehenderit ipsa suscipit maxime corporis reiciendis eum consequatur nam. Hic, perferendis ea repudiandae earum labore enim voluptatem odio veniam totam nisi accusantium, eum esse doloribus molestiae nobis cum eligendi nihil maxime pariatur unde reiciendis? Eaque animi natus est nulla. Officia mollitia, sint architecto ipsa cupiditate quod error voluptates neque ea quia. Neque nesciunt, maiores iusto molestiae repellat tempora doloremque ab dignissimos voluptatum qui. Molestiae minima eos, nihil rem dignissimos quis quod nemo aperiam libero sed vitae incidunt eius nam cumque atque suscipit adipisci dolore. Aliquam, impedit. Officiis quos reprehenderit pariatur minima deleniti maxime dolorem, numquam ducimus eius hic iste nulla nostrum nihil quam quae quas sapiente consequatur cumque commodi aliquam rem perspiciatis eaque! Earum dolor iure ducimus aut ullam! Odit a ad architecto ab praesentium vero quis quisquam facilis deserunt pariatur? Dignissimos nam aspernatur obcaecati. Natus, sapiente. Magnam alias assumenda odit magni ratione adipisci, ducimus itaque voluptatem necessitatibus quaerat incidunt. Nesciunt, nemo quibusdam! Voluptatum exercitationem voluptatem pariatur iste. Quia, doloribus explicabo temporibus recusandae nisi voluptatibus. Facilis magni culpa debitis numquam ab qui beatae saepe architecto ipsam, atque asperiores? Doloremque ad quo quos, sed tempore at incidunt numquam ipsum quod quisquam?',
  //             'authorName':"Author Name",
  //             'authorImg':imgPlaceholder,
  //             'authorDesc':'Author Description',
  //         },
  //         {
  //             'id':2,
  //             'title':'Article Title',
  //             'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit fuga ab beatae molestias perspiciatis dolorum cum similique animi deserunt esse eligendi nam iste perferendis iure! Iure natus sint quia.',
  //             'coverImg':imgPlaceholder,
  //             'contents':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio libero vel sit ut consectetur eaque nemo iure quam hic velit veritatis voluptatem, provident molestiae neque aspernatur totam qui quod laudantium? Excepturi deleniti, inventore delectus quod exercitationem distinctio cumque dignissimos esse fugiat aliquid voluptatum corrupti, facere aut vero necessitatibus aspernatur in? Tempore dolor ducimus odit accusantium eveniet eum ipsum quisquam harum minus tenetur. Reiciendis magnam tenetur tempora et quas id, aut repellat ad sapiente ea sint! Consequatur ipsam quisquam delectus deleniti illo unde, adipisci quibusdam dolor distinctio facere officiis. Possimus error veniam voluptatum ut odio culpa? Soluta sapiente dolor similique quae facilis magni, a quo, inventore tempora minima molestias odio id sit quibusdam dolore autem expedita delectus sed nisi fugit? Ipsum neque corrupti accusamus ea molestias laudantium obcaecati ratione alias aliquid autem, numquam excepturi molestiae labore sed nisi harum, architecto enim, dignissimos illum vero iusto sit magni error quis. Ad iure nostrum ab doloremque. Explicabo autem velit laudantium minus minima, quidem vitae quas animi corrupti veritatis. Corporis aperiam libero esse quisquam, doloremque nostrum quis iste ut autem earum consequuntur, unde quibusdam! At incidunt architecto sequi obcaecati, officiis officia atque. Reprehenderit, quas autem, est exercitationem molestiae fugit tempore omnis aspernatur quibusdam cumque deleniti numquam! Reiciendis ipsa iusto nihil ad soluta? Hic sed numquam, vero nobis quam debitis sint soluta dolores accusamus quibusdam natus minima quas id fugit. Officia adipisci assumenda magnam fuga, ipsam illo ad deserunt neque dolor, esse facere, suscipit debitis autem officiis odio. Tempora, dolore rerum beatae omnis iure architecto maiores in ullam quo itaque dolores hic corporis tempore provident ut similique sint veritatis debitis voluptatem harum non illo! Officia, culpa aliquam? Explicabo impedit dolores delectus ipsum quibusdam maxime repudiandae laboriosam, tenetur veritatis repellat adipisci nemo dolorem tempore mollitia exercitationem perferendis amet incidunt laborum, soluta omnis maiores sunt. Illum provident vel unde consequuntur a, nobis cum possimus commodi, aperiam, reprehenderit ipsa suscipit maxime corporis reiciendis eum consequatur nam. Hic, perferendis ea repudiandae earum labore enim voluptatem odio veniam totam nisi accusantium, eum esse doloribus molestiae nobis cum eligendi nihil maxime pariatur unde reiciendis? Eaque animi natus est nulla. Officia mollitia, sint architecto ipsa cupiditate quod error voluptates neque ea quia. Neque nesciunt, maiores iusto molestiae repellat tempora doloremque ab dignissimos voluptatum qui. Molestiae minima eos, nihil rem dignissimos quis quod nemo aperiam libero sed vitae incidunt eius nam cumque atque suscipit adipisci dolore. Aliquam, impedit. Officiis quos reprehenderit pariatur minima deleniti maxime dolorem, numquam ducimus eius hic iste nulla nostrum nihil quam quae quas sapiente consequatur cumque commodi aliquam rem perspiciatis eaque! Earum dolor iure ducimus aut ullam! Odit a ad architecto ab praesentium vero quis quisquam facilis deserunt pariatur? Dignissimos nam aspernatur obcaecati. Natus, sapiente. Magnam alias assumenda odit magni ratione adipisci, ducimus itaque voluptatem necessitatibus quaerat incidunt. Nesciunt, nemo quibusdam! Voluptatum exercitationem voluptatem pariatur iste. Quia, doloribus explicabo temporibus recusandae nisi voluptatibus. Facilis magni culpa debitis numquam ab qui beatae saepe architecto ipsam, atque asperiores? Doloremque ad quo quos, sed tempore at incidunt numquam ipsum quod quisquam?',
  //             'authorName':"Author Name",
  //             'authorImg':imgPlaceholder,
  //             'authorDesc':'Author Description',
  //         },
  //         {
  //             'id':3,
  //             'title':'Article Title',
  //             'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit fuga ab beatae molestias perspiciatis dolorum cum similique animi deserunt esse eligendi nam iste perferendis iure! Iure natus sint quia.',
  //             'coverImg':imgPlaceholder,
  //             'contents':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio libero vel sit ut consectetur eaque nemo iure quam hic velit veritatis voluptatem, provident molestiae neque aspernatur totam qui quod laudantium? Excepturi deleniti, inventore delectus quod exercitationem distinctio cumque dignissimos esse fugiat aliquid voluptatum corrupti, facere aut vero necessitatibus aspernatur in? Tempore dolor ducimus odit accusantium eveniet eum ipsum quisquam harum minus tenetur. Reiciendis magnam tenetur tempora et quas id, aut repellat ad sapiente ea sint! Consequatur ipsam quisquam delectus deleniti illo unde, adipisci quibusdam dolor distinctio facere officiis. Possimus error veniam voluptatum ut odio culpa? Soluta sapiente dolor similique quae facilis magni, a quo, inventore tempora minima molestias odio id sit quibusdam dolore autem expedita delectus sed nisi fugit? Ipsum neque corrupti accusamus ea molestias laudantium obcaecati ratione alias aliquid autem, numquam excepturi molestiae labore sed nisi harum, architecto enim, dignissimos illum vero iusto sit magni error quis. Ad iure nostrum ab doloremque. Explicabo autem velit laudantium minus minima, quidem vitae quas animi corrupti veritatis. Corporis aperiam libero esse quisquam, doloremque nostrum quis iste ut autem earum consequuntur, unde quibusdam! At incidunt architecto sequi obcaecati, officiis officia atque. Reprehenderit, quas autem, est exercitationem molestiae fugit tempore omnis aspernatur quibusdam cumque deleniti numquam! Reiciendis ipsa iusto nihil ad soluta? Hic sed numquam, vero nobis quam debitis sint soluta dolores accusamus quibusdam natus minima quas id fugit. Officia adipisci assumenda magnam fuga, ipsam illo ad deserunt neque dolor, esse facere, suscipit debitis autem officiis odio. Tempora, dolore rerum beatae omnis iure architecto maiores in ullam quo itaque dolores hic corporis tempore provident ut similique sint veritatis debitis voluptatem harum non illo! Officia, culpa aliquam? Explicabo impedit dolores delectus ipsum quibusdam maxime repudiandae laboriosam, tenetur veritatis repellat adipisci nemo dolorem tempore mollitia exercitationem perferendis amet incidunt laborum, soluta omnis maiores sunt. Illum provident vel unde consequuntur a, nobis cum possimus commodi, aperiam, reprehenderit ipsa suscipit maxime corporis reiciendis eum consequatur nam. Hic, perferendis ea repudiandae earum labore enim voluptatem odio veniam totam nisi accusantium, eum esse doloribus molestiae nobis cum eligendi nihil maxime pariatur unde reiciendis? Eaque animi natus est nulla. Officia mollitia, sint architecto ipsa cupiditate quod error voluptates neque ea quia. Neque nesciunt, maiores iusto molestiae repellat tempora doloremque ab dignissimos voluptatum qui. Molestiae minima eos, nihil rem dignissimos quis quod nemo aperiam libero sed vitae incidunt eius nam cumque atque suscipit adipisci dolore. Aliquam, impedit. Officiis quos reprehenderit pariatur minima deleniti maxime dolorem, numquam ducimus eius hic iste nulla nostrum nihil quam quae quas sapiente consequatur cumque commodi aliquam rem perspiciatis eaque! Earum dolor iure ducimus aut ullam! Odit a ad architecto ab praesentium vero quis quisquam facilis deserunt pariatur? Dignissimos nam aspernatur obcaecati. Natus, sapiente. Magnam alias assumenda odit magni ratione adipisci, ducimus itaque voluptatem necessitatibus quaerat incidunt. Nesciunt, nemo quibusdam! Voluptatum exercitationem voluptatem pariatur iste. Quia, doloribus explicabo temporibus recusandae nisi voluptatibus. Facilis magni culpa debitis numquam ab qui beatae saepe architecto ipsam, atque asperiores? Doloremque ad quo quos, sed tempore at incidunt numquam ipsum quod quisquam?',
  //             'authorName':"Author Name",
  //             'authorImg':imgPlaceholder,
  //             'authorDesc':'Author Description',
  //         },
  //     ]

  return (
    <div className="w-full bg-[#f9f9f9] pb-10">
      <div className="mx-auto max-w-[1240px] pt-4">
        <div className="flex flex-col space-y-6 items-center mx-3">
          {/* <div className="relative w-full rounded-xl bg-white p-2 drop-shadow-md">
            Index Outline
          </div> */}
          <div className="">
            <img
              src={"http://172.27.72.25:1337" + article.cover.url}
              alt="Image Cover Placeholderrr"
              className="max-h-100 w-full bg-gray-300 object-cover rounded-lg"
            />
            <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
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
            <div className="prose max-w-3xl pt-6">
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
