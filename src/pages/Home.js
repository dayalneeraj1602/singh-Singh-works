import React, { useEffect, useState } from "react";
import "../styles/Home.css";

export const info = ` Est. 2001, Singh Engineering Works in Noida crafts quality
Industrial Furnaces. As a Sole Proprietorship, we prioritize
standards, offering competitive rates. Led by Prabhudayal Singh,
we've secured a strong market position.`;

const Home = () => {
  const [infoText, setInfoText] = useState("");

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (infoText.length !== info.length) {
        setInfoText(infoText + info[infoText.length]);

        if (infoText.length === info.length) {
          clearInterval(intervalId);
          setInfoText(info);
        }
      }
    }, 6);

    return () => clearInterval(intervalId);
  }, [infoText]);

  return (
    <div className="home">
      <section className="banner ">
        <div className="overlay"></div>
        <div className="punch-line">
          <h1 className="text-light">Innovating Furnaces </h1>
          <h1>Since 2001.</h1>
          <p className="info text-start mb-5" style={{ height: "3rem" }}>
            {infoText}
          </p>
          <div className="arrow-down">
            <img src="/down-arrow-long.png.webp" alt="" />
          </div>
        </div>
      </section>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        dolores porro unde officia voluptatibus totam consectetur enim vero aut
        ratione molestias expedita saepe, tempore accusamus harum aliquam dolor
        similique? Esse dicta aliquid sit impedit, iure temporibus error
        blanditiis ipsa nobis asperiores cupiditate, mollitia doloribus magni
        perferendis deserunt! Quidem earum officia dolorum veritatis sunt illum
        vitae itaque architecto neque, excepturi adipisci nobis consequuntur rem
        ad qui illo. Blanditiis laboriosam molestiae voluptatibus consectetur
        nihil maxime omnis saepe illo expedita excepturi dolorum nam distinctio
        ex, laborum ab commodi in a qui? Cupiditate laboriosam quidem
        perspiciatis minima iusto soluta error at eum, excepturi in minus quia
        necessitatibus unde eaque doloremque quas eveniet, culpa quasi
        voluptatum vel. Dolorem ipsa, ad reiciendis nemo necessitatibus possimus
        dolore nihil sapiente magni. Nihil saepe hic eligendi pariatur labore
        beatae nostrum, rerum fuga eos necessitatibus autem alias, inventore
        nesciunt ad voluptatibus nulla tenetur? Nostrum at magni fugiat delectus
        quia eligendi mollitia. Expedita, quod quaerat. Quisquam modi aut
        molestias labore consequuntur quo fugiat culpa. Repellendus, possimus
        dolor dignissimos, ut ipsum itaque aliquam odit nulla nihil libero
        minus? Enim, iusto recusandae. Magnam, nostrum? Odit labore cupiditate,
        vitae quae fugit quos saepe corporis harum, aut eaque repellat cumque
        fuga tenetur explicabo repellendus incidunt? Quam dolorem cupiditate
        voluptates sint corporis libero incidunt vitae quia! Facere, suscipit
        repellendus at, explicabo aliquam amet error harum doloremque, esse
        nostrum inventore numquam tenetur optio quaerat eligendi perferendis.
        Officiis inventore ratione, laudantium cupiditate esse, sequi ad totam,
        nihil at excepturi aspernatur consequatur. Facilis, magni provident quas
        suscipit, quae fugiat nostrum nesciunt reprehenderit maiores porro
        doloribus deserunt esse, consequuntur est enim amet. Enim
        exercitationem, quo similique architecto, fugiat voluptas minus
        explicabo rerum repudiandae suscipit, incidunt itaque. Quae repudiandae
        dolore commodi porro delectus, nesciunt neque corrupti? Nisi possimus a
        quis quam rem nihil incidunt accusantium ullam quisquam numquam maiores
        facere voluptatibus porro assumenda consectetur optio, dignissimos
        sapiente modi expedita. Laborum facere sunt nesciunt, possimus
        reprehenderit eos impedit odio nemo iste quisquam nulla laudantium
        repellat ratione inventore nam, consequuntur voluptas ipsa expedita!
        Odit ducimus laboriosam necessitatibus quas eius. Sapiente iste sed
        suscipit aspernatur blanditiis! Libero cupiditate reprehenderit
        explicabo quo tempore laborum in eligendi delectus voluptatem iusto hic
        quas possimus beatae quae odit quis est et odio, neque saepe assumenda
        autem accusamus vitae tempora. Ea dolore mollitia molestiae nulla, eius
        fugiat error voluptatibus, doloribus officiis, provident sunt unde nobis
        excepturi delectus id rem? Totam mollitia, praesentium eius quos
        laboriosam dignissimos sed tempore reprehenderit nihil temporibus
        dolorum velit eligendi animi ducimus dicta eveniet vel earum vitae
        itaque aut at non nostrum asperiores perspiciatis? Eaque nulla, optio
        animi autem cumque dolor sit enim tempora praesentium ipsum quas neque
        recusandae eos modi dolorem quia quidem! Repellendus asperiores
        cupiditate architecto, eos quas nemo repellat! Earum ullam amet
        necessitatibus omnis praesentium odio tempore, quas voluptates possimus
        ipsam commodi dolorem, ratione optio quae expedita. Fuga dolorem, nulla
        sint illum facere suscipit ipsam ullam libero quis nostrum aut eaque
        excepturi accusamus eveniet incidunt molestias soluta! Beatae
        voluptates, veniam et, soluta ullam quisquam ipsum excepturi nobis
        maiores illo minima at. Exercitationem?
      </section>
    </div>
  );
};

export default Home;
