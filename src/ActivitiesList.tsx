import { ActivitiesListItem } from "./ActivitiesListItem"
import { Activity } from "./interfaces/Activity"

interface Props {
  activitiesList: Activity[]  
}

export const ActivitiesList = ({ activitiesList }: Props) => {

  return (
    <>
    <div className="mb-3">
      <span style={{color: 'blue', fontWeight: 'bolder', display: 'block'}} >Título</span>
      <span style={{color: 'cornflowerblue', fontWeight: 'bolder', display: 'block'}} >Título corto</span>
      <span style={{color: 'red', fontWeight: 'bolder', display: 'block'}} >Descripción</span>
      <span style={{color: 'orange', fontWeight: 'bolder', display: 'block'}} >Fecha</span>
      <span style={{color: 'green', fontWeight: 'bolder', display: 'block'}} >Intro</span>
      <span style={{color: 'purple', fontWeight: 'bolder', display: 'block'}} >Categoria</span>
    
    </div>
    {
      activitiesList.map(activity =>
        <ActivitiesListItem key={ activity.id } activity={ activity }/>
      )
    }
    </>
  )
}
