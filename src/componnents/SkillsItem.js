import { Navbar,Row,Col,Container, Nav } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";

export const SkillsItem=({skill})=>{
  console.log(skill)
    return(
<>


<Row className="d-flex mt-7 justify-content-center align-items-center px-5 py-6" style={{boxSizing:'border-box'}}>
        {skill.map((item, index) => (
          <Col
            key={index}
            
            md={3}
            lg={3}
            xl={2}
            id="skillItem"
            className="d-flex justify-content-center w-sm-50 mr-md-3 mt-2 py-2"
            style={{boxSizing:'border-box'}}
          >
            <div>
              <Fade bottom>
                <img
                  src={item.img}
                  className="p-1"
                  width="80"
                  height="90"
                  alt={item.title}
                />
                <p className="text-center mb-0">{item.title}</p>
              </Fade>
            </div>
          </Col>
        ))}
      </Row>
 
   
</>
    )
}
export default SkillsItem