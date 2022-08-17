let books=[
    {
        id:1,
        title:"Introduction To Algorithms",
        author:"Thomas H Cormen, Charles E Leiserson",
        subject:"Computer Science",
        date:"2001"
    },
    {
        id:2,
        title:"All of Programming",
        author:"Andrew Hilton, Anne Bracy",
        subject:"Peogramming",
        date:"2019"
    },
    {
        id:3,
        title:"Data Science for Marketing Analytics",
        author:"Mirza Rahim Baig, Gururajan Govindan, Vishwesh Ravi Shrimali",
        subject:"Data Science",
        date:"2021"
    },
    {
        id:4,
        title:"Computer Science Programming Basics in Ruby",
        author:"Ophir Frieder, Gideon Frieder, David Grossman",
        subject:"Computer Science",
        date:"2013"
    },
    {
        id:5,
        title:"Java",
        author:"Barry A. Burd",
        subject:"Computer Science",
        date:"2011"
    },
    {
        id:6,
        title:"Clean Code: A Handbook of Agile Software Craftsmanship",
        author:"Robert C. Martin",
        subject:"Computer Science",
        date:"2008"
    },
    {
        id:7,
        title:"Guide to Competitive Programming: Learning and Improving",
        author:"Antti Laaksonen",
        subject:"Programming",
        date:"2018"
    },
    {
        id:8,
        title:"Code Complete",
        author:"Steve McConnell",
        subject:"Programming",
        date:"2004"
    },
    {
        id:9,
        title:"Coders at Work: Reflections on the Craft of Programming",
        author:"Peter Seibel",
        subject:"Programming",
        date:"2009"
    },
    {
        id:10,
        title:"Fundamentals of Computer Programming with C#: The Bulgarian",
        author:"Svetlin Nakov, Veselin Kolev",
        subject:"Programming",
        date:"2013"
    },
//--------------------------------
    {
        id:11,
        title:"Coding for Beginners in easy steps",
        author:"Mike McGrath",
        subject:"Programming",
        date:"2015"
    },
    {
        id:12,
        title:"Head First Design Patterns: A Brain-Friendly Guide",
        author:"Eric Freeman, Elisabeth Robson, Bert Bates",
        subject:"Computer Science",
        date:"2004"
    },
    {
        id:13,
        title:"Computer Programming Crash Course: 7 Books in 1- Coding",
        author:"Julian James McKinnon",
        subject:"Programming",
        date:"2021"
    },
    {
        id:14,
        title:"Structure and Interpretation of Computer Programs - 2nd Edition",
        author:"Harold Abelson , Gerald Jay Sussman, Julie Sussman",
        subject:"Computer Science",
        date:"2002"
    },
    {
        id:15,
        title:"The Rust Programming Language",
        author:"Steve Klabnik, Carol Nichols",
        subject:"Computer Science",
        date:"2019"
    },
    {
        id:16,
        title:"The Pragmatic Programmer: From Journeyman to Master",
        author:"Andrew Hunt, David Thomas",
        subject:"Computer Science",
        date:"2003"
    },
    {
        id:17,
        title:"Design Patterns: Elements of Reusable Object-Oriented Software",
        author:"Erich Gamma, Richard Helm, Ralph Johnson",
        subject:"Computer Science",
        date:"2002"
    },
    {
        id:18,
        title:"Becoming a Better Programmer: A Handbook for People Who Care",
        author:"Pete Goodliffe",
        subject:"Computer Science",
        date:"2014"
    },
    {
        id:19,
        title:"The Clean Coder: A Code of Conduct for Professional Programmers",
        author:"Robert C. Martin",
        subject:"Computer Science",
        date:"2011"
    },
    {
        id:20,
        title:"Refactoring: Improving the Design of Existing Code",
        author:"Paul Becker, Martin Fowler, Kent Beck",
        subject:"Computer Science",
        date:"2005"
    },
    {
        id:21,
        title:"Deep Learning",
        author:"Ian Goodfellow",
        subject:"Deep Learning",
        date:"2016"
    },
    {
        id:22,
        title:"Machine Learning for Absolute Beginners",
        author:"Oliver Theobald",
        subject:"Machine Learning",
        date:"2017"
    },
    {
        id:23,
        title:"Python Machine Learning By Example",
        author:"Yuxi (Hayden) Liu",
        subject:"Machine Learning",
        date:"2017"
    },
    {
        id:24,
        title:"Basic Electronics: Solid State",
        author:"BL Theraja",
        subject:"Electronics",
        date:"2007"
    },
    {
        id:25,
        title:"Machine Learning: 4 Books in 1",
        author:"Samuel Hack",
        subject:"Machine Learning",
        date:"2021"
    },
    {
        id:26,
        title:"Digital Electronics: Principles, Devices and Applications",
        author:"Anil K. Maini",
        subject:"Electronics",
        date:"2007"
    },
    {
        id:27,
        title:"Machine Learning in Action",
        author:"Peter Harrington",
        subject:"Machine Learning",
        date:"2012"
    },
    {
        id:28,
        title:"A Textbook of Applied Electronics",
        author:"RS Sedha",
        subject:"Electronics",
        date:"2008"
    },
    {
        id:29,
        title:"Grokking Deep Learning",
        author:"Andrew W. Trask",
        subject:"Deep Learning",
        date:"2019"
    },
    {
        id:30,
        title:"Industrial Applications of Power Electronics",
        author:"Eduardo M. G. Rodrigues",
        subject:"Electronics",
        date:"2020"
    },
    {
        id:31,
        title:"Make: Electronics: Learning Through Discovery",
        author:"Charles Platt",
        subject:"Electronics",
        date:"2009"
    },
    {
        id:32,
        title:"Computing in Communication Networks: From Theory to Practice",
        author:"Frank H.P. Fitzek",
        subject:"Networking",
        date:"2020"
    },
    {
        id:33,
        title:"Principles of Analog Electronics",
        author:"Giovanni Saggio",
        subject:"Electronics",
        date:"2014"
    },
    {
        id:34,
        title:"Advanced Communication and Networking",
        author:"Tai-hoon Kim",
        subject:"Networking",
        date:"2011"
    },
    {
        id:35,
        title:"The Electronics Revolution: Inventing the Future",
        author:"J.B. Williams",
        subject:"Electronics",
        date:"2017"
    },
];
let available=document.getElementById("available");
let hrscroll=document.getElementById("hrscroll");
let choosednum=1;
let list=document.getElementById("display");
printall();

