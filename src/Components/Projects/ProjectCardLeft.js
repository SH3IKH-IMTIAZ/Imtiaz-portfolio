import { RellaxWrapper } from 'react-rellax-wrapper'
import './projects.scss'

const ProjectCardLeft = (props) => {
  const { name, role, desc, image, skillsArr, links } = props

  return (
    <div className='row row_2'>
      <div className='img_col'>
        <img className='img_main' src={image} alt='project 1' />
      </div>
      <div className='desc_col'>
        {/* Removed nested wrapper to stop overlap */}
        <RellaxWrapper speed={-0.5} tablet={0.3} mobile={0.3} xs={0.3}>
          <h2 className='proj_name proj_name_2'>{name}</h2>
          <h3 className='proj_designation'>{role}</h3>
          <p className='para'>{desc}</p>
          <div className='stack_btns'>
            {skillsArr.map(skill => <button key={skill}>{skill}</button>)}
            {links.map(link => <a key={link.text} href={link.href} target="_blank" rel="noreferrer"><button>{link.text}</button></a>)}
          </div>
        </RellaxWrapper>
      </div>
    </div>
  )
}

export default ProjectCardLeft