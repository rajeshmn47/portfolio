import { Navbar,Row,Col,Container, Nav } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";

export const SkillsItem=({skill})=>{
  console.log(skill)
    return(
<>


<Row 
className="d-flex mt-4 justify-content-center align-items-center px-5" >
        {skill.map((item, index) => (
          <Col
            key={index}
            md={1}
            lg={1}
            xl={1}
            id="skillItem"
            className="d-flex justify-content-center w-sm-50 mr-md-4 mt-3 py-2"
          
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