var selected = document.getElementById("innerfilter");
var value = selected.value;
selected.onclick=function alerting(){
    alert(value);
}
var text = selected.options[selected.selectedIndex].text;
var count=1;

function filter() {
    document.getElementById("filter-content").classList.toggle("show");
}
function gettitle(){
    alert("Title");
}
function getauthor(){
    alert("author");
}
function getsubject(){
    alert("Subject");
}
function getdate(){
    alert("Date");
}
var selected="all";
function show(){
    var select = document.getElementById('filterbooks');
    var option = select.options[select.selectedIndex];
    selected=option.value;
}
function printall(){
    hrscroll.innerHTML="";
    var val=1;
    for(let i=1;i<=books.length;i+=10){
        let numElement=document.createElement("a");
        numElement.href="#";
        numElement.style.textDecoration='none';
        numElement.style.paddingLeft=40;
        numElement.innerText=val;
        list.innerHTML="";

    for(let j=0;j<10;j++){
        let li1=document.createElement("span");
        let li2=document.createElement("span");
        let li3=document.createElement("div");
        let li4=document.createElement("div");
    
        li1.style.fontWeight='bold';
        li1.style.fontSize='40px';
        li1.style.width='65%';
        li1.style.display='inline-block';
        li1.style.overflowWrap='break-word';
        li1.style.clear='both';
        li1.style.color='blue';
        li1.style.backgroundColor='#ffd39a';
        li1.style.paddingLeft=20;
        li1.style.paddingTop=20;
        li1.style.paddingRight=20;
    
        li2.style.display='inline-block';
        li2.style.width='20%';
        li2.style.float='right';
        li2.style.color='gray';
        li2.style.marginTop=20;
    
        li3.style.fontSize=25;
        li3.style.width='65%';
        li3.style.backgroundColor='#ffd39a';
        li3.style.paddingLeft=20;
        li3.style.paddingTop=20;
        li3.style.paddingRight=20;
    
        li4.style.fontSize=25;
        li4.style.marginBottom=50;
        li4.style.width='65%';
        li4.style.backgroundColor='#ffd39a';
        li4.style.paddingLeft=20;
        li4.style.paddingTop=20;
        li4.style.paddingRight=20;
        li4.style.paddingBottom=20;
    
        li1.innerText=books[j].title;
        li2.innerText=books[j].date;
        li3.innerText="Subject: "+books[j].subject;
        li4.innerText="Author: "+books[j].author;
        list.appendChild(li1);
        list.appendChild(li2);
        list.appendChild(li3);
        list.appendChild(li4);
        };
        available.innerText=1+" to "+10+" books";
        numElement.onclick=function partitionedList(){
            let num=numElement.innerText;
            available.innerText=(10*(num-1)+1)+" to "+num*10+" books";
            list.innerHTML="";
            books.forEach((item)=>{
                if(item.id>=(10*(num-1)+1)&&item.id<=num*10){
                    print(item,list);
                }
            });
        }
        hrscroll.appendChild(numElement);
        val++;
    }
}
function print(item,list){
    available.innerText=count+" books found";
    let li1=document.createElement("span");
    let li2=document.createElement("span");
    let li3=document.createElement("div");
    let li4=document.createElement("div");


    li1.innerText=item.title;
    li2.innerText=item.date;
    li3.innerText="Subject: "+item.subject;
    li4.innerText="Author: "+item.author;

    li1.style.fontWeight='bold';
    li1.style.fontSize='40px';
    li1.style.width='65%';
    li1.style.display='inline-block';
    li1.style.overflowWrap='break-word';
    li1.style.clear='both';
    li1.style.color='blue';
    li1.style.backgroundColor='#ffd39a';
    li1.style.paddingLeft=20;
    li1.style.paddingTop=20;
    li1.style.paddingRight=20;

    li2.style.display='inline-block';
    li2.style.width='20%';
    li2.style.float='right';
    li2.style.color='gray';
    li2.style.marginTop=20;

    li3.style.fontSize=25;
    li3.style.width='65%';
    li3.style.backgroundColor='#ffd39a';
    li3.style.paddingLeft=20;
    li3.style.paddingTop=20;
    li3.style.paddingRight=20;

    li4.style.fontSize=25;
    li4.style.marginBottom=50;
    li4.style.width='65%';
    li4.style.backgroundColor='#ffd39a';
    li4.style.paddingLeft=20;
    li4.style.paddingTop=20;
    li4.style.paddingRight=20;
    li4.style.paddingBottom=20;

    
    
    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    list.appendChild(li4);
}
function search(){
    var flag=0;
    count=1;
    if(selected==null){
        alert("Select a filter method");
    }
    else{
        if(selected=='all'){
            document.getElementById("searchinput").innerText="";
            document.getElementById("searchinput").value="";
            printall();
        }
        else if(document.getElementById("searchinput").value==""){
            alert("Enter "+selected+" to search");
        }
        else{
            list.innerHTML="";
            books.forEach((item)=>{
                if(selected=='title'&&item.title==document.getElementById("searchinput").value){
                    print(item,list);
                    count++;
                    flag++;
                }
                else if(selected=='author'&&item.author==document.getElementById("searchinput").value){
                    print(item,list);
                    count++;
                    flag++;
                }
                else if(selected=='subject'&&item.subject==document.getElementById("searchinput").value){
                    print(item,list);
                    count++;
                    flag++;
                }
                else if(selected=='date'&&item.date==document.getElementById("searchinput").value){
                    print(item,list);
                    count++;
                    flag++;
                }
            });
            if(flag==0){
                available.innerText="0 books found";
            }
        }
    }
}