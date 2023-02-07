const saveData = (e) => {
    e.preventDefault();
    let user=document.getElementById('users');
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
    user.appendChild(newlistitem)
    document.getElementById("my-form").reset();
};
