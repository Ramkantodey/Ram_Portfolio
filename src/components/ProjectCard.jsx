import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, sourceLink, liveLink }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx relative">
          <h4>{title}</h4>
          <span className="inline-block px-2 max-w-full text-center">{description}</span>
          <div className="flex md:gap-50 gap-20 top-[130px] left-[13px]   md:top-[130px] md:right-[10px] absolute justify-center">
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-black text-white"
            >
              🛠️GitHub
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border bg-white text-black"
            >
              🔗Demo
            </a>

          </div>

        </div>
      </div>
    </Col>
  );
}
