const TodoArr=[ ];
//const TodoArr=[{name:'Friends Meet', dueDate:'2024-07-19'} ];

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
" class="cs-del"> Remove </button>
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