const vid=document.querySelector('#video');
const msg=document.querySelector('#msg');
const serv1=document.querySelector("#serv1");
const serv2=document.querySelector("#serv2");
const serv3=document.querySelector("#serv3");
const serv4=document.querySelector("#serv4");
const serv5=document.querySelector("#serv5");
const serv6=document.querySelector("#serv6");
const backk=document.querySelector("#back");

serv1.addEventListener('mouseenter',()=>{
    serv1.style.color="cyan";
});

serv1.addEventListener('mouseleave',()=>{
    serv1.style.color="cyan";
});

serv2.addEventListener('mouseenter',()=>{
    serv2.style.color="cyan";
});

serv2.addEventListener('mouseleave',()=>{
    serv2.style.color="black";
});

serv3.addEventListener('mouseenter',()=>{
    serv3.style.color="cyan";
});

serv3.addEventListener('mouseleave',()=>{
    serv3.style.color="black";
});

serv4.addEventListener('mouseenter',()=>{
    serv4.style.color="cyan";
});

serv4.addEventListener('mouseleave',()=>{
    serv4.style.color="black";
});

serv5.addEventListener('mouseenter',()=>{
    serv5.style.color="cyan";
});

serv5.addEventListener('mouseleave',()=>{
    serv5.style.color="black";
});
serv6.addEventListener('mouseenter',()=>{
    serv6.style.color="cyan";
});

serv6.addEventListener('mouseleave',()=>{
    serv6.style.color="black";
});

serv1.addEventListener('click',()=>{
    document.querySelector("#show").innerHTML="<img src='pics/software.jpg' class='card-img-top' alt='software' width='500px' height='200px'>"+
    "<div class='card-body'>"+"<h5 class='card-title'>Software</h5>"+"<p class='card-text'>Every software you need to run your business! We craft customer-centric software that are scalable, affordable and flexible.</p>"+
      "<a href='software.html' class='btn btn-primary'>Read more!!</a>"+"</div>"
})

serv2.addEventListener('click',()=>{
    serv1.style.color="black";
    document.querySelector("#show").innerHTML="<img src='pics/web.jpeg' class='card-img-top' alt='web' width='500px' height='200px'>"+
    "<div class='card-body'>"+"<h5 class='card-title'>Web Services</h5>"+"<p class='card-text'>Own and host stunning website just like this one in the shortest time possible and make your business standout.</p>"+
      "<a href='web.html' class='btn btn-primary'>Read more!!</a>"+"</div>"
})
serv3.addEventListener('click',()=>{
    serv1.style.color="black";
    document.querySelector("#show").innerHTML="<img src='pics/bulk.jpg' class='card-img-top' alt='bulk' width='500px' height='200px'>"+
    "<div class='card-body'>"+"<h5 class='card-title'>Bulk sms</h5>"+"<p class='card-text'>Its all about promoting your business! Integrate with your up and running business systems that need to send SMS. ie. loan, payroll, accounting, school, hospital software.</p>"+
      "<a href='bulk.html' class='btn btn-primary'>Read more!!</a>"+"</div>"
})
serv4.addEventListener('click',()=>{
    serv1.style.color="black";
    document.querySelector("#show").innerHTML="<img src='pics/branding.jpg' class='card-img-top' alt='branding' width='500px' height='200px'>"+
    "<div class='card-body'>"+"<h5 class='card-title'>Branding</h5>"+"<p class='card-text'>We focus on different takes on brand identity, inspiration and information for anyone who is interested in exelling at their game.Every software you need to run your business! We craft customer-centric software that are scalable, affordable and flexible.</p>"+
      "<a href='brand.html' class='btn btn-primary'>Read more!!</a>"+"</div>"
})
serv5.addEventListener('click',()=>{
    serv1.style.color="black";
    document.querySelector("#show").innerHTML="<img src='pics/IT.jpg' class='card-img-top' alt='IT' width='500px' height='200px'>"+
    "<div class='card-body'>"+"<h5 class='card-title'>IT services</h5>"+"<p class='card-text'>We deliver IT consultancy services and business IT support for organizations. By partnering with us, we can help lead your organization forward with highly-effective strategies.</p>"+
      "<a href='IT.html' class='btn btn-primary'>Read more!!</a>"+"</div>"
})
serv6.addEventListener('click',()=>{
    serv1.style.color="black";
    document.querySelector("#show").innerHTML="<img src='pics/training.jpg' class='card-img-top' alt='train' width='500px' height='200px'>"+
    "<div class='card-body'>"+"<h5 class='card-title'>Training</h5>"+"<p class='card-text'>Train with the best to become one of them. We unleash the genius of coding creating more opportunity as you become a super competitive programmer.</p>"+
      "<a href='train.html' class='btn btn-primary'>Read more!!</a>"+"</div>"
})

// web.html javascript
