const calcy = () => {
    let math = document.getElementById('math').value;
    let physics = document.getElementById('physics').value;
    let english = document.getElementById('english').value;
    let biology = document.getElementById('biology').value;
    let chemistry = document.getElementById('chemistry').value;

    let grades = "";

    let totalGrades = parseFloat(math) +  parseFloat(physics) +  parseFloat(english)+  parseFloat(biology) +  parseFloat(chemistry);
    alert('Your Obtain Mark is :-  ' + totalGrades);

    let percentage = (totalGrades/500)*100;
    alert('Your percentage is :-  ' + percentage);

    if(percentage <=100 && percentage >=80){
        grades = 'A';
    }else if (percentage <=79 && percentage >= 60){
        grades = 'B';
    }else if(percentage <=59 && percentage >=40){
        grades = 'C';
    }else{
        grades = 'F';
    }
    
    if(percentage >= 39.5){
    document.getElementById('showData').innerHTML = `Out of 500 your Total is ${totalGrades} And percentage is ${percentage}%.
     <br> Your grade is ${grades}. You are Pass.`
}
else{
    document.getElementById('showData').innerHTML = `Out of 500 Your Total  ${totalGrades} And percentage is ${percentage}%.
     <br> Your grade is ${grades}. You are Fail.`
}
}


