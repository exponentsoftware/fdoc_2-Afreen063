
//question 1
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

function createArrayOfArrays(arr)
{
    let result=[],wrd=[];
    let l=0,alpha='';
    for(let i=0;i<arr.length;i++)
    {
          wrd[2]=arr[i].length;
          wrd[0]=arr[i];
          for(let j=0;j<3;j++)
          {
            alpha+=arr[i].charAt(j);
          }  
        wrd[1]=alpha;
         //console.log(result);
          result[i]=wrd;
          l=0;
          alpha=''; 
          wrd=[];
    }
    return console.log(result);
}

  createArrayOfArrays(countries)