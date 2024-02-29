import readXlsxFile from 'read-excel-file'
import { Activity } from '../interfaces/Activity';

export const readFile = async(input: HTMLInputElement): Promise<Activity[]> => {
  
  const activities: Activity[] = [];

  try {

    await readXlsxFile(input.files![0])
      .then(rows => {
        rows.shift();
        rows.forEach(row => {

          if(rows.indexOf(row) + 1 == 1) {
            const fileCode = <string> row[25];
            if(fileCode != 'actividades-final') {
              throw new Error('El código del archivo es incorrecto.');
            }
          }
          
          const activity: Activity = {
  
            id: rows.indexOf(row) + 1,
            category: <string> row[0],
            title: <string> row[1],
            location: <string> row[2],
            dateString: `${<string> row[3]}-${<string> row[4] }-${<string> row[5]}`,
            imageUrl: <string> row[8],
            specification: <string> row[6],
            quantity: <number> row[7],
            description: <string> row[9],
            shortTitle: <string> row[11],
            intro: <string> row[10],
            year: <number> row[14],
          };
          activities.push(activity);
        
        })
  
        return activities;
      }).catch( () => activities )
      return activities;

  } catch(err) {
    return []
  }
}