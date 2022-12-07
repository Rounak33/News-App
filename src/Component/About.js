import { Container, Row, Col } from "react-bootstrap"
import brandLogo from '../assests/brand-logo.png'


const About = () => {
   return (
      <Container style={{ textAlign: 'center' }}>
         <h1 className="display-4 mt-2 mb-4" >About us</h1>
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus veritatis repellendus corporis, quibusdam optio harum culpa voluptas exercitationem. A magnam totam cumque debitis, dicta impedit odio voluptatibus soluta, accusantium, porro enim libero adipisci? Autem nisi omnis odit, consectetur iusto molestias laborum cumque corporis laboriosam, rem nulla in earum! Voluptatum consequuntur dolor sequi quo culpa facilis commodi nulla, perspiciatis repudiandae hic ipsa. Sequi iure nesciunt nihil magnam necessitatibus. Repellat temporibus possimus fuga placeat ratione, libero ipsum culpa aspernatur laudantium. Aliquam omnis obcaecati repellendus officia tempore voluptates, esse eaque assumenda quae cupiditate quasi nostrum minus aliquid quod ad ullam. Officiis ipsum, fuga cum, dignissimos tempore explicabo porro consequatur eum modi praesentium, quidem voluptas! Esse quidem incidunt similique ea quia eos deleniti pariatur saepe perferendis quam a recusandae nesciunt amet porro odit sequi, dolor eligendi iusto quisquam? Molestias laboriosam mollitia doloribus odit recusandae a, impedit voluptatibus voluptate, ex at labore iusto. Illum distinctio dignissimos dolorem sit impedit maiores nam doloremque, omnis esse accusamus eius minus a, repellendus, consequatur est perferendis enim sint ea numquam odio et. Suscipit voluptas quis vel omnis amet! </p>
         <hr />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente repellendus deleniti a iure nihil, assumenda minima ut velit in sequi optio nulla, sed, ipsam amet quibusdam non ipsum blanditiis?</p>
         <hr />
         <Row>
            <Col md={5}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque iusto explicabo. Accusantium repudiandae optio ipsam fugiat nobis voluptates doloremque labore mollitia impedit inventore, cumque aliquam distinctio quam ex blanditiis pariatur, sit quibusdam omnis! Commodi nesciunt sunt qui officia nemo labore doloribus impedit dolorum consequuntur dolores dignissimos eaque aliquam vel odio odit iusto maxime, suscipit adipisci error officiis laborum provident. Architecto dignissimos sequi atque accusantium ex eveniet temporibus optio. Adipisci aut rerum soluta vel nihil! Debitis quas laudantium recusandae vitae?
            </Col>

            <Col md={2}>
               <img src={brandLogo} alt="brand" style={{ height: "200px" }} />
            </Col>

            <Col md={5}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque iusto explicabo. Accusantium repudiandae optio ipsam fugiat nobis voluptates doloremque labore mollitia impedit inventore, cumque aliquam distinctio quam ex blanditiis pariatur, sit quibusdam omnis! Commodi nesciunt sunt qui officia nemo labore doloribus impedit dolorum consequuntur dolores dignissimos eaque aliquam vel odio odit iusto maxime, suscipit adipisci error officiis laborum provident. Architecto dignissimos sequi atque accusantium ex eveniet temporibus optio. Adipisci aut rerum soluta vel nihil! Debitis quas laudantium recusandae vitae?
            </Col>
         </Row>
         <hr />
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero nostrum maiores non laboriosam, illum molestiae in. At delectus perspiciatis error omnis assumenda, earum nisi sunt sint inventore totam, odio accusamus quaerat. Consectetur earum eum minima ab distinctio quo non soluta quasi, nobis ut dolorem deleniti reiciendis quos, magni veniam blanditiis asperiores debitis ducimus? Aspernatur temporibus reprehenderit iure provident totam facere, ea fugiat harum, quibusdam perferendis voluptatem! Quis temporibus nam sunt, voluptatum quibusdam praesentium est rerum explicabo quasi totam voluptatem! Minima dignissimos beatae harum, impedit, fugit illum aut sed qui deserunt, vero ad? Quaerat rem ab unde. Odio explicabo voluptas enim, eum quidem incidunt? Doloremque saepe, unde voluptas quo architecto incidunt tempora quisquam modi nobis nemo! Dolorem quisquam quae facilis numquam enim reprehenderit saepe, quia pariatur ad incidunt natus nostrum quis rem eveniet repellat aliquid provident aperiam quod itaque nam ipsum adipisci. Praesentium reprehenderit iste quia repellat est cum at, error expedita quos vel alias ducimus minima tempore odit atque iure esse, sapiente odio cupiditate aliquam sit molestiae! Quibusdam molestias, quae blanditiis in quasi deleniti similique laudantium dolor optio officiis nulla repudiandae dolore expedita aliquam et doloremque cupiditate eos error dolorum! Harum voluptatem non doloribus quos eligendi, alias commodi cupiditate. </p>

      </Container>
   )
}

export default About