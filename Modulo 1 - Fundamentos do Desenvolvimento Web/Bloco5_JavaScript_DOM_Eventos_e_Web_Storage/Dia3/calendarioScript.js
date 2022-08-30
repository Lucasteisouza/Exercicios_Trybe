function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
function createDaysOfTheMonth(){

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dayList = document.getElementById('days');

  for(let index in decemberDaysList){
    const days = decemberDaysList[index];
    const dayOfMonthList = document.createElement('li');
    dayOfMonthList.innerText = days;
    dayOfMonthList.className = 'day'
    if (days === 24 || days === 25 || days === 31){
        dayOfMonthList.classList.add ('holiday');
    }
    if (days===4 || days===11 || days===18|| days===25){
        dayOfMonthList.classList.add('friday');
    }
    dayList.appendChild(dayOfMonthList);


  }
}
createDaysOfTheMonth();

function addHolidays(Feriados){
    const holidayButton = document.createElement('button');
    const buttonContainer = document.querySelector('.buttons-container');
    holidayButton.id= 'btn-holiday';
    holidayButton.innerText='Feriados';
    buttonContainer.appendChild(holidayButton)
}

addHolidays();
const holidays = document.getElementsByClassName('holiday');

function holidayShower(){
    if (holidays[0].style.backgroundColor === 'green'){
        for(let index in holidays){
            holidays[index].style.backgroundColor = '#eee'
        }
    }   else {
        for(let index in holidays){
            holidays[index].style.backgroundColor = 'green';
        }
    }        
}

const holidayButton = document.getElementById('btn-holiday');

holidayButton.addEventListener('click', holidayShower);

function dayZoomer(event){
    event.target.style.fontSize = '50px'

}

function dayUnZoomer(event){
    event.target.style.fontSize= '20px'
}
const days = document.getElementsByClassName('day')

function eventAdder(){
    for (let index =0; index<days.length; index += 1){
        days[index].addEventListener('mouseenter', dayZoomer)
        days[index].addEventListener('mouseleave', dayUnZoomer)
    }
}

eventAdder();

function toDoList(string){
    const myTasks = document.querySelector('.my-tasks');
    const span = document.createElement('span');
    const br = document.createElement('br');
    span.innerText=string
    myTasks.appendChild(span);
 
}

toDoList('cozinhar');

function colorToTask(cor){
    const myTasks = document.querySelector('.my-tasks');
    const div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = cor;
    myTasks.appendChild(div)

}
colorToTask('red')

const task = document.getElementsByClassName('task');
for(let index =0 ; index < task.length; index += 1){
    task[index].addEventListener('click', selectTask);
}

function selectTask(event){
    if(event.target.className === 'task'){
    event.target.className = 'task-selected'
    } else{
        event.target.className = 'task'
    }
}    