function message(){
    var FirstName = document.getElementById('first-name');
    var LastName = document.getElementById('last-name');
    var Gender = document.getElementById('gender');
    var Email = document.getElementById('email');
    var Address = document.getElementById('address');
    const success= document.getElementById('success');
    const danger= document.getElementById('danger');

    if(FirstName.value === '' || LastName.value === '' || Gender.value ==='' || Email.value ==='' || Address.value === ''){
        danger.style.display = 'block';
    }
        else{
            setTimeout(() =>{
                FirstName.value='';
                LastName.value='';
                Gender.value='';
                Email.value='';
                Address.value='';
            },2000);

            success.style.display='block';
        }
        setTimeout(() =>{
            danger.style.display = 'none';
            success.style.display = 'none';
        },4000);
    
}
