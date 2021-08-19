import "./App.css";
import Card from "./Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "./Arrow/Arrow";
import LiveButton from "./Live/LiveButton";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
};
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LiveButton />
          <div className="text">Upcoming Live Coaching</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
          <Arrow />
          <Arrow right />
        </div>
      </div>
      <div style={{ height: "100px", width: "90vw", margin: "100px" }}>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </>
  );
}

export default App;
