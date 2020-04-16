import React, { Component } from 'react';
import './Wirkung.css';

const data = [
  { title: "Title1", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ipsa voluptatibus sapiente aspernatur eaque officia, neque omnis! Dicta maxime eos dolorem, modi repellat veniam possimus beatae tempore. Exercitationem soluta magnam repellat nostrum aliquid, voluptate a, vel odit necessitatibus at id quaerat? Praesentium, quam architecto et necessitatibus in quo eum at.", imgSrc: "./img/Bild1.png" },
  { title: "Titel2", text: "Lorem ipsu m dolor, sit amet  consectetur adipisicing elit. Deserunt ipsa voluptatibus sapiente aspernatur eaque officia, neque omnis! Dicta maxime eos dolorem, modi repellat veniam possimus beatae tempore. Exercitationem soluta magnam repellat nostrum aliquid, voluptate a, vel odit necessitatibus at id quaerat? Praesentium, quam architecto et necessitatibus in quo eum at.", imgSrc: "./img/Bild2.png" },
  { title: "Titel3", text: "Lorem ipsu m dolor, sit amet  consectetur adipisicing elit. Deserunt ipsa voluptatibus sapiente aspernatur eaque officia, neque omnis! Dicta maxime eos dolorem, modi repellat veniam possimus beatae tempore. Exercitationem soluta magnam repellat nostrum aliquid, voluptate a, vel odit necessitatibus at id quaerat? Praesentium, quam architecto et necessitatibus in quo eum at.", imgSrc: "./img/Bild3.png" }
]

class Wirkung extends Component {
  state = { index: 0, index2: 1 }
  handleLeft = () => {
    switch (this.state.index) {
      case 0:
        this.setState({ index: 2, index2: 0 });
        break;
      case 1:
        this.setState({ index: 0, index2: 1 });
        break;
      case 2:
        this.setState({ index: 1, index2: 2 });
        break;
    }
    // if (this.state.index != 0) {
    //   this.setState({ index: this.state.index - 1 });
    // } else {
    //   this.setState({ index: data.length - 1 });
    // }
    // if (this.state.index2 != 0) {
    //   this.setState({ index2: this.state.index - 1 });
    // } else {
    //   this.setState({ index2: data.length - 1 });
    // }
  }
  handleRight = () => {
    switch (this.state.index) {
      case 0:
        this.setState({ index: 1, index2: 2 });
        break;
      case 1:
        this.setState({ index: 2, index2: 0 });
        break;
      case 2:
        this.setState({ index: 0, index2: 1 });
        break;
    }
    // if (this.state.index != data.length - 1) {
    //   this.setState({ index: this.state.index + 1 });
    // } else {
    //   this.setState({ index: 0 });
    // }
    // if (this.state.index2 != data.length - 1) {
    //   this.setState({ index2: this.state.index + 1 });
    // } else {
    //   this.setState({ index2: 0 });
    // }
  }
  render() {
    return (
      <div className="Wirkung">

        <h2 style={{ textAlign: "center", fontFamily: "Ubuntu Mono, monospace", fontSize: 20 }}>So arbeiten wir</h2>
        <section className="WirkungSection">
          <article className="textArticle">
            <h1 className="uuh1">{data[this.state.index].title}</h1>
            <p style={{ width: "400px", marginLeft: "7rem" }}>{data[this.state.index].text}</p>
            <button onClick={this.handleLeft}>Links</button>
            <button onClick={this.handleRight}>Rechts</button>
          </article>
          <article className="imgArticle">
            <img style={{ width: "60%", height: "50vh" }} src={data[this.state.index].imgSrc} alt="" />
            <img style={{ width: "60%", height: "50vh" }} src={data[this.state.index2].imgSrc} alt="" />
            {/* <img style={{width: "60%", height:"50vh"}} src="./img/Bild1.png" alt=""/>
    <img style={{width: "60%", height:"50vh"}} src="./img/Bild2.png" alt=""/>
    <img style={{width: "60%", height:"50vh"}} src="./img/Bild3.png" alt=""/> */}
          </article>
        </section>

      </div>
    );
  }
}


// function Wirkung() {
//   return (
//     <div className="Wirkung">

//       <h2 style={{ textAlign: "center", fontFamily: "Ubuntu Mono, monospace", fontSize: 20 }}>So arbeiten wir</h2>
//       <section className="WirkungSection">
//         <article className="textArticle">
//           <h1 className="uuh1">Wirkungsbereiche</h1>
//           <p style={{ width: "400px", marginLeft: "7rem" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, recusandae fuga repellendus nemo ratione facere quas excepturi in et saepe doloremque rerum illum sequi, laboriosam eveniet. Mollitia aspernatur perferendis ipsa corporis consequuntur eum fugit quos sint quisquam suscipit vitae delectus facere, molestiae nesciunt error. Dignissimos qui quos quo expedita maiores?</p>
//         </article>
//         <article className="imgArticle">
//           <Carousel indicators="false">

//             <Carousel.Item>

//               <img
//                 className="d-block w-100"
//                 src="./img/Bild1.png"
//                 alt="First slide"
//               />

//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="./img/Bild2.png"
//                 alt="Third slide"
//               />


//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="./img/Bild1.png"
//                 alt="Third slide"
//               />


//             </Carousel.Item>
//           </Carousel>

//           {/* <img style={{width: "60%", height:"50vh"}} src="./img/Bild1.png" alt=""/>
//     <img style={{width: "60%", height:"50vh"}} src="./img/Bild2.png" alt=""/>
//     <img style={{width: "60%", height:"50vh"}} src="./img/Bild3.png" alt=""/> */}
//         </article>
//       </section>

//     </div>
//   );
// }

export default Wirkung;
