function IP4(){
    var size = document.getElementById("size").selected;
    var crust = document.getElementById("crust").value;
    var toppings = document.getElementById("topping").value;
    var number = document.getElementById("number").value;
    var pizzas =parseInt(number);

    alert("hello")

    if(size == "small"){
        size = 450;
        
    }
    else if(size == "medium"){
        size = 750;
    
    }
    else if(size == "large"){
        size = 1400;
    
    }
    else{
        alert("enter correct value");
    }


    if(crust == "crispy"){
        crust = 50;
    }
    if(crust == "stuffed"){
        crust = 150;
    }
    if(crust == "gluten free"){
        crust = 200;
    }
    







}

