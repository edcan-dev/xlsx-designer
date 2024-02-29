import { Activity } from './interfaces/Activity';
interface Props {
  activity: Activity
}
export const ActivitiesListItem = ({ activity }: Props) => {

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={ activity.imageUrl } className="img-fluid rounded-start" style={{height: '100%', objectFit: 'cover'}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title blue-text">{ `${ activity.id } - ${ activity.title }` }</h5>
            
            <p className="card-text light-blue-text mb-3">{ activity.shortTitle }</p>
            
            <p className="card-text gray-text">{ activity.location }</p>
            <p className="card-text red-text">{ activity.description }</p>
            <p className="card-text">
              <small className="orange-text">{ activity.dateString }</small>
            </p>
            <p className="card-text">
              <small className="green-text">{ activity.intro }</small>
            </p>
            <p className="card-text">
              <small className="purple-text">{ activity.category }</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
