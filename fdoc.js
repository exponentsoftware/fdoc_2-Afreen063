
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


  //2


  const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

    function scoresGreaterThan85(user)
    {
         let result=  user.filter((num)=>{
            if(num.scores>85)
            {
                console.log(num.name)
                return num.name;
            }
           })
            console.log(result);
    }
    scoresGreaterThan85(users)

    function addUser(users, newUser)
    {
             let check=0;
             users.map((e)=>{
                if(e.name==newUser)
                {
                    check++;
                }
             });
             if(check==0)
             {
                users.push(newUser);
                console.log(users)
             }
    }
    const usersdata={
        name:'Afreen', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
    }
    addUser(users,usersdata)

    function addUserSkill(users, skill, userName)
    {
        let check=0;
        users.map((e)=>{
           if(e.name==userName)
           {
               e.skills.push(skill)
           }
        });
        return console.log(users)
    }

    addUserSkill(users, "Java", "Afreen")

    function editUser(users,userName, valueToBEChange, newValue)
    {
        users.map((e)=>{
            if(e.name==userName)
            {
                Object.keys(e).forEach((key)=>{
                    if(key==valueToBEChange)
                    {  
                        e[key]=newValue
                       
                       
                    }
                })
            }
         });
         return console.log(users);
    }

    editUser(users, "Afreen","age",26)