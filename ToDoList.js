const TodoArr=[{name:'keerthi', dueDate:'2004-03-29 '} ,{name:'manoj',dueDate:' 2000-06-28'}];

renderTodoList();

function renderTodoList(){
let todoHtml='';

TodoArr.forEach(function(todoObject,index) {
const {name,dueDate}=todoObject;
const html=`
<div> ${name} </div>
<div> ${dueDate} </div>
<button onclick="TodoArr.splice(${index},1);
renderTodoList();
" class="cs-del"> Delete </button>
`;

todoHtml+=html;
});

document.querySelector('.js-todoHtml').innerHTML=todoHtml;
}

function display(){
 const ipEle=document.querySelector('.js-ip');
 const ipList=ipEle.value;
 const dateInput=document.querySelector('.js-date-input');
 const dueDate=dateInput.value;
 TodoArr.push({name:ipList,dueDate:dueDate});

 ipEle.value='';
 renderTodoList();

}