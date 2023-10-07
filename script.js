console.log('hello guys');
// alert('welcome');
var a=9;


 console.log(a);//block1
{
 var a=20;
 console.log(a); //block2
}
// let b=23;
// console.log(b);
{ 
    let b=34;
    console.log(b);
} 
console.log(b);
//const
const t=30
console.log(t)
{
    const t=90;
    console.log(t);


}
console.log(t);
//data types
var nam='Angel is a good grl..... aanpriya is bad';
console.log(typeof(nam));
//numbers
var count=19;
console.log(typeof(count));
//boolean
var bb=true;
console.log(typeof(bb))
//undefind
var gtype;
console.log(typeof(gtype))
//arrays
let arr=['red','blue','white',10]
console.log(arr[0])
console.log(arr.length)
arr.push('violet');
console.log(arr);
arr.pop();
console.log(arr);
//javascript objects
let car={
    mileage:100,
    model:'i10',
    color:'red'    
}
console.log(car);
console.log(car.model)
console.log(car.mileage);
let person=new Object();
person.gender='male';
person.height=180;
console.log(person);

{
    var a=10; b=5;
    console.log(a+b)
}

{
    var a=10; b=5;
    console.log(a-b)
}

{
    var a=10; b=5;
    console.log(a*b)
}

{
    var a=10; b=5;
    console.log(a/b)
}

{
    var a=10; b=5;
    console.log(a%b)
}

var a=10;b=a++;
console.log(b);
console.log(a);

var a=10;b=++a;
console.log(b);
console.log(a);


//if else
if ( a==b) {
    console.log('a is equal to b')
}else
{
    console.log('a is not equal to b')
}
//if else

if ( a!=b) {
    console.log('a not equal to b')
}else
{
    console.log('a is  equal to b or ...')
}
if ( a==b && a==10) {
    console.log('a is equal to b')
}else
{
    console.log('a is not equal to b and a is not 1')
} 
//if else
c=10
d='10'

if ( c===d) {
    console.log('c is equal to d')
}else
{
    console.log('c is not equal to d')
}


if ( c==d) {
    console.log('c is equal to d')
}else
{
    console.log('c is not equal to d')
}

//if else
c=10
d=100
if ( c>d && c==d) {
    console.log('c is greater than d or c is equal to d')
}else
{
    console.log('c is not greater than d or c is not equal to d')
}

let X=10;
let M=5;
let J=10;
let T=100

var exp=(X+M*(J-T)-7);
console.log(exp);


const arr2=[
    {
        name:"maya"
    },{
        name:'krishna'
    }
]


functions
function display(name){
    console.log('hi  ' +   name+ '  welcome to js');
}
display('angel');//function call

function addition(t,s)
{var result=t+s;
    return result;

}
var result=addition(10,30);
console.log('the sum is',result);

function sub(w,m)
{var subst=w-m;
    return subst;

}
var subst=sub(80,50);
console.log('the sum is',subst);

function div(u,v)
{var divi=u/v;
    return divi;

}
var divi=div(560,40);
console.log('the div is',divi);
