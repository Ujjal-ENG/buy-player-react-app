import React from 'react';

const Card = () => {
    return (
        <div class="card card-side bg-base-100 shadow-xl">
            <div class="w-1/3 h-2/4">
                <img src="./images/bike-1.png" class="w-full h-full" alt="" />
            </div>
            <div class="card-body w-[67%] h-2/5">
                <h2 class="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore.</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iure eius minima. Hic exercitationem dolor voluptatibus tempora laborum doloremque esse error optio voluptas
                    repellat facere minus? Culpa minima similique minus consectetur ipsum odit voluptatem ab et eos, eveniet, provident quia optio velit accusantium doloremque deserunt fugit totam
                    quidem quas molestias dolor tempore. Incidunt illum in, suscipit explicabo distinctio dolor perferendis pariatur debitis eaque provident obcaecati expedita quod voluptate quos,
                    laborum cum inventore totam repudiandae. Commodi, officia voluptas.
                </p>
                <div class="card-actions justify-end h-[10%]">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
