import "./services.css";
import dataService from "./data";
import Card from "../../components/Card";

const Services = () => {
  return (
    <section id="services">
      <h2>Skills</h2>
      <p>My technical level</p>
      <div className="container services__container" data-aos="fade-up">
        {dataService.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
