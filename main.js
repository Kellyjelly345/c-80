name_of_student_array = []

function submit(){
    var display_student_array = []
    for (let i = 1; i <= 4; i++) {
        var name_of_student = document.getElementById("name_of_the_student_"+i).value;
        console.log(name_of_student)
        name_of_student_array.push(name_of_student);
        
    }
    console.log(name_of_student_array)
    var length_of_array = name_of_student_array.length;
    console.log(length_of_array);

    for (let k= 0; k < length_of_array; k++) {
        display_student_array.push("<h4>NAME-"+name_of_student_array[k]+"</h4>")
        console.log(display_student_array);
        
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}


function sorting(){

    var display_sorted_array = [];
    var sorted_array = name_of_student_array.sort();
    console.log(sorted_array);
    var length_of_sorted_array = sorted_array.length;
    console.log(length_of_sorted_array);

    for (let t = 0; t < length_of_sorted_array; t++) {
       display_sorted_array.push("<h4>Name-"+sorted_array[t]+"</h4>")
       console.log(sorted_array);

        
    }
    console.log(sorted_array);
    document.getElementById("display_name_with_commas").innerHTML = display_sorted_array;
    var remove_sorted = display_sorted_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_sorted;
    document.getElementById("submit_button").style.display = "inline-block";
    document.getElementById("sort_button").style.display = "none";

    for (let z= 1; z <= 4; z++) {
        document.getElementById("name_of_the_student_"+z).value = " ";
        
    }
}