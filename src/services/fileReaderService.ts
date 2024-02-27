import readXlsxFile from 'read-excel-file'
import { Activity } from '../interfaces/Activity';

export const readFile = async(input: HTMLInputElement): Promise<Activity[]> => {
  
  const activities: Activity[] = [];

  try {
    if(!input.files![0].name.includes('actividades-final')) {
      throw new Error('NOooooo');
    }

    await readXlsxFile(input.files![0])
      .then(rows => {
        rows.shift();
        rows.forEach(row => {
  
          const activity: Activity = {
  
            id: rows.indexOf(row) + 1,
            category: <string> row[0],
            title: <string> row[1],
            location: <string> row[2],
            dateString: `${<string> row[3]}-${<string> row[4] }-${<string> row[5]}`,
            imageUrl: <string> row[9],
            specification: <string> row[6],
            quantity: <number> row[7],
            description: <string> row[10],
            shortTitle: <string> row[12],
            intro: <string> row[11],
            year: <number> row[15],
          };
          activities.push(activity);
        
        })
  
        return activities;
      })
      return activities;

  } catch(err) {
    return []
  }
}