import { useState } from 'react'
import { readFile } from './services/fileReaderService';
import { Activity } from './interfaces/Activity';
import { ActivitiesList } from './ActivitiesList';

export const FileUploader = () => {

  const [fileInput, setFileInput] = useState<HTMLInputElement>();
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleFileConfirm = () => {
    if(fileInput != undefined) {
      readFile(fileInput).then(data => {
        setActivities(data);

      });
    }

  }

  return (
    <>
      <h4 className='mb-3'>Seleccione el archivo XLSX para previsualizar las actividades</h4>

      <input className='d-block mb-3 form-control' type="file" accept=".xls,.xlsx"
      onChange={ (ev) => {
        setFileInput(ev.target)
      }}

      />

      {
        fileInput &&
        <button
          className='btn btn-primary mb-4'
          onClick={ () => handleFileConfirm() }
        >Confirmar</button>
      }

      {
        activities.length > 0 &&
        <ActivitiesList activitiesList={ activities }/> 
      }

    </>
  )
}
