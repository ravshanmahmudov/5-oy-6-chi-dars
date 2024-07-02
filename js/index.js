const field = document.querySelector('#field')
const button = document.querySelector('#button')
const wrapper = document.querySelector('#tods-wrapper')

function createItem(value){
return`
<div class="item">
<div class="left">
    <input type="checkbox" id="">
    <p>${value}</p>
</div>
<div class="right">
    <button>
        <i class="fa-solid fa-pen"></i>
        <span>Edit</span>
    </button>
    <button>
        <i class="fa-solid fa-trash"></i>
        <span>Del</span>
    </button>
</div>
</div>
`;
}


button&&button.addEventListener('click',function(event){
event.preventDefault();
const todo = field.value;

if(todo.length<5){
alert("eng kami 6 ta belgidan iborat bolsin")
field.focus();
field.style.outlineColor = 'red'
return;
}

const item = createItem(todo)
wrapper.innerHTML +=item;
field.value = '';
field.focus();
})