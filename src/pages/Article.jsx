import React from 'react'
import { imgPlaceholder } from "../assets/exportAssets";
import { useParams } from 'react-router-dom';

const Article = ({ArticlesTest}) => {
  
  const {id}=useParams()

  let article={}
  if(article){
    let arr = ArticlesTest.data.filter(article=> article.id==id)
    article=arr[0]
  } else {
    article={}
  }
  console.log('Article Details')
  
  console.log(article)

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
    
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto pt-4'>

        <div className='grid lg:grid-cols-3 md:gap-4 p-2'>
          <div className='col-span-3 p-1 bg-white rounded-xl'>
            <img src={imgPlaceholder} alt="Author Image" />
            <h1>{article.author.name}</h1>
            <div>
              {article.author.email}
            </div>
          </div>
          <div className='col-span-3 lg:col-span-1 bg-white rounded-xl overflow-hidden drop-shadow-md pl-5 pt-5'>
            Index Outline
          </div>
          <div className='col-span-2 gap-2'>
            <img src={'http://172.27.72.25:1337'+ article.cover.url} alt="Image Cover Placeholderrr" className='h-56 w-full object-cover bg-gray-300'/>
            <h1 className='font-bold text-2xl my-1 pt-5'>{article.title} {id}</h1>
            <div className='pt-2'>
              <p>{article.description}</p>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Article
