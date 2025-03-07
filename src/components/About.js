import React from 'react'

export default function About(props) {
  return (
    <div className={` m-2 text-${props.mode === `light` ? `light` : `dark`
    } `}>

        <h1 className='my-3'>About us</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore accusamus aperiam recusandae, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam excepturi eaque enim odit asperiores, voluptatibus quia quos, exercitationem quae quam nesciunt aspernatur et ratione repudiandae distinctio autem suscipit sapiente dolorum? dolor porro inventore est dolore magnam. Nam, natus, voluptatem saepe ex porro, quibusdam voluptates ad dolor nostrum delectus tempore assumenda ab corrupti fugiat. Porro vitae ducimus natus dicta molestias, fuga provident quasi quaerat, hic repellat nostrum maiores neque perferendis reiciendis rerum architecto iure voluptate tempore blanditiis obcaecati aliquid. Ratione a explicabo, cupiditate ipsum dignissimos assumenda quos quibusdam eius dolorum possimus, nam animi totam, consequatur aliquam ipsam aspernatur. Praesentium neque voluptatum sunt corrupti similique facilis maiores aliquam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rem eveniet voluptatem numquam id adipisci autem libero, reprehenderit impedit quaerat blanditiis debitis aperiam quas dollore Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt repudiandae earum corrupti veniam possimus velit, sequi ratione aperiam laborum iusto natus sit veritatis maiores tempora, quos ad distinctio laudantium.ores doloribus quo hic, praesentium corrupti aut! Nobis inventore necessitatibus neque nostrum. Eos facere earum voluptatum quasi saepe qui iusto!</p>
    </div>
  )
}
