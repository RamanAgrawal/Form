

const saveData = (e) => {
    e.preventDefault();
    let user=document.getElementById('users');
    user.addEventListener('click', removeItem);
    var name = document.getElementById('name').value;
    // console.log(name);
    var email = document.getElementById('email').value;
    var phone=document.getElementById('phone').value
    class Myobj{
        constructor(name ,email,phone){
        this.name=name;
        this.email=email
        this.phoneNo=phone
        }
    } 
    let tempObj=new Myobj(name,email,phone)
    let myobjnew = JSON.stringify(tempObj);
    localStorage.setItem(`${name}`, myobjnew)

    let newlistitem=document.createElement('li');
    let text=document.createTextNode(`${name}-${email}-${phone}`)
    newlistitem.appendChild(text)
    newlistitem.className=name
    var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  newlistitem.appendChild(deleteBtn);
    user.appendChild(newlistitem)
    document.getElementById("my-form").reset();
    function removeItem(e){
        if(e.target.classList.contains('delete')){
            
            var li = e.target.parentElement;
            
            user.removeChild(li)
            let dltobjkey=li.className;
            localStorage.removeItem(`${dltobjkey}`);
        }
    }
};

